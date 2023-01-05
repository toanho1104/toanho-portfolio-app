import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';

import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface IProps {
  children?: React.ReactNode;
  animationType?: 'spring' | 'timing';
  transform?: 'scale' | 'translateY';
}
export interface IHandle {
  handleShowModal: () => void;
  handleHideModal: () => void;
}

export const ModalCustom = forwardRef<IHandle, IProps>((props, ref) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const _handleToggleShow = useCallback(() => {
    setIsVisible(pre => !pre);
  }, []);

  const progress = useSharedValue(0);

  const bgColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [BGStartColor, BGEndColor],
    );
    return {backgroundColor};
  });

  const aniChildren = useAnimatedStyle(() => {
    switch (props.transform) {
      case 'translateY':
        const translateY = interpolate(progress.value, [0, 1], [900, 0]);
        return {
          transform: [{translateY}],
        };
      default:
        const scale = interpolate(progress.value, [0, 1], [0.8, 1]);
        const opacity = interpolate(progress.value, [0, 1], [0, 1]);

        return {
          transform: [{scale}],
          opacity,
        };
    }
  });

  const _handleShowModal = useCallback(() => {
    _handleToggleShow();
    if (props.animationType === 'spring') {
      progress.value = withSpring(1, {
        stiffness: 95,
      });
    } else {
      progress.value = withTiming(1);
    }
  }, [_handleToggleShow, progress, props.animationType]);

  const _handleHideModal = useCallback(() => {
    progress.value = withTiming(0, {}, isFinished => {
      if (isFinished) {
        runOnJS(_handleToggleShow)();
      }
    });
  }, [_handleToggleShow, progress]);

  useImperativeHandle(ref, () => ({
    handleShowModal: _handleShowModal,
    handleHideModal: _handleHideModal,
  }));

  return (
    <Modal visible={isVisible} transparent>
      <TouchableWithoutFeedback onPress={_handleHideModal}>
        <Animated.View style={[styles.modalContainer, bgColor]}>
          <Animated.View style={[aniChildren]}>
            {props?.children ? props?.children : <DefaultChildren />}
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
});

const DefaultChildren = () => {
  return (
    <View style={styles.childrenContainer}>
      <Text style={styles.txtDefaultChildren}>No props children</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    // opacity: 0,
  },
  childrenContainer: {
    backgroundColor: 'white',
    width: 200,
    height: 150,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDefaultChildren: {
    color: 'black',
  },
});

const BGStartColor = 'rgba(0, 0, 0, 0.1)';
const BGEndColor = 'rgba(0, 0, 0, 0.6)';

import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import {Circle, G, Svg} from 'react-native-svg';

import React from 'react';

import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';

import MyIcon from '@components/icon';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {
  scrollOffset: SharedValue<number>;
  onPress: () => void;
}
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const size = 90;
const strokeWidth = 3;
const center = size / 2;
const radius = size / 2 - strokeWidth / 2;
const circumference = 2 * Math.PI * radius;

export const NextButton = ({scrollOffset, onPress}: IProps) => {
  const animatedProps = useAnimatedProps(() => {
    const strokeDash = interpolate(
      scrollOffset.value,
      [0, SCREEN_WIDTH, SCREEN_WIDTH * 2, SCREEN_WIDTH * 3],
      [25, 50, 75, 100],
      Extrapolation.CLAMP,
    );
    const strokeDashoffset = withTiming(
      circumference - (circumference * strokeDash) / 100,
      {duration: 150},
    );

    return {strokeDashoffset};
  });

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation={-90} origin={center}>
          <Circle
            stroke="#a3a2a2"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <AnimatedCircle
            animatedProps={animatedProps}
            stroke="#872525"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      {/* <MyText>Next</MyText> */}
      <TouchableOpacity style={styles.innerButton} onPress={onPress}>
        <MyIcon name="next" size={80} fill="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'center',
  },

  innerButton: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 100,
    width: size - 20,
    height: size - 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

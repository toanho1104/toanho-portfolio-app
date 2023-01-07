import {MyText} from '@components/text';
import {useTheme} from '@hooks/useTheme';
import {isIosPlatform} from '@utils/checks';
import {heightScale} from '@utils/dimensions';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

import React, {useEffect} from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {
  content: string;
  offset: any;
}

export const ContentViewItem = ({offset, content}: IProps) => {
  const {colors} = useTheme();

  const opacityStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      offset.value,
      [0, SCREEN_WIDTH / 2, SCREEN_WIDTH],
      [1, 0, 1],
    );
    return {opacity: opacity};
  }, []);
  return (
    <View
      style={StyleSheet.flatten([
        styles.itemContainer,
        {backgroundColor: colors.BACKGROUND_PRIMARY},
      ])}>
      <Animated.View style={opacityStyle}>
        <MyText>{content}</MyText>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: SCREEN_WIDTH,
    height: heightScale(300),
    borderTopLeftRadius: isIosPlatform ? 40 : 30,
    borderTopRightRadius: isIosPlatform ? 40 : 30,
    borderBottomLeftRadius: isIosPlatform ? 40 : 30,
    borderBottomRightRadius: isIosPlatform ? 40 : 30,
    position: 'absolute',
    bottom: heightScale(0),
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: heightScale(100),
  },
});

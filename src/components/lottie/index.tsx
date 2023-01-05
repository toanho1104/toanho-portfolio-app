import Lottie, {AnimationObject} from 'lottie-react-native';

import React from 'react';

import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

interface IProp {
  source: string | AnimationObject | {uri: string};
  loop?: boolean;
  autoPlay?: boolean;
  style?: StyleProp<ViewStyle>;
}
const noImage = require('./assets/image/noImage.json');

export const LottieImage = ({
  source = noImage,
  loop,
  autoPlay,
  style,
}: IProp) => {
  return (
    <Lottie
      source={source}
      loop={loop}
      autoPlay={autoPlay}
      style={StyleSheet.flatten([styles.container, style])}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
  },
});

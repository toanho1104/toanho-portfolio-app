import FastImage, {ImageStyle} from 'react-native-fast-image';

import React from 'react';

import {StyleProp, StyleSheet} from 'react-native';

interface IProps {
  uri: string;
  resizeMode: 'contain' | 'cover' | 'stretch' | 'center';
  style: StyleProp<ImageStyle>;
}

export const MyImage = ({
  uri = 'https://unsplash.it/400/400?image=1',
  resizeMode = 'contain',
  style,
}: IProps) => (
  <FastImage
    style={StyleSheet.flatten([styles.container, style])}
    source={{
      uri: uri,
    }}
    resizeMode={resizeMode}
  />
);

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
});

import {fontPixel} from '@utils/dimensions';

import React from 'react';

import {StyleSheet, Text} from 'react-native';

export const fonts = {
  regular: {
    fontFamily: 'Baloo2-Regular',
  },
  bold: {
    fontFamily: 'Baloo2-SemiBold',
  },
};

interface IProps {
  children?: string;
  color?: string;
  font?: 'regular' | 'bold';
  type?: 'h1' | 'h2' | 'h3' | 'title' | 'subtitle' | 'body' | 'caption';
}

export const MyText = ({
  children = 'No caption',
  color = 'black',
  type = 'caption',
  font = 'regular',
}: IProps) => {
  return (
    <Text style={StyleSheet.compose(styles[font][type], {color: color})}>
      {children}
    </Text>
  );
};

const styles = {
  bold: StyleSheet.create({
    h1: {
      ...fonts.bold,
      fontSize: fontPixel(32),
      lineHeight: fontPixel(38),
    },
    h2: {
      ...fonts.bold,
      fontSize: fontPixel(24),
      lineHeight: fontPixel(32),
    },
    h3: {
      ...fonts.bold,
      fontSize: fontPixel(20),
      lineHeight: fontPixel(28),
    },
    title: {
      ...fonts.bold,
      fontSize: fontPixel(18),
      lineHeight: fontPixel(26),
    },
    subtitle: {
      ...fonts.bold,
      fontSize: fontPixel(18),
      lineHeight: fontPixel(26),
    },
    body: {
      ...fonts.bold,
      fontSize: fontPixel(18),
      lineHeight: fontPixel(26),
    },
    caption: {
      ...fonts.bold,
      fontSize: fontPixel(18),
      lineHeight: fontPixel(26),
    },
  }),

  regular: {
    h1: {
      ...fonts.regular,
      fontSize: fontPixel(32),
      lineHeight: fontPixel(38),
    },
    h2: {
      ...fonts.regular,
      fontSize: fontPixel(24),
      lineHeight: fontPixel(32),
    },
    h3: {
      ...fonts.regular,
      fontSize: fontPixel(20),
      lineHeight: fontPixel(28),
    },
    title: {
      ...fonts.regular,
      fontSize: fontPixel(18),
      lineHeight: fontPixel(26),
    },
    subtitle: {
      ...fonts.regular,
      fontSize: fontPixel(18),
      lineHeight: fontPixel(26),
    },
    body: {
      ...fonts.regular,
      fontSize: fontPixel(18),
      lineHeight: fontPixel(26),
    },
    caption: {
      ...fonts.regular,
      fontSize: fontPixel(18),
      lineHeight: fontPixel(26),
    },
  },
} as any;

import React from 'react';

import {StyleProp, StyleSheet, Text} from 'react-native';
import {TextStyle} from 'react-native';

import {fontPixel} from '@utils/dimensions';

export const fonts = {
  regular: {
    fontFamily: 'Baloo2-Regular',
  },
  bold: {
    fontFamily: 'Baloo2-SemiBold',
  },
};

type FontTagType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'caption';
type fontFamily = 'regular' | 'bold';

type TStyles = {
  [n in fontFamily]: {[j in FontTagType]: TextStyle};
};

interface IProps {
  children?: string;
  color?: string;
  fontFamily?: fontFamily;
  typeTag?: FontTagType;
  style?: StyleProp<TextStyle> | undefined;
}

export const MyText = ({
  children = 'No caption',
  color = 'black',
  typeTag = 'caption',
  fontFamily = 'regular',
  style,
}: IProps) => {
  return (
    <Text
      style={StyleSheet.flatten([
        styles[fontFamily][typeTag],
        {color: color},
        style,
      ])}>
      {children}
    </Text>
  );
};

const styles: TStyles = {
  bold: StyleSheet.create({
    h1: {
      ...fonts.bold,
      fontSize: fontPixel(32),
      lineHeight: fontPixel(44),
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
      lineHeight: fontPixel(44),
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
};

console.log(styles);

import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 11
const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

type TBased = 'width' | 'height';

const normalize = (size: number, based: TBased = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

//for width  pixel
export const widthScale = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
export const heightScale = (size: number) => {
  return normalize(size, 'height');
};
//for font  pixel
export const fontPixel = (size: number) => {
  return heightScale(size);
};
//for Margin and Padding vertical pixel
export const VerticalScale = (size: number) => {
  return heightScale(size);
};
//for Margin and Padding horizontal pixel
export const HorizontalScale = (size: number) => {
  return widthScale(size);
};

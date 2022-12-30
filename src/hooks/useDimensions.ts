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

export const useScale = () => {
  //for width  pixel
  const widthScale = (size: number) => {
    return normalize(size, 'width');
  };
  //for height  pixel
  const heightScale = (size: number) => {
    return normalize(size, 'height');
  };
  //for font  pixel
  const fontPixel = (size: number) => {
    return heightScale(size);
  };
  //for Margin and Padding vertical pixel
  const VerticalScale = (size: number) => {
    return heightScale(size);
  };
  //for Margin and Padding horizontal pixel
  const HorizontalScale = (size: number) => {
    return widthScale(size);
  };

  return {widthScale, heightScale, fontPixel, VerticalScale, HorizontalScale};
};

import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 11
const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

type TBased = 'width' | 'height';

const normalize = (() => {
  // store cached to closure
  const cached: Record<`${TBased}-${number}`, number> = {};

  return (size: number, based: TBased = 'width') => {
    //If cached hit, return normalized size
    if (cached[`${based}-${size}`]) {
      return cached[`${based}-${size}`];
    }
    //else calculate and cache
    const newSize =
      based === 'height' ? size * heightBaseScale : size * widthBaseScale;
    const roundSize = Math.round(PixelRatio.roundToNearestPixel(newSize));
    cached[`${based}-${size}`] = roundSize;
    return roundSize;
  };
})();

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

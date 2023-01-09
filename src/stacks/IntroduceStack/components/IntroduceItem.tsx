import {MyImage} from '@components/image';
import {MyText} from '@components/text';
import {heightScale, widthScale} from '@utils/dimensions';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import React, {useMemo} from 'react';

import {Dimensions, StyleSheet} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

interface IProps {
  item: any;
  scrollOffset: SharedValue<number>;
  index: number;
}

export const IntroduceItem = ({item, scrollOffset, index}: IProps) => {
  const {title, image} = item;

  const inputRage = useMemo(
    () => [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ],
    [index],
  );
  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(scrollOffset.value, inputRage, [0.5, 1, 0.5]);

    return {
      transform: [{scale}],
    };
  }, []);

  return (
    <Animated.View style={[styles.itemContainer, animatedStyles]}>
      <MyImage uri={image} style={styles.image} resizeMode="cover" />
      <MyText>{title}</MyText>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT,
  },
  image: {
    width: widthScale(160),
    height: widthScale(160),
    borderRadius: 200,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: heightScale(300),
  },
});

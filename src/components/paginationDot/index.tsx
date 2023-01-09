import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import React, {useMemo} from 'react';

import {Dimensions, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {
  data: Array<object>;
  scrollOffset: SharedValue<number>;
  style?: StyleProp<ViewStyle>;
  activeDotColor?: string;
  deActiveDotColor?: string;
}

export const PaginationDot = ({
  data = [],
  scrollOffset,
  style,
  activeDotColor,
  deActiveDotColor,
}: IProps) => {
  return (
    <View style={[styles.container, style]}>
      {data.map((_, index) => (
        <PaginationDotItem
          index={index}
          scrollOffset={scrollOffset}
          key={index}
          activeDotColor={activeDotColor}
          deActiveDotColor={deActiveDotColor}
        />
      ))}
    </View>
  );
};

const PaginationDotItem = ({
  index,
  scrollOffset,
  deActiveDotColor = 'black',
  activeDotColor = 'blue',
}: {
  index: number;
  scrollOffset: SharedValue<number>;
  deActiveDotColor?: string;
  activeDotColor?: string;
}) => {
  const inputRange = useMemo(
    () => [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ],
    [index],
  );
  const widthStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(scrollOffset.value, inputRange, [
      deActiveDotColor,
      activeDotColor,
      deActiveDotColor,
    ]);
    const width = interpolate(
      scrollOffset.value,
      inputRange,
      [10, 20, 10],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      scrollOffset.value,
      inputRange,
      [0.5, 10, 0.5],
      Extrapolate.CLAMP,
    );

    return {width, opacity, backgroundColor};
  }, []);

  return <Animated.View style={[styles.dot, widthStyle]} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'black',
  },
});

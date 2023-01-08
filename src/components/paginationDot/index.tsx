import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import React, {useMemo} from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {
  data: Array<object>;
  scrollOffset: any;
}

export const PaginationDot = ({data = [], scrollOffset}: IProps) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => (
        <PaginationDotItem
          index={index}
          scrollOffset={scrollOffset}
          key={index}
        />
      ))}
    </View>
  );
};

const PaginationDotItem = ({
  index,
  scrollOffset,
}: {
  index: number;
  scrollOffset: any;
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

    return {width, opacity};
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

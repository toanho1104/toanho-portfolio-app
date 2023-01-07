import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import React from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {
  data: Array<object>;
  scrollOffset: any;
}

export const PaginationDot = ({data = [], scrollOffset}: IProps) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const inputRange = [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ];

        const widthStyle = useAnimatedStyle(() => {
          const width = interpolate(
            scrollOffset.value,
            inputRange,
            [10, 20, 10],
            Extrapolate.CLAMP,
          );

          return {width: width};
        }, []);
        return <Animated.View style={[styles.dot, widthStyle]} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'black',
    borderWidth: 1,
  },
});

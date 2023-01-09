import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import React, {useCallback} from 'react';

import {Dimensions, StyleSheet} from 'react-native';

import {IntroduceItem} from './IntroduceItem';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {
  onScroll: any;
  data: any;
  value: any;
  scrollOffset: SharedValue<number>;
}

const ListViewIntroduce = ({onScroll, data, value, scrollOffset}: IProps) => {
  const renderItem = useCallback(
    ({item, index}: {item: any; index: number}) => {
      return (
        <IntroduceItem item={item} scrollOffset={scrollOffset} index={index} />
      );
    },
    [scrollOffset],
  );

  const color = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      value.value,
      [0, SCREEN_WIDTH, SCREEN_WIDTH * 2],
      ['red', 'blue', 'white'],
    );
    return {backgroundColor: backgroundColor};
  }, []);

  return (
    <Animated.View style={[styles.container, color]}>
      <Animated.FlatList
        onScroll={onScroll}
        horizontal
        data={data}
        keyExtractor={e => `${e.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        snapToInterval={SCREEN_WIDTH}
        decelerationRate="fast"
        snapToAlignment="center"
        scrollEventThrottle={16}
      />
    </Animated.View>
  );
};
export default ListViewIntroduce;

const styles = StyleSheet.create({
  container: {flex: 1},
});

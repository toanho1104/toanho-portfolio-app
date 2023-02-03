import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {TIntroduceItem} from 'src/types/introduceType';

import React, {useCallback} from 'react';

import {Dimensions, StyleSheet, ViewToken} from 'react-native';

import {IntroduceItem} from './IntroduceItem';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {
  onScroll: any;
  data: TIntroduceItem[];
  value: any;
  scrollOffset: SharedValue<number>;
  refs: any;
  onViewableItemsChanged:
    | ((info: {
        viewableItems: Array<ViewToken>;
        changed: Array<ViewToken>;
      }) => void)
    | null
    | undefined;
}

const ListViewIntroduce = ({
  onScroll,
  data,
  value,
  scrollOffset,
  onViewableItemsChanged,
  refs,
}: IProps) => {
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
      [0, SCREEN_WIDTH, SCREEN_WIDTH * 2, SCREEN_WIDTH * 3],
      ['#F6CCD0', '#BBDCCA', '#B3DCE3', '#FDEEB3'],
    );
    return {backgroundColor: backgroundColor};
  }, []);

  return (
    <Animated.View style={[styles.container, color]}>
      <Animated.FlatList
        ref={refs}
        onScroll={onScroll}
        horizontal
        data={data}
        keyExtractor={e => `${e.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        snapToInterval={SCREEN_WIDTH}
        decelerationRate="fast"
        snapToAlignment="center"
        scrollEventThrottle={200}
        onViewableItemsChanged={onViewableItemsChanged}
      />
    </Animated.View>
  );
};
export default ListViewIntroduce;

const styles = StyleSheet.create({
  container: {flex: 1},
});

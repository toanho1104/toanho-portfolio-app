import {MyText} from '@components/text';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import React, {useCallback} from 'react';

import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';

import {IntroduceItem} from './IntroduceItem';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {
  onScroll: any;
  data: any;
  value: any;
}

const ListViewIntroduce = ({onScroll, data, value}: IProps) => {
  const renderItem = useCallback((item: any) => {
    return <IntroduceItem item={item} />;
  }, []);

  const color = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      value.value,
      [0, SCREEN_WIDTH, SCREEN_WIDTH * 2],
      ['red', 'blue', 'red'],
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
export default React.memo(ListViewIntroduce);

const styles = StyleSheet.create({
  container: {flex: 1},
});

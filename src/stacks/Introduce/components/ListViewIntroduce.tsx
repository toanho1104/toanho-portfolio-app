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
      [0, SCREEN_WIDTH],
      ['red', 'blue'],
    );
    return {backgroundColor: backgroundColor};
  }, []);

  return (
    <Animated.View style={[styles.container, color]}>
      <FlatList
        onScroll={onScroll}
        horizontal
        data={data}
        keyExtractor={e => `${e.id}`}
        renderItem={renderItem}
        snapToInterval={SCREEN_WIDTH}
        decelerationRate="fast"
        snapToAlignment="start"
      />
    </Animated.View>
  );
};
export default React.memo(ListViewIntroduce);

const styles = StyleSheet.create({
  container: {flex: 1},
});

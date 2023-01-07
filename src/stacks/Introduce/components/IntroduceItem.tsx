import {MyText} from '@components/text';

import React from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {
  item: any;
}

export const IntroduceItem = ({item}: IProps) => {
  const {title} = item.item;
  return (
    <View style={styles.itemContainer}>
      <MyText>{title}</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: SCREEN_WIDTH,
  },
});

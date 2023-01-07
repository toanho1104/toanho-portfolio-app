import {MyImage} from '@components/image';
import {MyText} from '@components/text';
import {heightScale, widthScale} from '@utils/dimensions';

import React from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {
  item: any;
}

export const IntroduceItem = ({item}: IProps) => {
  const {title, image} = item.item;
  return (
    <View style={styles.itemContainer}>
      <MyImage uri={image} style={styles.image} resizeMode="cover" />
      <MyText>{title}</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
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

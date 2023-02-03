import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {TIntroduceItem} from 'src/types/introduceType';

import React from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';

import {MyText} from '@components/text';

import {isIosPlatform} from '@utils/checks';
import {heightScale, widthScale} from '@utils/dimensions';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {
  item: TIntroduceItem;
}

export const ContentViewItem = ({item}: IProps) => {
  // const {colors} = useTheme();

  return (
    <View style={styles.itemContainer}>
      <Animated.View
        key={item.id}
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}>
        <MyText font="regular" type="subtitle" style={styles.text}>
          {item?.content}
        </MyText>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: SCREEN_WIDTH,
    height: heightScale(300),
    borderTopLeftRadius: isIosPlatform ? 40 : 30,
    borderTopRightRadius: isIosPlatform ? 40 : 30,
    borderBottomLeftRadius: isIosPlatform ? 40 : 30,
    borderBottomRightRadius: isIosPlatform ? 40 : 30,
    position: 'absolute',
    bottom: heightScale(0),
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: heightScale(100),
    backgroundColor: 'white',
    paddingHorizontal: widthScale(24),
  },
  text: {textAlign: 'center'},
});

import {MyText} from '@components/text';
import {useTheme} from '@hooks/useTheme';
import {isIosPlatform} from '@utils/checks';
import {heightScale} from '@utils/dimensions';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

import React, {useEffect, useMemo} from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {
  scrollOffset: any;
  data: Array<object>;
}

export const ContentViewItem = ({scrollOffset, data = []}: IProps) => {
  const {colors} = useTheme();

  return (
    <View style={styles.itemContainer}>
      {data.map((item, index) => {
        return (
          <RenderItem
            key={index}
            content={item?.content}
            scrollOffset={scrollOffset}
            index={index}
          />
        );
      })}
    </View>
  );
};

const RenderItem = ({content, scrollOffset, index}) => {
  const inputRage = useMemo(
    () => [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ],
    [index],
  );
  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(scrollOffset.value, inputRage, [0, 1, 0]);
    const translateX = interpolate(scrollOffset.value, inputRage, [
      -SCREEN_WIDTH,
      0,
      SCREEN_WIDTH,
    ]);

    return {opacity, transform: [{translateX: translateX}]};
  }, []);

  return (
    <Animated.View style={[animatedStyles, {position: 'absolute'}]}>
      <MyText style={styles.text}> {content}</MyText>
    </Animated.View>
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
  },
  text: {textAlign: 'center'},
});

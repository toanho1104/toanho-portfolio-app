import {MyText} from '@components/text';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import {Circle, G, Svg} from 'react-native-svg';

import React from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {
  scrollOffset: SharedValue<number>;
}
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const NextButton = ({scrollOffset}: IProps) => {
  const size = 80;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const animatedProps = useAnimatedProps(() => {
    console.log('aaaaa', scrollOffset.value, SCREEN_WIDTH * 2);
    const strokeDash = interpolate(
      scrollOffset.value,
      [0, SCREEN_WIDTH, SCREEN_WIDTH * 2, SCREEN_WIDTH * 3],
      [25, 50, 75, 100],
      Extrapolation.CLAMP,
    );
    const strokeDashoffset = withTiming(
      circumference - (circumference * strokeDash) / 100,
      {duration: 150},
    );

    return {strokeDashoffset};
  });

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation={-90} origin={center}>
          <Circle
            stroke="#a3a2a2"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <AnimatedCircle
            animatedProps={animatedProps}
            stroke="#872525"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            // strokeDashoffset={circumference - (circumference * 25) / 100}
          />
        </G>
      </Svg>
      {/* <MyText>Next</MyText> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginBottom: 30},
});

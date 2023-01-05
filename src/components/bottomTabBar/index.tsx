import Icon from '@components/icon';
import {LottieImage} from '@components/lottie';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {isIosPlatform} from '@utils/checks';
import {widthScale} from '@utils/dimensions';
import {useTranslation} from 'react-i18next';

import React, {Fragment, useMemo} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {TBottomStackParamList} from '../../types/navigationType';

export type BottomTabBarProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

export const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const {t} = useTranslation(['skill']);
  const BOTTOM_TAB_BAR_DATA: TBottomStackParamList = useMemo(() => {
    return {
      Contact: {
        key: 1,
        name: t('de'),
        // true: <Icon name="contract" size={24} fill="#4705b9" />,
        icons: 'skill',
        iconJson: require('../../components/lottie/assets/image/132375-hypercube.json'),
        true: (
          <LottieImage
            autoPlay={true}
            loop={true}
            source={require('../../components/lottie/assets/image/132375-hypercube.json')}
          />
        ),
        false: (
          <LottieImage
            autoPlay={false}
            loop={false}
            source={require('../../components/lottie/assets/image/132375-hypercube.json')}
          />
        ),
      },
      Skill: {
        key: 2,
        name: t('Skill'),
        icons: 'skill',
        iconJson: require('../../components/lottie/assets/image/196-material-wave-loading.json'),
        true: (
          <LottieImage
            autoPlay={true}
            loop={true}
            source={require('../../components/lottie/assets/image/196-material-wave-loading.json')}
          />
        ),
        false: (
          <LottieImage
            autoPlay={false}
            loop={false}
            source={require('../../components/lottie/assets/image/196-material-wave-loading.json')}
          />
        ),
      },
    };
  }, [t]);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        console.log('index', isFocused);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        console.log('re render');

        return (
          <Fragment key={route.key}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.innerItem}>
              {/* {
                  BOTTOM_TAB_BAR_DATA[label as keyof TBottomStackParamList][
                    isFocused as any
                  ]
                } */}
              {/* <Icon name="skill" /> */}
              <LottieImage
                source={
                  BOTTOM_TAB_BAR_DATA[label as keyof TBottomStackParamList]
                    .iconJson
                }
                autoPlay={isFocused}
                loop={false}
              />
              {isFocused && (
                <Text
                  style={StyleSheet.flatten([
                    styles.label,
                    isFocused && styles.focused,
                  ])}>
                  {BOTTOM_TAB_BAR_DATA[label as string].name}
                </Text>
              )}
            </TouchableOpacity>
          </Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: widthScale(62),
    backgroundColor: 'white',
    marginBottom: isIosPlatform() ? widthScale(20) : 0,
  },
  innerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#222',
  },
  focused: {
    color: '#673ab7',
  },
});

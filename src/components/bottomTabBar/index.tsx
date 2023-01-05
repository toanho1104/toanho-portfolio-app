import Icon from '@components/icon';
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
        name: t('de'),
        true: <Icon name="contract" size={24} fill="#4705b9" />,
        false: <Icon name="contract" size={24} fill="black" />,
      },
      Skill: {
        name: t('Skill'),
        true: <Icon name="skill" size={24} fill="#4705b9" />,
        false: <Icon name="skill" size={24} fill="black" />,
      },
    };
  }, [t]);

  return (
    <>
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

          return (
            <Fragment key={index}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.innerItem}>
                {
                  BOTTOM_TAB_BAR_DATA[label as keyof TBottomStackParamList][
                    isFocused as any
                  ]
                }

                {isFocused && (
                  <Text
                    style={StyleSheet.flatten([
                      styles.label,
                      isFocused && styles.focused,
                    ])}>
                    {BOTTOM_TAB_BAR_DATA[label].name}
                  </Text>
                )}
              </TouchableOpacity>
            </Fragment>
          );
        })}
      </View>
      {/* <SafeAreaView /> */}
    </>
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

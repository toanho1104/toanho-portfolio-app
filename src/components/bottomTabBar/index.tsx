// import Icon from '@components/icon';
import {useTheme} from '@hooks/useAppTheme';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import React, {Fragment, useMemo} from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Icon from '@components/icon';
import {MyText} from '@components/text';

import {isIosPlatform} from '@utils/checks';
import {widthScale} from '@utils/dimensions';

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
  const {t} = useTranslation();

  const {colors} = useTheme();
  const BOTTOM_TAB_BAR_DATA: TBottomStackParamList = useMemo(() => {
    return {
      AboutMe: {
        key: 2,
        name: t('stack.aboutMe'),
        icons: 'aboutMe',
      },
      Contact: {
        key: 0,
        name: t('stack.contact'),
        icons: 'contact',
      },
      Skill: {
        key: 1,
        name: t('stack.skill'),
        icons: 'skill',
      },
    };
  }, [t]);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.BACKGROUND_SECONDARY},
      ]}>
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
          <Fragment key={route.key}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.innerItem}>
              <Icon
                name={
                  BOTTOM_TAB_BAR_DATA[label as keyof TBottomStackParamList]
                    .icons
                }
                fill={isFocused ? colors.PRIMARY : colors.TEXT_DARK}
                size={widthScale(30)}
              />
              <View style={{height: 6}}></View>
              {isFocused && (
                <MyText
                  font="bold"
                  type="title"
                  color={isFocused ? colors.PRIMARY : colors.TEXT_DARK}>
                  {
                    BOTTOM_TAB_BAR_DATA[label as keyof TBottomStackParamList]
                      .name
                  }
                </MyText>
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
    height: isIosPlatform ? widthScale(92) : widthScale(62),
    backgroundColor: 'white',
    paddingBottom: isIosPlatform ? widthScale(10) : 0,
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
  icon: {
    width: widthScale(30),
    height: widthScale(30),
  },
});

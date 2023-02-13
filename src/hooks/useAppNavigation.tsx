import {useRoute} from '@react-navigation/native';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type TBottomTabNavigatorParam = {
  AboutMe: undefined;
  Contact: undefined;
  Skill: {id: number};
};

export type TComponentsStackNavigationParam = {
  About1: undefined;
  About2: undefined;
};

export type TIntroduceStackNavigationParam = {
  Contact1: undefined;
  Contact2: undefined;
};

type TDetailsScreenRouteProps = TBottomTabNavigatorParam &
  TComponentsStackNavigationParam &
  TIntroduceStackNavigationParam;

type TMainNavigationStackParam = {
  IntroduceStack: NavigatorScreenParams<TIntroduceStackNavigationParam>;
  BottomStack: NavigatorScreenParams<TBottomTabNavigatorParam>;
  ComponentStack: NavigatorScreenParams<TComponentsStackNavigationParam>;
};

export const useMyNavigation = (nameScreen: keyof TDetailsScreenRouteProps) => {
  const navigation =
    useNavigation<StackNavigationProp<TMainNavigationStackParam>>();
  const route =
    useRoute<RouteProp<TDetailsScreenRouteProps, typeof nameScreen>>();
  return {navigation, route};
};

export type TStackItem = {
  key: number;
  name: keyof TDetailsScreenRouteProps;
  component: React.FC;
};

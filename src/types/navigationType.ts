// import type {CompositeScreenProps} from '@react-navigation/native';
// import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
// import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type TBottomTabNavigatorParamList = {
  AboutMe: undefined;
  Contact: undefined;
  Skill: {id: number};
};

export type TAboutMeStackNavigationParamList = {
  About1: {a: number};
  About2: undefined;
};

export type TContactStackNavigationParamList = {
  Contact1: undefined;
  Contact2: undefined;
};

type TNameType = TBottomTabNavigatorParamList &
  TAboutMeStackNavigationParamList;

type TRootStackParamList = {
  IntroduceStack: undefined;
  BottomStack: NavigatorScreenParams<TBottomTabNavigatorParamList>;
  About: StackNavigationProp<TAboutMeStackNavigationParamList>;
  Contact: NavigatorScreenParams<TContactStackNavigationParamList>;
};
export type RootNavigationParamList = CompositeNavigationProp<
  StackNavigationProp<TRootStackParamList>,
  BottomTabNavigationProp<TBottomTabNavigatorParamList>
>;

export type DetailsScreenRouteProp =
  RouteProp<TAboutMeStackNavigationParamList>;

export const useMyNavigation = () => {
  const navigation = useNavigation<StackNavigationProp<TRootStackParamList>>();
  return {navigation};
};

export type TStackItem = {
  key: number;
  name: keyof TNameType;
  component: React.FC;
};

// import type {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

// import type {StackScreenProps} from '@react-navigation/stack';

export type TBottomStackParamList = {
  Contact: undefined | JSX.Element | any;
  Skill: undefined | JSX.Element | any;
  AboutMe: undefined | JSX.Element | any;
};

export type TRootStack = BottomTabScreenProps<TBottomStackParamList>;

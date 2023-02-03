import type {StackScreenProps} from '@react-navigation/stack';

export type TIntroduceItem = {
  id: number | string;
  title: string;
  content: string;
  image: string;
};

export type TIntroduceStackParamList = {
  IntroduceScreen: undefined;
};

export type TRootStack = StackScreenProps<TIntroduceStackParamList>;

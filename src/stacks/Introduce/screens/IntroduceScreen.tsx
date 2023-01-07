import {DefaultLayout} from '@components/layout/defaultLayout';
import {useSharedValue} from 'react-native-reanimated';

import React, {useCallback, useState} from 'react';

import {Dimensions, NativeScrollEvent, SafeAreaView} from 'react-native';

import {ContentViewItem} from '../components/ContentViewItem';
import ListViewIntroduce from '../components/ListViewIntroduce';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {}

export const IntroduceScreen = ({}: IProps) => {
  const [currentContent, setCurrentContent] = useState(DATA[1].content);

  const scrollX = useSharedValue(0);

  const _onScroll = useCallback(
    ({nativeEvent}: {nativeEvent: NativeScrollEvent}) => {
      let currentIndex = Math.round(nativeEvent.contentOffset.x / SCREEN_WIDTH);
      setCurrentContent(DATA[currentIndex].content);

      scrollX.value = nativeEvent.contentOffset.x;
    },
    [scrollX],
  );

  return (
    <DefaultLayout noneSafeView>
      <ListViewIntroduce data={DATA} onScroll={_onScroll} value={scrollX} />

      <ContentViewItem offset={scrollX} content={currentContent} />
    </DefaultLayout>
  );
};

const DATA = [
  {
    id: 0,
    title: 'ti ti',
    content: 'xin chao toi laf',
    image: '',
    backgroundColor: 'blue',
  },
  {
    id: 1,
    title: 'ti ti',
    content: 'xin chao toi lafsdfjalsdfjlasdjfljdsalfjlsdafjlj sdf làlj adsl',
    backgroundColor: 'red',
    image: '',
  },
];

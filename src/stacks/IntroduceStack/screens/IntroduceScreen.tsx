import {DefaultLayout} from '@components/layout/defaultLayout';
import {PaginationDot} from '@components/paginationDot';
import {heightScale} from '@utils/dimensions';
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import React, {useState} from 'react';

import {Dimensions, StyleSheet} from 'react-native';

import {ContentViewItem} from '../components/ContentViewItem';
import ListViewIntroduce from '../components/ListViewIntroduce';
import {NextButton} from '../components/NextButton';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface IProps {}

export const IntroduceScreen = ({}: IProps) => {
  const scrollX = useSharedValue(0);

  const _scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <DefaultLayout noneSafeView>
      <ListViewIntroduce
        data={DATA}
        onScroll={_scrollHandler}
        value={scrollX}
        scrollOffset={scrollX}
      />

      <ContentViewItem scrollOffset={scrollX} data={DATA} />
      <PaginationDot
        data={DATA}
        scrollOffset={scrollX}
        style={styles.dotStyle}
      />
      <NextButton scrollOffset={scrollX} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  dotStyle: {
    alignSelf: 'center',
    bottom: heightScale(260),
  },
});

const DATA = [
  {
    id: 0,
    title: 'ti ti',
    content: 'xin chao toi laf',
    image:
      'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/316823912_184645744142051_5645082049156397548_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lgLxrNz-nuUAX_CKq6D&tn=BBs1Tsc-3SyvD57Q&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAtxwHPuztDXiJq4mFQpxXfiySPK33CABVcdMdQ5Fdmiw&oe=63BCFED8',
    backgroundColor: 'blue',
  },
  {
    id: 1,
    title: 'ti ti',
    content:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573',
    backgroundColor: 'red',
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573',
  },
  {
    id: 2,
    title: 'ti ti',
    content: 'xin chao toi laf',
    image:
      'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/316823912_184645744142051_5645082049156397548_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lgLxrNz-nuUAX_CKq6D&tn=BBs1Tsc-3SyvD57Q&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAtxwHPuztDXiJq4mFQpxXfiySPK33CABVcdMdQ5Fdmiw&oe=63BCFED8',
    backgroundColor: 'blue',
  },
  {
    id: 3,
    title: 'ti ti',
    content: 'xin chao toi laf',
    image:
      'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/316823912_184645744142051_5645082049156397548_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lgLxrNz-nuUAX_CKq6D&tn=BBs1Tsc-3SyvD57Q&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAtxwHPuztDXiJq4mFQpxXfiySPK33CABVcdMdQ5Fdmiw&oe=63BCFED8',
    backgroundColor: 'blue',
  },
];

import {useMyNavigation} from '@hooks/useAppNavigation';
import {TIntroduceItem} from '@type/introduceType';
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import React, {useCallback, useRef, useState} from 'react';

import {FlatList, StyleSheet, ViewToken} from 'react-native';

import {ContentViewItem} from './components/ContentViewItem';
import ListViewIntroduce from './components/ListViewIntroduce';
import {NextButton} from './components/NextButton';
import {DefaultLayout} from '@components/layout/defaultLayout';
import {PaginationDot} from '@components/paginationDot';

import {heightScale} from '@utils/dimensions';

interface IProps {}

export const IntroduceScreen = ({}: IProps) => {
  const listFef = useRef<FlatList>(null);

  const {navigation} = useMyNavigation('Skill');

  const [dataCurrenItem, setDataCurrenItem] = useState(DATA[0]);
  const [dataCurrenIndex, setDataCurrenIndex] = useState(0);

  const scrollX = useSharedValue(0);

  const _scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const _onViewableItemsChanged = useCallback(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      setDataCurrenItem(viewableItems[0].item);
      setDataCurrenIndex(viewableItems[0].item.id);
    },
    [],
  );

  const _handleNext = () => {
    if (dataCurrenIndex === DATA.length - 1) {
      navigation.navigate('BottomStack', {screen: 'AboutMe'});
    } else {
      listFef?.current?.scrollToIndex({
        animated: true,
        index: dataCurrenIndex + 1,
      });
    }
  };

  return (
    <DefaultLayout noneSafeView>
      <ListViewIntroduce
        refs={listFef}
        data={DATA}
        onScroll={_scrollHandler}
        value={scrollX}
        scrollOffset={scrollX}
        onViewableItemsChanged={_onViewableItemsChanged}
      />

      <ContentViewItem item={dataCurrenItem} />
      <PaginationDot
        data={DATA}
        scrollOffset={scrollX}
        style={styles.dotStyle}
      />
      <NextButton scrollOffset={scrollX} onPress={_handleNext} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  dotStyle: {
    alignSelf: 'center',
    bottom: heightScale(260),
  },
});

const DATA: TIntroduceItem[] = [
  {
    id: 0,
    title: 'Toàn Hồ',
    content: 'Xin chào tôi là Jai',
    image:
      'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/316823912_184645744142051_5645082049156397548_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lgLxrNz-nuUAX_CKq6D&tn=BBs1Tsc-3SyvD57Q&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAtxwHPuztDXiJq4mFQpxXfiySPK33CABVcdMdQ5Fdmiw&oe=63BCFED8',
  },
  {
    id: 1,
    title: 'Cyber Soft',
    content: 'Đạt thành tích xuất xắc khoá học react native tại Cyber soft',
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573',
  },
  {
    id: 2,
    title: 'HUFI',
    content: 'chuyên ngành QA_QC và công nghệ phần mềm tại HUFi',
    image:
      'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/316823912_184645744142051_5645082049156397548_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lgLxrNz-nuUAX_CKq6D&tn=BBs1Tsc-3SyvD57Q&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAtxwHPuztDXiJq4mFQpxXfiySPK33CABVcdMdQ5Fdmiw&oe=63BCFED8',
  },
  {
    id: 3,
    title: 'React Native',
    content: 'Hơn 2 năm kinh nghiệm làm việc với React native',
    image:
      'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
  },
];

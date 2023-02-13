import React from 'react';

import {DefaultLayout} from '@components/layout/defaultLayout';
import {MyText} from '@components/text';

interface IProps {}

export const AboutMeScreen1 = ({}: IProps) => {
  return (
    <DefaultLayout>
      <MyText>about 1</MyText>
    </DefaultLayout>
  );
};

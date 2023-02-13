import React from 'react';

import {DefaultLayout} from '@components/layout/defaultLayout';
import {MyText} from '@components/text';

interface IProps {}

export const AboutMeScreen2 = ({}: IProps) => {
  return (
    <DefaultLayout>
      <MyText>about2</MyText>
    </DefaultLayout>
  );
};

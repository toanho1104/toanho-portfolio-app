import SvgIcon from 'react-native-svg-icon';

import React from 'react';

import {TouchableOpacity} from 'react-native';

import svgs from '@assets/svgs';

export type TIconName = keyof typeof svgs;

interface TIconProps {
  size?: number;
  fill?: string;
  name: TIconName;
  onPress?: () => void;
}

const Icon = ({size, fill, name, onPress}: TIconProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <SvgIcon
        fill={fill || 'white'}
        svgs={svgs}
        width={size}
        height={size}
        name={name}
      />
    </TouchableOpacity>
  );
};

export default Icon;

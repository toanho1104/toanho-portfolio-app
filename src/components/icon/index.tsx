import React from 'react';
import SvgIcon from 'react-native-svg-icon';

import svgs from '@assets/svgs';

export type TIconName = keyof typeof svgs;
type TypeBase = {
  [key: string]: string | object | number;
};
type TIconProps = TypeBase & {
  size?: number;
  fill?: string;
  name: TIconName;
};

const Icon = (props: TIconProps) => {
  if (props.size) {
    return (
      <SvgIcon
        {...props}
        fill={props.fill || 'white'}
        svgs={svgs}
        width={props.size}
        height={props.size}
      />
    );
  }

  return <SvgIcon {...props} svgs={svgs} />;
};

export default Icon;

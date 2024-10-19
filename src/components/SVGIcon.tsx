import { SVGProps } from 'react';

import * as Icons from '@assets/icon/index';

export type IconType = keyof typeof Icons;

interface SVGIconProps extends SVGProps<SVGSVGElement> {
  type: IconType;
}

const SVGIcon = ({ children, type, ...props }: SVGIconProps) => {
  const IconComponent = Icons[type];

  return (
    <IconComponent type={type} {...props}>
      {children}
    </IconComponent>
  );
};

export default SVGIcon;

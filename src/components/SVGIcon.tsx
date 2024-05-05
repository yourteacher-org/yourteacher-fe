import * as Icons from '@assets/icon/index';
import { SVGProps } from 'react';

export type IconType = keyof typeof Icons;

interface SVGIconProps extends SVGProps<SVGSVGElement> {
  type: IconType;
}

const SVGIcon = ({ children, type }: SVGIconProps) => {
  const IconComponent = Icons[type];

  return <IconComponent type={type}>{children}</IconComponent>;
};

export default SVGIcon;

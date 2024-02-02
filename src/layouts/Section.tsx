import { ReactNode } from 'react';

interface SectionProps {
  as: 'section' | 'div';
  children?: ReactNode;
  className?: string;
}

const Section = ({ as: Component, children, className }: SectionProps) => {
  return <Component className={`w-full ${className}`}>{children}</Component>;
};

export default Section;

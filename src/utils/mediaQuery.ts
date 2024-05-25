type MediaQueryKeyType = 'mobile' | 'tablet' | 'desktop';

interface MediaQueryTableType {
  desktop: number;
  tablet: number;
  mobile: number;
}

const checkCurrentDisplayWidth = () => {
  let displayType: MediaQueryKeyType = 'desktop';
  const isMobile = window.matchMedia('(max-width: 1024px)').matches;
  const isTablet = window.matchMedia(
    '(min-width: 1024px) and (max-width: 1280px)',
  ).matches;
  const isDesktop = window.matchMedia('(min-width: 1281px)').matches;

  if (isDesktop) displayType = 'desktop';
  if (isMobile) displayType = 'mobile';
  if (isTablet) displayType = 'tablet';

  return displayType;
};

export { checkCurrentDisplayWidth };
export type { MediaQueryKeyType, MediaQueryTableType };

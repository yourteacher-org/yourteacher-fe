import React from 'react';

import SchedulSection from './SchedulSection';
import SearchwordSection from './SearchwordSection';
import NoticeSection from './NoticeSection';
import RecruitSection from './RecruitSection';
import HeroSection from './HeroSection';
import CommunitySection from './CommunitySection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <SearchwordSection />
      <CommunitySection />
      <SchedulSection />
      <RecruitSection />
      <NoticeSection />
    </>
  );
};

export default Home;

import React from 'react';

import NoticeSection from './NoticeSection';
import RecruitSection from './RecruitSection';
import HeroSection from './HeroSection';
import CommunitySection from './CommunitySection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CommunitySection />
      <RecruitSection />
      <NoticeSection />
    </div>
  );
};

export default Home;

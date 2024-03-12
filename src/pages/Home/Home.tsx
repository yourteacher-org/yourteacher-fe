import React from 'react';

import NoticeSection from './NoticeSection';
import RecruitSection from './RecruitSection';
import HeroSection from './HeroSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <RecruitSection />
      <NoticeSection />
    </div>
  );
};

export default Home;

import React from 'react';

import NoticeSection from './NoticeSection';
import RecruitSection from './RecruitSection';
import HeroSection from './HeroSection';
import ShareDataSection from './ShareDataSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ShareDataSection />
      <RecruitSection />
      <NoticeSection />
    </div>
  );
};

export default Home;

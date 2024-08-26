import React from 'react';
import SearchwordSection from './SearchwordSection';
import NoticeSection from './NoticeSection';
import RecruitSection from './RecruitSection';
import HeroSection from './HeroSection';
import CommunitySection from './CommunitySection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <SearchwordSection />
      <CommunitySection />
      <RecruitSection />
      <NoticeSection />
    </div>
  );
};

export default Home;

import React from 'react';
import SearchwordSection from './SearchwordSection';
import NoticeSection from './NoticeSection';
import RecruitSection from './RecruitSection';
import HeroSection from './HeroSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <RecruitSection />
      <NoticeSection />
      <SearchwordSection />;
    </div>
  );

};

export default Home;

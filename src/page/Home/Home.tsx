import Footer from '@layouts/Footer';
import MainLayout from '@layouts/MainLayout';
import Section from '@layouts/Section';
import React from 'react';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Section as="section" className="px-20 min-h-[300px]">
        섹션
      </Section>
      <Footer />
    </MainLayout>
  );
};

export default Home;

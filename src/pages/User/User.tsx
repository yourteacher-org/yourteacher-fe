import React from 'react';

import Section from '@layouts/Section';
import PageNav from '@components/PageNav';

const User: React.FC = () => {
  return (
    <Section as="section">
      <PageNav>
        <li>마이페이지</li>
      </PageNav>
      <h1>마이페이지</h1>
    </Section>
  );
};

export default User;

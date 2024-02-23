import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '@pages/Home/Home';
import About from '@pages/About';
import Content from '@pages/Content';
import Login from '@pages/Login';
import Info from '@pages/Info';
import Context from '@pages/Context';
import Edu from '@pages/Edu';
import SignUp from '@pages/SignUp';
import Search from '@pages/Search';
import Data from '@pages/Data';
import Faq from '@pages/Faq';
import Hire from '@pages/Hire';
import Inquire from '@pages/Inquire';
import News from '@pages/News';
import Notice from '@pages/Notice';
import Share from '@pages/Share';
import Teacher from '@pages/Teacher';
import EduDate from '@pages/EduDate';
import Program from '@pages/Program';
import Communication from '@pages/Communication';
import MainLayout from '@layouts/MainLayout';

const Page: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />
          <Route path="/edu" element={<Edu />} />
          <Route path="/context" element={<Context />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/data" element={<Data />} />
          <Route path="/eduDate" element={<EduDate />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/news" element={<News />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/program" element={<Program />} />
          <Route path="/share" element={<Share />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Page;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Share from '@pages/Share/Share';
import Collection from '@pages/Share/Collection';
import News from '@pages/Share/News';
import Qna from '@pages/Qna/Qna';
import Communication from '@pages/Qna/Communication';
import Sharing from '@pages/Qna/Sharing';
import Teacher from '@pages/Qna/Teacher';
import Edu from '@pages/Edu/Edu';
import Date from '@pages/Edu/Date';
import Program from '@pages/Edu/Program';
import Notice from '@pages/Notice/Notice';
import Hire from '@pages/Notice/Hire';
import Front from '@pages/Front/Front';
import Faq from '@pages/Front/Faq';
import Inquiry from '@pages/Front/Inquiry';
import Notify from '@pages/Front/Notify';
import Login from '@pages/Login/Login';
import SignUp from '@pages/SignUp/SignUp';
import Search from '@pages/Search/Search';
import MainLayout from '@layouts/MainLayout';

const Page: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/share" element={<Share />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/news" element={<News />} />
          <Route path="/qna" element={<Qna />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/sharing" element={<Sharing />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/edu" element={<Edu />} />
          <Route path="/date" element={<Date />} />
          <Route path="/program" element={<Program />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/front" element={<Front />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/notify" element={<Notify />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Page;

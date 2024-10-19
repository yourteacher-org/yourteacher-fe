import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../page/Home';
import About from '../page/About';
import Content from '../page/Content';
import Login from '../page/Login';
import Info from '../page/Info';
import Context from '../page/Context';
import Edu from '../page/Edu';
import SignUp from '../page/SignUp';
import Search from '../page/Search';
import Communication from '../page/Communication';
import Data from '../page/Data';
import Faq from '../page/Faq';
import Hire from '../page/Hire';
import Inquire from '../page/Inquire';
import News from '../page/News';
import Notice from '../page/Notice';
import Program from '../page/Program';
import Share from '../page/Share';
import Teacher from '../page/Teacher';
import EduDate from '../page/EduDate';

const Page: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
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
    </BrowserRouter>
  );
};

export default Page;

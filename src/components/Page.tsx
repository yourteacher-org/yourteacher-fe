import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Teacher from '@pages/Qna/Teacher';
import Date from '@pages/Edu/Date';
import Program from '@pages/Edu/Program';
import Hire from '@pages/Notice/Hire';
import Faq from '@pages/Front/Faq';
import Inquiry from '@pages/Front/Inquiry';
import Notify from '@pages/Front/Notify';
import Login from '@pages/Login/Login';
import SignUp from '@pages/SignUp/SignUp';
import Search from '@pages/Search/Search';
import User from '@pages/User/User';
import Withdraw from '@pages/Withdraw/Withdraw';
import MainLayout from '@layouts/MainLayout';
import Notice from '@pages/Notice/Notice';
import Front from '@pages/Front/Front';
import ProtectGuard from './ProtectGuard';
import BoardWrapper from './BoardWrapper';
import ShareAndQnABoard from './ShareAndQnABoard';

const Page: React.FC = () => {
  const isLogin = true;
  const isTeacher = true;

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/:category" element={<BoardWrapper />}>
            {/* /share */}
            <Route path="news" element={<ShareAndQnABoard />} />
            <Route path="collection" element={<ShareAndQnABoard />} />

            {/* /qna */}
            <Route path="sharing" element={<ShareAndQnABoard />} />
            <Route path="communication" element={<ShareAndQnABoard />} />
            <Route
              path="teacher"
              element={
                <ProtectGuard isAuthenticated={isLogin && isTeacher}>
                  <Teacher />
                </ProtectGuard>
              }
            />

            {/* /edu */}
            <Route path="date" element={<Date />} />
            <Route path="program" element={<Program />} />
          </Route>

          <Route path="/notice" element={<Notice />}>
            <Route path="hire" element={<Hire />} />
          </Route>

          <Route path="/front" element={<Front />}>
            <Route path="notify" element={<Notify />} />
            <Route path="inquiry" element={<Inquiry />} />
            <Route path="faq" element={<Faq />} />
          </Route>

          <Route
            path="/auth"
            element={<ProtectGuard isAuthenticated={isLogin} />}
          >
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="user" element={<User />} />
            <Route path="withdraw" element={<Withdraw />} />
          </Route>

          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Page;

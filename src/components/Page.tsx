import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Collection from '@pages/Share/Collection';
import News from '@pages/Share/News';
import Communication from '@pages/Qna/Communication';
import Sharing from '@pages/Qna/Sharing';
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
import ProtectGuard from './ProtectGuard';
import NavigateWithOutlet from './NavigateWithOutlet';

const Page: React.FC = () => {
  const isLogin = true;
  const isTeacher = true;

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route
            path="/share"
            element={<NavigateWithOutlet to="/share/collection" />}
          >
            <Route path="collection" element={<Collection />} />
            <Route path="news" element={<News />} />
          </Route>

          <Route
            path="/qna"
            element={<NavigateWithOutlet to="/qna/communication" />}
          >
            <Route path="communication" element={<Communication />} />
            <Route path="sharing" element={<Sharing />} />
            <Route
              path="teacher"
              element={
                <ProtectGuard isAuthenticated={isLogin && isTeacher}>
                  <Teacher />
                </ProtectGuard>
              }
            />
          </Route>

          <Route path="/edu" element={<NavigateWithOutlet to="/edu/date" />}>
            <Route path="date" element={<Date />} />
            <Route path="program" element={<Program />} />
          </Route>

          <Route
            path="/notice"
            element={<NavigateWithOutlet to="/notice/hire" />}
          >
            <Route path="hire" element={<Hire />} />
          </Route>

          <Route
            path="/front"
            element={<NavigateWithOutlet to="/front/notify" />}
          >
            <Route path="notify" element={<Notify />} />
            <Route path="inquiry" element={<Inquiry />} />
            <Route path="faq" element={<Faq />} />
          </Route>

          <Route
            path="/login"
            element={
              <ProtectGuard isAuthenticated={!isLogin} replace>
                <Login />
              </ProtectGuard>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectGuard isAuthenticated={!isLogin} replace>
                <SignUp />
              </ProtectGuard>
            }
          />
          <Route path="/search" element={<Search />} />
          <Route
            path="/user"
            element={
              <ProtectGuard isAuthenticated={isLogin} replace>
                <User />
              </ProtectGuard>
            }
          />
          <Route
            path="/withdraw"
            element={
              <ProtectGuard isAuthenticated={isLogin} replace>
                <Withdraw />
              </ProtectGuard>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Page;

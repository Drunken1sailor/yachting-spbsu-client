import logo from './logo.svg';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Router, Routes, Route, Link, useLocation  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClassesPage from './pages/ClassesPage';
import MembershipPage from './pages/MembershipPage';
import EventsPage from './pages/EventsPage';
import ContactsPage from './pages/ContactsPage';
import NewsPage from './pages/NewsPage';
import AdminPage from './pages/AdminPage';
import NavMenu from './components/NavMenu';
import UserAuth from './components/UserAuth';
import UserReg from './components/UserReg';

function App() {
  const [isVisibleNav, setIsVisibleNav] = useState(true);
  const [isVisibleAuth, setIsVisibleAuth] = useState(false);
  const [isVisibleReg, setIsVisibleReg] = useState(false);
  const visibleNavChange = (value) => {
    setIsVisibleNav(value);
  };
  const visibleAuthChange = (value) => {
    setIsVisibleAuth(value);
  };
  const visibleRegChange = (value, value2) => {
    setIsVisibleAuth(value);
    setIsVisibleReg(value2);
  };
  return (
    <main>
        {isVisibleNav && <NavMenu visible={visibleAuthChange}/>}
        {isVisibleAuth && <UserAuth visible={visibleRegChange}/>}
        {isVisibleReg && <UserReg/>}
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/membership" element={<MembershipPage/>} />
                <Route exact path="/classes" element={<ClassesPage/>} />
                <Route exact path="/events" element={<EventsPage/>} />
                <Route exact path="/contacts" element={<ContactsPage/>} />
                <Route exact path="/news" element={<NewsPage/>} />
                <Route exact path="/admin" element={<AdminPage visible={visibleNavChange}/>} />
            </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;

import logo from './logo.svg';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Router, Routes, Route, Link, useLocation  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClassesPage from './pages/ClassesPage';
import EventsPage from './pages/EventsPage';
import ContactsPage from './pages/ContactsPage';
import AllNewsPage from './pages/AllNewsPage';
import NewsPage from './pages/NewsPage';
import EventPage from './pages/EventPage';
import AdminPage from './pages/AdminPage';
import LkPage from './pages/LkPage';
import SearchPage from './pages/SearchPage';
import OrgLkPage from './pages/OrgLkPage';
import NavMenu from './components/NavMenu';
import UserAuth from './components/UserAuth';
import UserReg from './components/UserReg';
import ServerIP from './components/ServerIP';
const url = `http://${ServerIP}:3001/login`;

function App() {
  const [isVisibleNav, setIsVisibleNav] = useState(true);
  const [isVisibleAuth, setIsVisibleAuth] = useState(false);
  const [isVisibleReg, setIsVisibleReg] = useState(false);
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  const [userStatus, setUserStatus] = useState("");
  const [searchValue, setSearchValue] = useState(false);
  const [userData, setUserData] = useState({});
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
  const changeUserStatus = (value) => {
    setUserStatus(value);
  }
  const changeVisibleSearch = (value) => {
    setIsVisibleSearch(value);
  }
  const changeSearchValue = (value) => {
    setSearchValue(value);
  }
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get(url).then((response)=>{
      if(response.data.loggedIn == true){
        let name = response.data.user[0].secondName + " " + response.data.user[0].firstName;
        setUserData(response.data.user[0]);
        setUserStatus(name);
        setIsVisibleAuth(false);
        setIsVisibleReg(false);
      }
      // console.log(response);
    })
  }, []);

  return (
    <main>
        {isVisibleNav && <NavMenu userData={userData} changeSearchValue={changeSearchValue} setIsVisibleSearch={changeVisibleSearch} userName={userStatus} visible={visibleAuthChange}/>}
        {/*{isVisibleAuth && <UserAuth visible={visibleRegChange}/>}
        {isVisibleReg && <UserReg visible={visibleRegChange}/>}*/}
        {isVisibleSearch && <SearchPage searchValue={searchValue}/>}
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage searchValue={searchValue}/>} />
                <Route exact path="/classes" element={<ClassesPage userData={userData} userStatus={userStatus}/>} />
                <Route exact path="/events" element={<EventsPage/>} />
                <Route exact path="/contacts" element={<ContactsPage/>} />
                <Route exact path="/allNews" element={<AllNewsPage/>} />
                <Route exact path="/news" element={<NewsPage/>} />
                <Route exact path="/admin" element={<AdminPage visible={visibleNavChange}/>} />
                <Route exact path="/lk" element={<LkPage userData={userData} visible={visibleNavChange}/>} />
                <Route exact path="/orgLk" element={<OrgLkPage userData={userData}/>} />
                <Route exact path="/search" element={<SearchPage visible={SearchPage}/>} />
                <Route exact path="/event" element={<EventPage/>} />
                <Route exact path="/register" element={<UserReg/>} />
                <Route exact path="/login" element={<UserAuth/>} />
            </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;

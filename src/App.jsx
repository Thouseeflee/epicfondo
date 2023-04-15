import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styles from './style';
import Navbar from './components/Navbar';
import NewNavbar from './components/NewNavbar';
import CardContainer from './components/CardContainer';
import cards from './constants/cards';
import HeaderNav from './components/HeaderNav';
import CreatePost from './components/CreatePost';
import StoryComponent from './components/StoryComponent';
import TestNav from './components/testNav';
import MobileNav from './components/mobileNav';
import Footer from './components/Footer';

const MainContent = () => {
  const [contentData, setContentData] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      const getContent = await axios.get('http://192.168.1.8:3000/api/posts/posts');
      setContentData(getContent.data);
    };
    apiCall();
  }, []);
  return (
    <>
      <Helmet>
        <title>epicfondo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="bg-gradient-to-br from-green-200 to-blue-400">
        <div className="hidden md:block ">
          <HeaderNav setContentData={setContentData} />
        </div>
        <div className="md:hidden ">
          <MobileNav setContentData={setContentData} />
        </div>
        <div className="min-h-screen">
          <CardContainer cards={contentData} />
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <HelmetProvider>
        <NewNavbar />
        <Router>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/content/:id" element={<StoryComponent />} />
          </Routes>
          {/* Other routes go here */}
        </Router>
        <Footer />
      </HelmetProvider>
    </>
  );
};

export default App;

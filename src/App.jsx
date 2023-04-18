import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styles from './style';
import Navbar from './components/Navbar';
import NewNavbar from './components/NewNavbar';
import CardContainer from './components/CardContainer';
// import cards from './constants/cards';
import HeaderNav from './components/HeaderNav';
import CreatePost from './components/CreatePost';
import StoryComponent from './components/StoryComponent';
import TestNav from './components/testNav';
import MobileNav from './components/mobileNav';
import Footer from './components/Footer';



const MainContent = () => {
  const [contentData, setContentData] = useState([]);
  const [loadingTime, setLoadingTime] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };
    mediaQuery.addEventListener('change', handleResize);
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);


  // useEffect(() => {
  //   const apiCall = async () => {
  //     const startTime = performance.now();
  //     const getContent = await axios.get('http://192.168.1.8:3000/api/posts/posts');
  //     // console.log(performance.now() - startTime, "load time");
  //     setContentData(getContent.data);
  //     setLoadingTime(performance.now() - startTime);
  //   };
  //   // apiCall();
  // }, []);
  return (
    <>
      <Helmet>
        <title>epicfondo</title>
        <meta name="description" content="Visit our website to read a selection of interesting and motivational articles. We have stories for everyone, from uplifting ones about love and friendship to thrilling ones about mysteries and adventures. Browse through our selection of short stories, fairy tales, folktales, and more. Come with us on a journey of creativity and exploration right now!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="bg-gradient-to-br from-green-200 to-blue-400">
        <div className="hidden md:block ">
          <HeaderNav setContentData={setContentData} />
        </div>

        {isMobile && <div className="md:hidden ">
          <MobileNav setContentData={setContentData} />
        </div>}
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

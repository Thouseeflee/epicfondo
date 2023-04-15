// Import React and React Router
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Import Tailwind CSS file
// import './index.css';

// Define a custom component for the pill
const Pill = ({ text }) => {
  return (
    <div className="inline-block px-4 py-2 border-2 border-black rounded-full shadow-lg transform hover:scale-110 hover:rotate-180 transition duration-300 ease-in-out">
      <span>{text}</span>
    </div>
  );
};

const HomePage = () => {
   
}

// Define the App component
function TestNav() {
  return (
    <>
    {/* <Router> 
        <Routes>
          <Route path="/about" element={<h1>About</h1>}>
        </Routes>
        <Routes>
          <Route path="/contact" element={<h1>contact</h1>}>
        </Routes>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </Router> */}
     <div className="">
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-center">
        <Pill text="Alfonso" />
      </div>
    </nav>
    </div>
    </>
  );
}

export default TestNav;
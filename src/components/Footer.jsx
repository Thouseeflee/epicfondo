import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
  const [pressStartTime, setPressStartTime] = useState(null);

  const navigate = useNavigate();

  function handleMouseDown() {
    setPressStartTime(Date.now());
  }

  function handleMouseUp() {
    const pressDuration = Date.now() - pressStartTime;

    if (pressDuration >= 1000) { // 1000ms = 1 second
      navigate('/create-post'); // replace with the path of the desired route
    }
  }

  return (
    <footer className="bg-gradient-to-br from-green-400 to-blue-500 text-white py-4 text-center">
      <p className="text-sm"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        All rights reserved of epicfondo &copy; {new Date().getFullYear()}
      </p>

    </footer>
  );
}

export default Footer;

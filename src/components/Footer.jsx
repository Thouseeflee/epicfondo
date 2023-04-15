import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-400 to-blue-500 text-white py-4 text-center">
      <p className="text-sm">
        All rights reserved of epicfondo &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;

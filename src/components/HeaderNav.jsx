import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = ({setContentData}) => {
  const [selected, setSelected] = useState('All');
  
  useEffect(() => {
    const apiCall = async () => {
      const getContent = await axios.get(`http://192.168.1.8:3000/api/posts/posts/?storyType=${selected}`)
      // console.log(getContent, "content");
      setContentData(getContent.data)
    }
    apiCall()
  },[selected])

  const handleButtonClick = (topic) => {
    setSelected(topic);
  };

  return (
    <div className='flex justify-center pt-2'>
      <div className="flex justify-center items-center text-black font-medium text-md py-2.5 rounded-full 
      px-2 shadow-md w-fit transition-shadow duration-300 hover:shadow-xl border-2 bg-white">
        <button
          className={`px-4 py-2 rounded-full focus:outline-none transform hover:scale-110 transition-transform ${
            selected === 'All' ? 'bg-gradient-to-br from-green-400 to-blue-500 text-white' : ''
          }`}
          onClick={() => handleButtonClick('All')}
        >
          All
        </button>
        <div className="w-0.5 h-6 bg-gray-200 mx-2"></div>
        <button
          className={`px-4 py-2 rounded-full focus:outline-none transform hover:scale-110 transition-transform ${
            selected === 'Action/Adventure' ? 'bg-gradient-to-br from-green-400 to-blue-500 text-white' : ''
          }`}
          onClick={() => handleButtonClick('Action/Adventure')}
        >
          Action/Adventure
        </button>
        <div className="w-0.5 h-6 bg-gray-200 mx-2"></div>
        <button
          className={`px-4 py-2 rounded-full focus:outline-none transform hover:scale-110 transition-transform ${
            selected === 'Thriller/Suspense' ? 'bg-gradient-to-br from-green-400 to-blue-500 text-white' : ''
          }`}
          onClick={() => handleButtonClick('Thriller/Suspense')}
        >
          Thriller/Suspense
        </button>
        <div className="w-0.5 h-6 bg-gray-200 mx-2"></div>
        <button
          className={`px-4 py-2 rounded-full focus:outline-none transform hover:scale-110 transition-transform ${
            selected === 'Comedy' ? 'bg-gradient-to-br from-green-400 to-blue-500 text-white' : ''
          }`}
          onClick={() => handleButtonClick('Comedy')}
        >
          Comedy
        </button>
        <div className="w-0.5 h-6 bg-gray-200 mx-2"></div>
        <button
          className={`px-4 py-2 rounded-full focus:outline-none transform hover:scale-110 transition-transform ${
            selected === 'Post-apocalyptic Fiction' ? 'bg-gradient-to-br from-green-400 to-blue-500 text-white' : ''
          }`}
          onClick={() => handleButtonClick('Post-apocalyptic Fiction')}
        >
          Post-apocalyptic Fiction
        </button>
        <div className="w-0.5 h-6 bg-gray-200 mx-2"></div>
        <Link to="/create-post" className="transform hover:scale-110 transition-transform">Create</Link>
      </div>
    </div>
  );
};

export default HeaderNav;

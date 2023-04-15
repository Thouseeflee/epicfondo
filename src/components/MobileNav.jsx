import axios from 'axios';
import React, { useEffect, useState } from 'react';

const topics = ['All', 'Action/Adventure', 'Horror', 'Thriller/Suspense', 'Comedy', 'Post-apocalyptic Fiction'];

function MobileNav({setContentData}) {
  const [selectedTopic, setSelectedTopic] = useState('All');

  useEffect(() => {
    const apiCall = async () => {
      const getContent = await axios.get(`http://192.168.1.8:3000/api/posts/posts/?storyType=${selectedTopic}`)
      setContentData(getContent.data)
    }
    apiCall()
  },[selectedTopic])


  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    
  };

  return (
    <div className="flex overflow-x-auto whitespace-nowrap py-2 w-full hide-scrollbar mx-2">
      {topics.map((topic) => (
        <div
          key={topic}
          className={`inline-block px-4 py-2 font-normal hover:bg-gray-200 rounded-full cursor-pointer whitespace-nowrap ${
            selectedTopic === topic ? 'bg-gradient-to-br from-green-400 to-blue-500 text-white' : ''
          }`}
          onClick={() => handleTopicClick(topic)}
          // onMouseDown={(e) => e.preventDefault()} 
        >
          {topic}
        </div>
      ))}
    </div>
  );
}

export default MobileNav;

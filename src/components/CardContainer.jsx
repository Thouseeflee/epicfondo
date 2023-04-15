import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';

const CardContainer = ({ cards }) => {
  const [data, setData] = useState();
  const animatedProps = useSpring({
    to: { opacity: 1, transform: 'translateY(0px)' },
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { duration: 200 },
  });

  const navigate = useNavigate();

  // useEffect(() => {
  //   const res = axios.get('http://localhost:3000/api/data')
  //     .then(response => {
  //       setData(response.data.message)
  //       // console.log(response.data.message, "res");
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  const contentClickHandler = (card) => {
    navigate(`/content/${card._id}`, {state: card})
  }

  return (
    <div className="flex flex-wrap justify-center mx-auto py-5 md:py-10 max-w-5xl">
      {cards.map((card, index) => {
        const shortenedContent = card.content.slice(0, 300) + (card.content.length > 300 ? '...' : '');

        return (
          <animated.div key={index} className="w-full md:w-1/2 lg:w-1/2 p-2"
            style={animatedProps}>
            <div className="bg-white rounded-lg shadow-md p-6
            transition duration-300 ease-in-out
            transform hover:-translate-y-1 
            hover:shadow-lg cursor-pointer"
            onClick={contentClickHandler.bind(this, card)}
            >
              <h2 className="text-2xl font-bold mb-4 font-serif">{card.title}</h2>
              <p className="text-gray-600 font-serif" style={{ whiteSpace: 'pre-line' }}>{shortenedContent}</p>
            </div>
          </animated.div>

        )
      })}
    </div>
  );
};

export default CardContainer;

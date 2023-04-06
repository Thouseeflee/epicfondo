import React from 'react';
import { useSpring, animated } from 'react-spring';

const CardContainer = ({ cards }) => {
  const animatedProps = useSpring({
    to: { opacity: 1, transform: 'translateY(0px)' },
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { duration: 500 },
  });

  return (
    <div className="flex flex-wrap justify-center mx-auto my-10 max-w-5xl">
      {cards.map((card, index) => (
        <animated.div key={index} className="w-full md:w-1/2 lg:w-1/2 p-2"
         style={animatedProps}>
          <div className="bg-white rounded-lg shadow-md p-6  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
            <p className="text-gray-600">{card.content}</p>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default CardContainer;

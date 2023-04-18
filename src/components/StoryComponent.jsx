import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import axios from "axios";
import ContentLoader from "react-content-loader";
import { getPostById } from "./utils/API";

function StoryComponent(props) {
  const [loaded, setLoaded] = useState(false);
  const [contentData, setContentData] = useState({})
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiCall = async () => {
      const startTime = performance.now();
      const getContent = await getPostById(id);
      console.log(performance.now() - startTime, "load time");
    //   console.log(getContent.data);
      setContentData(getContent.data);
      setLoading(false);
    };
    apiCall();
  }, [id]);

  const animationProps = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(50px)", opacity: 0 },
    delay: 100,
    config: {
      tension: 300,
      friction: 20,
    },
    onRest: () => {
      setLoaded(true);
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{contentData.title}</title>
        <meta name="description" content={contentData.content} />
      </Helmet>
      <animated.div
        style={animationProps}
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-2 md:p-10"
      >
        {loading ? (
          <ContentLoader
            speed={2}
            width={800}
            height={800}
            viewBox="0 0 800 800"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="48" y="48" rx="3" ry="3" width="120" height="10" />
            <rect x="48" y="80" rx="3" ry="3" width="400" height="10" />
            <rect x="48" y="120" rx="3" ry="3" width="300" height="10" />
            <rect x="48" y="160" rx="3" ry="3" width="250" height="10" />
            <rect x="48" y="200" rx="3" ry="3" width="200" height="10" />
            <rect x="48" y="240" rx="3" ry="3" width="150" height="10" />
            <rect x="48" y="280" rx="3" ry="3" width="100" height="10" />
          </ContentLoader>
        ) : (
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
            <h1 className="text-2xl font-bold mb-4">{contentData.title}</h1>
            <p className="text-lg whitespace-pre-line font-normal">{contentData.content}</p>
          </div>
        )}
      </animated.div>
    </>
  );
}

export default StoryComponent;

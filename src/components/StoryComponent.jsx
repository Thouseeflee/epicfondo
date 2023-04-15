import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

function StoryComponent(props) {
    const [loaded, setLoaded] = useState(false);
    const { state } = useLocation();

    const { title, content } = state;

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


    const skeletonStyle = {
        width: 800,
        // width: "100%",
        height: 800,
        backgroundColor: '#F3F3F3',
        borderRadius: '0.375rem',
    };

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={content} />
            </Helmet>
            <animated.div
                style={animationProps}
                className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-2 md:p-10"
            >
                    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                        <h1 className="text-2xl font-bold mb-4">{title}</h1>
                        <p className="text-lg whitespace-pre-line font-normal">{content}</p>
                    </div>
            </animated.div>
        </>
    );
}

export default StoryComponent;

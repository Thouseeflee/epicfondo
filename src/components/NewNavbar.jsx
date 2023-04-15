import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function NewNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gradient-to-br from-green-400 to-blue-500 p-4 sticky top-0 left-0 w-full z-10">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <a href="/">
                    <span className="font-semibold text-xl tracking-tight">epicfondo</span>
                </a>
            </div>
            {/* <div className="block lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
                >
                    {isMenuOpen ? (
                        <FaTimes className="text-2xl transform rotate-45 transition duration-300 ease-in-out" />
                    ) : (
                        <FaBars className="text-2xl transition duration-300 ease-in-out" />
                    )}
                </button>
            </div> */}
            <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'
                    } transition duration-300 ease-in-out`}
            >
                {/* <div className="text-sm lg:flex-grow">
                    <a
                        href="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 transition duration-300 ease-in-out"
                    >
                        Docs
                    </a>
                </div> */}
            </div>
        </nav>
    );
}

export default NewNavbar;

import { useState } from 'react';

function NewNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">epicfondo</span>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        {isMenuOpen ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 3a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm0 8a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm1 5a1 1 0 100 2h18a1 1 0 100-2H1z"
                            />
                        )}
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'
                    }`}
            >
                <div className="text-sm lg:flex-grow">
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                    >
                        Docs
                    </a>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                    >
                        Examples
                    </a>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
                    >
                        Blog
                    </a>
                </div>
            </div>
{/* 

            <div className="flex">
                <a
                    href="#"
                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
                >
                    Download
                </a>
            </div> */}
        </nav>
    );
}

export default NewNavbar;


import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Alfonso</span>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path
                            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                        />
                    </svg>
                </button>
            </div>
            <div
                className={`${isDropdownOpen ? "block" : "hidden"
                    } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className="text-sm lg:flex-grow">
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                    >
                        Title 1
                    </a>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                    >
                        Title 2
                    </a>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
                    >
                        Title 3
                    </a>
                    <div className="relative mt-4 lg:inline-block lg:mt-0 text-gray-200">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center text-gray-200 hover:text-white mr-4"
                        >
                            Title 4
                            <svg
                                className="fill-current h-4 w-4 ml-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M17.293 6.293a1 1 0 00-1.414-1.414L10 11.586 4.121 5.707a1 1 0 00-1.414 1.414l6.293 6.293a1 1 0 001.414 0l6.293-6.293z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                        <Transition
                            show={isDropdownOpen}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100">

                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">

                                <div
                                    className="py-1"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                >
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        role="menuitem"
                                    >
                                        Option 1
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        role="menuitem"
                                    >
                                        Option 2
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        role="menuitem"
                                    >
                                        Option 3
                                    </a>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </nav>
)};

export default Navbar
import React, { useState } from 'react';
import Image from 'next/image';
import { BsFillBagCheckFill, BsFillPersonFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectItems } from '../../slices/basketSlice';
import Link from 'next/link';
// import logo from '/assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center shadow-md p-2 flex-grow space-x-10">
        {/* logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/assets/logo.png"
            height={70}
            width={150}
            objectFit="contain"
          ></Image>
        </div>
        {/* search  */}
        <div className="hidden sm:flex  items-center  flex-grow justify-center pb-6 md:py-0 ">
          {/* <form> */}
          <div className="flex p-1.5 flex-row  flex-grow border rounded-lg dark:border-gray-600  ">
            <input
              className="px-1 py-2 flex flex-grow flex-shrink rounded-l-lg text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:outline-none"
              type="text"
              name="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />

            <button className="px-6 py-2 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
          {/* </form> */}
        </div>

        {/* cart and profile  */}
        <div className="flex items-center space-x-8 ">
          <div className="hidden lg:block">
            <p className="text-md font-bold pb-1">(+880) 136655444</p>
            <p className="text-sm font-semibold">Call Us Now !</p>
          </div>
          <Link href="/cart" className="flex justify-center cursor-pointer">
            <div className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
              <svg
                className="w-8 h-8 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="absolute top-0 -right-3 w-5 flex items-center justify-center h-5 text-xs text-white bg-gray-600 rounded-full">
                {items.length || 0}
              </span>
            </div>
          </Link>
          {/* <div>
            <span className="text-3xl sm:text-4xl text-primary">
              <BsFillBagCheckFill className="relative" />
              <p className="absolute top-0 w-5 h-5 text-center text-sm text-gray-900 rounded-full bg-primary">
                {items.length || 0}
              </p>
            </span>
          </div> */}
          <div>
            <span className="text-3xl sm:text-4xl text-primary">
              <BsFillPersonFill />
            </span>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            href="/"
            className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            home
          </Link>

          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            features
          </a>

          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            pricing
          </a>

          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            blog
          </a>

          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m.75 19h7.092c4.552 0 6.131-6.037 2.107-8.203 2.701-2.354 1.029-6.797-2.595-6.797h-6.604c-.414 0-.75.336-.75.75v13.5c0 .414.336.75.75.75zm.75-13.5h5.854c3.211 0 3.215 4.768 0 4.768h-5.854zm0 6.268h6.342c3.861 0 3.861 5.732 0 5.732h-6.342z" />
              <path d="m18.374 7.857c-3.259 0-5.755 2.888-5.635 5.159-.247 3.28 2.397 5.984 5.635 5.984 2.012 0 3.888-1.065 4.895-2.781.503-.857-.791-1.613-1.293-.76-.739 1.259-2.12 2.041-3.602 2.041-2.187 0-3.965-1.668-4.125-3.771 1.443.017 4.136-.188 8.987-.033.016 0 .027-.008.042-.008 2-.09-.189-5.831-4.904-5.831zm-3.928 4.298c1.286-3.789 6.718-3.676 7.89.064-4.064.097-6.496-.066-7.89-.064z" />
              <path d="m21.308 6.464c.993 0 .992-1.5 0-1.5h-5.87c-.993 0-.992 1.5 0 1.5z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Headers';

const IndexPage = () => {
  return (
    <div className="w-screen overflow-hidden">
      <Helmet>
        <link
          rel="icon"
          href="https://www.novacutisclinics.com/assets/images/logo.png"
        />
        <title>PDO Threads</title>
      </Helmet>
      <main className="w-full h-full">
        <div className=" bg-secondry h-10 w-full text-center flex  items-center text-white justify-around">
          <span>
            <a
              href="tel:+917208330809"
              rel="noreferrer"
              className="font-semibold"
            >
              +91 7208330809
            </a>
          </span>
          <span className="flex items-center space-x-2">
            <a
              href="https://www.novacutisclinics.com/location"
              className="flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 22s-8-4.5-8-11a8 8 0 0116 0c0 6.5-8 11-8 11z"
                />
              </svg>
              <span className="text-white font-semibold ml-2">Locate Us</span>
            </a>
          </span>
        </div>
        <Header />
        <div className="w-screen mt-20 overflow-hidden">
          <h1 className=" text-6xl md:text-8xl  text-primary text-center font-bold">
            Thank You
          </h1>
          <p className="text-center text-2xl font-semibold mt-8">
            we will get back to you
          </p>
        </div>
        <div className=" bg-primary h-10 w-full text-center flex flex-col text-white justify-center fixed bottom-0">
          <span>©2023</span>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>PDO Threads</title>;

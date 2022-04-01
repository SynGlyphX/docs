import React from "react";
import Lottie from "lottie-react";
import Mockup from "../images/mac.png";
import chatAnimation from "../lib/animations/chat.json";
import filesAnimation from "../lib/animations/files.json";
import tasksAnimation from "../lib/animations/tasks.json";

function Process() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">
              Supercharge your Data
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Once you see your data in 3D, you'll never go back.
            </p>
          </div>

          {/* Glow illustration */}
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 mt-20 lg:mt-40 pointer-events-none -z-1 dark:opacity-20 hidden md:block"
            aria-hidden="true"
            width="854"
            height="509"
            viewBox="0 0 854 509"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__a"
              >
                <stop stopColor="#667EEA" offset="0%" />
                <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
              </radialGradient>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__b"
              >
                <stop stopColor="#9F7AEA" offset="0%" />
                <stop stopColor="#9F7AEA" stopOpacity="0" offset="100%" />
              </radialGradient>
            </defs>
            <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
              <circle
                fillOpacity=".64"
                fill="url(#iphonesill__a)"
                cx="300"
                cy="300"
                r="300"
              />
              <circle
                fillOpacity=".72"
                fill="url(#iphonesill__b)"
                cx="729"
                cy="384"
                r="240"
              />
            </g>
          </svg>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-12 md:gap-x-6 lg:gap-x-12 md:grid-cols-3 items-start md:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center">
              <div
                style={{
                  maxWidth: "200px",
                }}
              >
                <button className="lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start mb-10 lg:mx-0 bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25">
                  <svg
                    className="w-4 h-4 flex-shrink-0 mr-2"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-current text-teal-200 dark:text-teal-400"
                      d="M6 0H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM5 5H2V2h3v3zM15 9h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5h-3v-3h3v3zM6 9H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5H2v-3h3v3zM12.5 7a1 1 0 01-.707-.293l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 011.414 0l2.5 2.5a1 1 0 010 1.414l-2.5 2.5A1 1 0 0112.5 7z"
                    />
                  </svg>
                  <span className="text-white dark:text-teal-400">ETL</span>
                </button>
              </div>
              <div className="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">
                1
              </div>
              {/* Mobile mockup */}
              <div className="inline-flex relative justify-center items-center">
                {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
                <Lottie
                  className="absolute"
                  animationData={chatAnimation}
                  style={{
                    width: "150px",
                    maxWidth: "84.33%",
                  }}
                />
                {/* iPhone mockup */}
                <img
                  className="relative max-w-full mx-auto h-auto pointer-events-none"
                  src={Mockup}
                  width="344"
                  height="674"
                  alt="iPhone mockup"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center">
              <div
                style={{
                  maxWidth: "200px",
                }}
              >
                <button className="lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start mb-10 lg:mx-0 bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25">
                  <svg
                    className="w-4 h-4 flex-shrink-0 mr-2"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-current text-teal-200 dark:text-teal-400"
                      d="M6 0H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM5 5H2V2h3v3zM15 9h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5h-3v-3h3v3zM6 9H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5H2v-3h3v3zM12.5 7a1 1 0 01-.707-.293l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 011.414 0l2.5 2.5a1 1 0 010 1.414l-2.5 2.5A1 1 0 0112.5 7z"
                    />
                  </svg>
                  <span className="text-white dark:text-teal-400">
                    Team Projects
                  </span>
                </button>
              </div>
              <div className="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">
                2
              </div>
              {/* Mobile mockup */}
              <div className="inline-flex relative justify-center items-center">
                {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}

                <Lottie
                  className="absolute"
                  animationData={filesAnimation}
                  style={{
                    width: "290px",
                    maxWidth: "84.33%",
                    // height: '55vh',
                    // marginTop: '0vh',
                    // position: 'absolute',
                  }}
                />
                {/* <img
									className='absolute'
									src='/images/mockup-image-03.jpg'
									width='290'
									height='624'
									style={{ maxWidth: '84.33%' }}
									alt='App screen 03'
								/> */}
                {/* iPhone mockup */}
                <img
                  className="relative max-w-full mx-auto h-auto pointer-events-none"
                  src={Mockup}
                  width="344"
                  height="674"
                  alt="iPhone mockup"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center">
              <div
                style={{
                  maxWidth: "200px",
                }}
              >
                <button className="lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start mb-10 lg:mx-0 bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25">
                  <svg
                    className="w-4 h-4 flex-shrink-0 mr-2"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-current text-teal-200 dark:text-teal-400"
                      d="M6 0H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM5 5H2V2h3v3zM15 9h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5h-3v-3h3v3zM6 9H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5H2v-3h3v3zM12.5 7a1 1 0 01-.707-.293l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 011.414 0l2.5 2.5a1 1 0 010 1.414l-2.5 2.5A1 1 0 0112.5 7z"
                    />
                  </svg>
                  <span className="text-white dark:text-teal-400">
                    State Snapshots
                  </span>
                </button>
              </div>
              <div className="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">
                3
              </div>
              {/* Mobile mockup */}
              <div className="inline-flex relative justify-center items-center">
                {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
                <Lottie
                  className="absolute"
                  animationData={tasksAnimation}
                  style={{
                    width: "290px",
                    maxWidth: "84.33%",
                    // height: '55vh',
                    // marginTop: '0vh',
                    // position: 'absolute',
                  }}
                />
                {/* <img
									className='absolute'
									src='/images/mockup-image-04.jpg'
									width='290'
									height='624'
									style={{ maxWidth: '84.33%' }}
									alt='App screen 04'
								/> */}
                {/* iPhone mockup */}
                <img
                  className="relative max-w-full mx-auto h-auto pointer-events-none"
                  src={Mockup}
                  width="344"
                  height="674"
                  alt="iPhone mockup"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;

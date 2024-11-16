"use client"
import React from 'react';
import styles from "./contact.module.css";

export default function TopSection() {
  return (
    <div className={`p-8 sm:p-20 lg:px-20 lg:py-3 bg-base w-screen bg-primary ${styles.backgroundContainer}`}>
      <div className={`lg:p-20 p-3 pt-5 ${styles.sectionContent}`} >
        <div className='gap-4 grid'>
          <>
            <div className="mx-auto max-w-4xl text-center">
              <h1
                className="drop-shadow-base text-3xl mt-2 lg:text-6xl font-semibold tracking-tight top-0 h-auto py-2 justify-center flex bg-gradient-to-r items-center from-base via-sky-600 to-base bg-clip-text text-6xl font-extrabold text-transparent text-center ">
                Conatact Storify
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full h-max">
              <div className="flex flex-col justify-center items-start text-0b293c">
                <p className="text-center text-dark">What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </>

          <>
            <div className="mx-auto max-w-4xl text-center">
              <h1
                className="text-3xl mt-2 lg:text-6xl font-semibold tracking-tight top-0 h-auto py-2 justify-center flex bg-gradient-to-r items-center from-base via-sky-600 to-base bg-clip-text text-6xl font-extrabold text-transparent text-center ">
                Customer support
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full h-max">
              <div className="flex flex-col justify-center items-start text-0b293c">
                <p className="text-center text-dark">What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </>

          <>
            <div className="mx-auto max-w-4xl text-center">
              <h1
                className="text-3xl mt-2 lg:text-6xl font-semibold tracking-tight top-0 h-auto py-2 justify-center flex bg-gradient-to-r items-center from-base via-sky-600 to-base bg-clip-text text-6xl font-extrabold text-transparent text-center ">
                Payments
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full h-max">
              <div className="flex flex-col justify-center items-start text-0b293c">
                <p className="text-center text-dark">What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </>

          <>
            <div className="mx-auto max-w-4xl text-center">
              <h1
                className="drop-shadow-primary text-3xl mt-2 lg:text-6xl font-semibold tracking-tight top-0 h-auto py-2 justify-center flex bg-gradient-to-r items-center from-sky-600 to-sky-600 bg-clip-text text-6xl font-extrabold text-transparent text-center ">
                General details Storify
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full h-max">
              <div className="flex flex-col justify-center items-start text-0b293c">
                <p className="text-center text-dark">What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};


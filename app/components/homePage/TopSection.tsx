"use client"
import React from 'react';
import ParticlesJs from "@/app/components/homePage/canvas/ParticlesJs"
import styles from "./homePage.module.css";
import Image from "next/image";
import * as motion from "framer-motion/client"
import { useEffect, useRef } from 'react';

export default function TopSection() {

  const parentRef = useRef<HTMLDivElement>(null)
  const childRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function updateParentHeight() {
      if (parentRef.current && childRef.current) {
        const height = childRef?.current?.offsetHeight + 160
        parentRef.current.style.height = `${height}px`;
      }
    }

    // Run initially
    updateParentHeight();

    // Add event listener for window resize
    window.addEventListener('resize', updateParentHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateParentHeight);
    };
  }, []);

  return (
    <div ref={parentRef} className={`p-8 sm:p-20 lg:p-20 bg-base w-screen bg-gradient ${styles.backgroundContainer}`}>

      <ParticlesJs />

      <div className={`lg:p-20 p-3 pt-5 ${styles.sectionContent}`} >
        <div ref={childRef}>
          <div className="mx-auto max-w-4xl text-center">
            {/* <h2 className="text-base font-semibold text-indigo-600">Pricing</h2> */}
            <p className="mt-2 lg:text-6xl font-semibold tracking-tight text-gray-900 text-3xl">
              Storify! anytime anywhere
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
            Storify! Store, Watch, Download your memories anywhere, anytime
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-max">
            <div className="block justify-center items-center w-full">
              {/* <motion.h2
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-2 lg:text-6xl font-semibold tracking-tight text-gray-900 text-3xl"
                transition={{ duration: 1, ease: 'easeIn' }}
              >
                Storify is where love resides, memories are stored, as secure as home
              </motion.h2> */}

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.7 }}
                whileInView={{ scale: 1, opacity: 1}}
              >
                <Image
                  src="/landingPage.webp" // Update with your image path
                  alt="Description of image"
                  width={500} // Adjust width as needed
                  height={500} // Adjust height as needed
                  className="object-cover w-full h-auto rounded-full" // Ensures image is responsive
                />
              </motion.div>
            </div>

            {/* Right Column: Text */}
            <div className="flex flex-col justify-center items-start text-0b293c">
              <p className="text-center text-dark">What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <div className="flex gap-4 items-center w-full justify-center pt-7">
                <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  Filled
                </button>
                <button className="bg-slate-100 rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  Outlined
                </button>
                <button className="bg-primary rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  Text
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


"use client"

import React from 'react';
import * as motion from "framer-motion/client"
import styles from "./homePage.module.css";

export default function Offers() {

  return (
    <div className="p-8 sm:p-20 bg-base w-full h-max">
      <div className="relative isolate bg-base w-full  px-3 py-16 sm:py-20 lg:px-8">
        <div
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient opacity-30"
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
          ></div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h1
            className="text-3xl mt-2 lg:text-6xl font-semibold tracking-tight top-0 h-auto py-2 justify-center flex bg-gradient-to-r items-center from-primary via-sky-300 to-primary bg-clip-text text-transparent text-center ">
            What Benifits You will get
          </h1>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-light sm:text-xl">
          Storify Provides a bunch of benifits from end to end encryptions to sharing among families
        </p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .3, ease: 'easeOut' }}
          className="features-container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 rounded-lg pt-20"
        >

          <div
            className={`feature-wrapper grid grid-cols-1 md:grid-cols-3 rounded-lg p-6 bg-secondary ${styles.featureBoxShadow}`}
          >
            <div className="texts-wrapper col-span-2 flex flex-col justify-start space-y-4">
              <h1 className="feature-title text-xl sm:text-2xl font-bold">
                Sharing
              </h1>

              <p className="font-medium feature-description text-sm sm:text-base text-light">
                Enjoy multiple file sharing options through the Storify applications and the web interface!
              </p>
            </div>

            <div className="image-wrapper flex items-center justify-center">
              <img
                className="w-full h-auto"
                src="/images/features/image-1.webp"
                alt="Collaboration Icon"
              />
            </div>
          </div>

          <div
            className={`feature-wrapper grid grid-cols-1 md:grid-cols-3 rounded-lg p-6 bg-secondary ${styles.featureBoxShadow}`}
          >
            <div className="texts-wrapper col-span-2 flex flex-col justify-start space-y-4">
              <h1 className="feature-title text-xl sm:text-2xl font-bold">
                Media and Usability
              </h1>
              
              <p className="font-medium feature-description text-sm sm:text-base text-light">
                Using our audio and video player, you can play your favorite songs and watch your favorite videos as soon as you upload them to the cloud storage platform.
              </p>
            </div>

            <div className="image-wrapper flex items-center justify-center">
              <img
                className="w-full h-auto"
                src="/images/features/image-1.webp"
                alt="Media Icon"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .3, ease: 'easeOut' }}
          className="features-container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 rounded-lg pt-20"
        >

          <div
            className={`feature-wrapper grid grid-cols-1 md:grid-cols-3 rounded-lg p-6 bg-secondary ${styles.featureBoxShadow}`}
          >
            <div className="texts-wrapper col-span-2 flex flex-col justify-start space-y-4">
              <h1 className="feature-title text-xl sm:text-2xl font-bold">
                Sharing
              </h1>

              <p className="font-medium feature-description text-sm sm:text-base text-light">
                Enjoy multiple file sharing options through the Storify applications and the web interface!
              </p>
            </div>

            <div className="image-wrapper flex items-center justify-center">
              <img
                className="w-full h-auto"
                src="/images/features/image-1.webp"
                alt="Collaboration Icon"
              />
            </div>
          </div>

          <div
            className={`feature-wrapper grid grid-cols-1 md:grid-cols-3 rounded-lg p-6 bg-secondary ${styles.featureBoxShadow}`}
          >
            <div className="texts-wrapper col-span-2 flex flex-col justify-start space-y-4">
              <h1 className="feature-title text-xl sm:text-2xl font-bold">
                Media and Usability
              </h1>

              <p className="font-medium feature-description text-sm sm:text-base text-light">
                Using our audio and video player, you can play your favorite songs and watch your favorite videos as soon as you upload them to the cloud storage platform.
              </p>
            </div>

            <div className="image-wrapper flex items-center justify-center">
              <img
                className="w-full h-auto"
                src="/images/features/image-1.webp"
                alt="Media Icon"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

"use client"

import React from 'react';
import * as motion from "framer-motion/client"
import styles from "./homePage.module.css";

export default function Features() {

  return (
    <div className="p-8 sm:p-20 bg-base w-full h-max">
      <div className="relative isolate bg-base w-full  px-3 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className="text-3xl mt-2 lg:text-6xl font-semibold tracking-tight top-0 h-auto py-2 justify-center flex bg-gradient-to-r items-center from-primary via-sky-300 to-primary bg-clip-text text-transparent text-center ">
            Keeping storage simple and efficient
          </h1>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-light sm:text-xl">
          we are trying to make storage as easy as possible.
        </p>

        <div className="features-container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 rounded-lg pt-20">
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .3, ease: 'easeOut' }}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, ease: 'easeOut' }}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, ease: 'easeOut' }}
            className={`feature-wrapper grid grid-cols-1 md:grid-cols-3 rounded-lg p-6 bg-secondary ${styles.featureBoxShadow}`}
          >
            <div className="texts-wrapper col-span-2 flex flex-col justify-start space-y-4">
              <h1 className="feature-title text-xl sm:text-2xl font-bold">
                Security
              </h1>

              <p className="font-medium feature-description text-sm sm:text-base text-light">
                To guarantee your files' safety, Storify uses TLS/SSL encryption, applied when information is transferred from your device to the Storify servers.
              </p>
            </div>
            <div className="image-wrapper flex items-center justify-center">
              <img
                className="w-full h-auto"
                src="/images/features/image-1.webp"
                alt="Security Icon"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

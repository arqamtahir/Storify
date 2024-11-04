"use client"

import React from 'react';
import * as motion from "framer-motion/client"

export default function Features() {

  return (
    <div className="p-8 sm:p-20 bg-074b6c w-full h-full">
      <h1 className="text-4xl font-bold py-12">Keeping storage simple and efficient</h1>

      <div className="features-container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 rounded-lg">
        
        <motion.div 
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5, ease: 'easeOut' }}
          className="feature-wrapper grid grid-cols-1 md:grid-cols-3 rounded-lg p-6 bg-14709dbb"
        >
          <div className="texts-wrapper col-span-2 flex flex-col justify-center space-y-4">
            <h1 className="feature-title text-xl sm:text-2xl font-bold">
              Sharing
            </h1>
            <p className="feature-description text-sm sm:text-base">
              Enjoy multiple file sharing options through the Storify applications and the web interface!
            </p>
          </div>
          <div className="image-wrapper flex items-center justify-center sm:h-20">
            <img
              className="w-full h-auto"
              src="https://pcdn-landing.pcloud.com/CloudwardsSpecial/MZCt/content/Collaboration-2.png"
              alt="Collaboration Icon"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: .8, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="feature-wrapper grid grid-cols-1 md:grid-cols-3 rounded-lg p-6 bg-14709dbb"
        >
          <div className="texts-wrapper col-span-2 flex flex-col justify-center space-y-4">
            <h1 className="feature-title text-xl sm:text-2xl font-bold">
              Media and Usability
            </h1>
            <p className="feature-description text-sm sm:text-base">
              Using our audio and video player, you can play your favorite songs and watch your favorite videos as soon as you upload them to the cloud storage platform.
            </p>
          </div>
          <div className="image-wrapper flex items-center justify-center">
            <img
              className="w-full h-auto"
              src="https://pcdn-landing.pcloud.com/CloudwardsSpecial/MZCt/content/media%402x.png"
              alt="Media Icon"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="feature-wrapper grid grid-cols-1 md:grid-cols-3 rounded-lg p-6 bg-14709dbb"
        >
          <div className="texts-wrapper col-span-2 flex flex-col justify-center space-y-4">
            <h1 className="feature-title text-xl sm:text-2xl font-bold">
              Security
            </h1>
            <p className="feature-description text-sm sm:text-base">
              To guarantee your files' safety, Storify uses TLS/SSL encryption, applied when information is transferred from your device to the Storify servers.
            </p>
          </div>
          <div className="image-wrapper flex items-center justify-center">
            <img
              className="w-full h-auto"
              src="https://pcdn-landing.pcloud.com/CloudwardsSpecial/MZCt/content/Security-3.png"
              alt="Security Icon"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

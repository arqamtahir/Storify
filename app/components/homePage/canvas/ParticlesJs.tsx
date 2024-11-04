"use client"

// components/ParticlesBackground.tsx
import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import styles from "./ParticlesJs.module.css";
import Image from "next/image";
import * as motion from "framer-motion/client"

const ParticlesJs = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
      };
    
      const options = useMemo(
        () => ({
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 20,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fffcd4",
            },
            links: {
              color: "#fffcd4",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 280,
            },
            opacity: {
              value: .7,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 3, max: 5 },
            },
          },
          detectRetina: true,
          fullScreen: false,
        }),
        [],
      );
    
      if (init) {
        return (
              <Particles
                  id="tsparticles"
                  className={styles.particles}
                  particlesLoaded={particlesLoaded}
                  options={options}
              />
        );
    }
    
      return <></>
};

export default ParticlesJs;

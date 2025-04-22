import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = ({ theme }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: theme === "light" ? "#3b82f6" : "#60a5fa",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: theme === "light" ? "#3b82f6" : "#60a5fa",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticleBackground;
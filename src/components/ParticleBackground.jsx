import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = ({ theme }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          color: {
            value: theme === 'light' ? '#3b82f6' : '#60a5fa',
          },
          shape: {
            type: ['circle', 'triangle', 'square'],
            options: {
              polygon: {
                sides: 6,
              },
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'bounce',
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: theme === 'light' ? '#3b82f6' : '#60a5fa',
            opacity: 0.4,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.05,
            },
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onHover: {
              enable: true,
              mode: ['grab', 'bubble'],
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.8,
              },
            },
            bubble: {
              distance: 200,
              size: 6,
              duration: 0.3,
              opacity: 0.8,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        background: {
          color: 'transparent',
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;

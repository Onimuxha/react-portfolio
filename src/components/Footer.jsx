import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Text from './LocalizedText';
import CVDownloadModal from './CVDownloadModal';
import {
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase2,
  IconMail,
  IconDownload,
  IconArrowUpRight,
} from '@tabler/icons-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinksData = [
    { nameKey: 'navbar.home', to: 'home', icon: <IconHome size={18} /> },
    { nameKey: 'navbar.about', to: 'about', icon: <IconUser size={18} /> },
    { nameKey: 'navbar.skills', to: 'skills', icon: <IconCode size={18} /> },
    { nameKey: 'navbar.experiences', to: 'experiences', icon: <IconBriefcase2 size={18} /> },
    { nameKey: 'navbar.contact', to: 'contact', icon: <IconMail size={18} /> },
  ];

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirmDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/kirito.pdf';
    link.download = 'kiritoss.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsModalOpen(false);
  };

  return (
    <footer className='relative bg-zinc-100 text-gray-300 dark:bg-slate-900'>
      <div className='container mx-auto px-3 pb-8 pt-12'>
        <div className='rounded-2xl bg-zinc-50 p-8 shadow-2xl backdrop-blur-lg dark:bg-slate-800'>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
            <div className='col-span-1 lg:col-span-2'>
              <h2 className='mb-4 text-3xl font-bold tracking-tight text-slate-600 dark:text-slate-400'>
                <Text>hero.name</Text>
              </h2>
              <p className='text-md mb-6 max-w-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl'>
                Crafting exceptional digital experiences with modern web technologies. Focused on building scalable and
                performant applications.
              </p>
              <div className='h-0.5 w-36 rounded-full bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700'></div>
            </div>

            <div className='col-span-1'>
              <h3 className='mb-5 text-lg font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400'>
                <Text>footer.quick-link</Text>
              </h3>
              <ul className='space-y-3'>
                {navLinksData.map(({ nameKey, to, icon }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      smooth={true}
                      duration={500}
                      className='group relative flex w-64 cursor-pointer items-center justify-between py-3 text-slate-600 transition-all duration-300 hover:text-slate-600 dark:text-slate-400'
                    >
                      <div className='flex items-center'>
                        {React.cloneElement(icon, {
                          className:
                            'mr-3 text-md md:text-xl text-slate-600 dark:text-slate-400 hover:text-slate-600 transition-colors',
                        })}
                        <Text>{nameKey}</Text>
                      </div>
                      <div className='relative h-5 w-5 overflow-hidden'>
                        <IconArrowUpRight className='absolute left-0 top-0 h-5 w-5 transition-transform duration-500 group-hover:translate-x-full' />
                        <IconArrowUpRight className='absolute left-0 top-0 h-5 w-5 -translate-x-full transform transition-transform duration-500 group-hover:translate-x-0' />
                      </div>
                      <span className='absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-500 group-hover:w-full dark:bg-white' />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='col-span-1'>
              <h3 className='mb-5 text-lg font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400'>
                <Text>footer.download-cv</Text>
              </h3>
              <p className='text-md mb-6 text-slate-600 dark:text-slate-400 md:text-xl'>
                Do you want to know more? Download my Curriculum Vitae.
              </p>
              <button
                onClick={handleDownloadClick}
                className='relative inline-flex h-14 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-all duration-300 overflow-hidden group'
              >
                <Text>hero.view-experience</Text>
                <div className='relative ml-3 h-5 w-5 overflow-hidden'>
                  <IconDownload className='absolute left-0 top-0 h-5 w-5 transition-transform duration-300 group-hover:translate-y-full' />
                  <IconDownload className='absolute left-0 top-0 h-5 w-5 -translate-y-full transform transition-transform duration-300 group-hover:translate-y-0' />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className='mt-10 border-t border-gray-600/50 pt-10 text-center'>
          <p className='text-sm tracking-wide text-gray-500'>
            &copy; {currentYear} <Text>hero.name</Text>. <Text>footer.copyright</Text>
          </p>
        </div>
      </div>

      <CVDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDownload}
        fileName='kiritoss.pdf'
      />
    </footer>
  );
};

export default Footer;

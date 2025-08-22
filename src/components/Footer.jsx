import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Text from './LocalizedText';
import CVDownloadModal from './CVDownloadModal';
import { Home, User2, Code, BriefcaseBusiness, Mail, ChevronsRight, Download, ArrowDownToLine } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinksData = [
    { nameKey: 'navbar.home', to: 'home', icon: <Home size={18} /> },
    { nameKey: 'navbar.about', to: 'about', icon: <User2 size={18} /> },
    { nameKey: 'navbar.skills', to: 'skills', icon: <Code size={18} /> },
    { nameKey: 'navbar.experiences', to: 'experiences', icon: <BriefcaseBusiness size={18} /> },
    { nameKey: 'navbar.contact', to: 'contact', icon: <Mail size={18} /> },
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
    <footer className='relative bg-zinc-100 dark:bg-slate-900 text-gray-300'>
      <div className='container mx-auto px-3 pt-12 pb-8'>
        <div className='bg-gray-900/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-800/50'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='col-span-1 lg:col-span-2'>
              <h2 className='text-3xl font-bold text-gray-100 mb-4 tracking-tight'>
                <Text>hero.name</Text>
              </h2>
              <p className='text-md md:text-xl text-gray-400 mb-6 max-w-lg leading-relaxed'>
                Crafting exceptional digital experiences with modern web technologies. Focused on building scalable and
                performant applications.
              </p>
              <div className='h-0.5 w-36 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-full'></div>
            </div>

            <div className='col-span-1'>
              <h3 className='text-lg font-bold mb-5 text-gray-200 tracking-wide uppercase'>
                <Text>footer.quick-link</Text>
              </h3>
              <ul className='space-y-3'>
                {navLinksData.map(({ nameKey, to, icon }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      smooth={true}
                      duration={500}
                      className='relative flex items-center w-64 justify-between text-gray-400 hover:text-gray-100 cursor-pointer py-3 transition-all duration-300 group'
                    >
                      <div className='flex items-center'>
                        {React.cloneElement(icon, {
                          className:
                            'mr-3 text-md md:text-xl text-gray-400 group-hover:text-gray-300 transition-colors',
                        })}
                        <Text>{nameKey}</Text>
                      </div>
                      <div className='relative h-5 w-5 overflow-hidden'>
                        <ChevronsRight className='absolute top-0 left-0 w-5 h-5 transition-transform duration-300 group-hover:translate-x-full' />
                        <ChevronsRight className='absolute top-0 left-0 w-5 h-5 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0' />
                      </div>
                      <span className='absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full' />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='col-span-1'>
              <h3 className='text-lg font-bold mb-5 text-gray-200 tracking-wide uppercase'>
                <Text>footer.download-cv</Text>
              </h3>
              <p className='text-md md:text-xl text-gray-400 mb-6'>
                Do you want to know more? Download my Curriculum Vitae.
              </p>
              <button
                onClick={handleDownloadClick}
                className='relative inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
              >
                <span className='absolute bottom-0 left-1/2 h-px w-0 bg-white transition-all duration-500 group-hover:w-3/4 group-hover:left-[12.5%]' />
                <span className='relative z-10 font-medium text-lg'>
                  <Text>footer.download-cv</Text>
                </span>
                <div className='relative ml-3 h-5 w-5 overflow-hidden'>
                  <ArrowDownToLine className='absolute top-0 left-0 w-5 h-5 transition-transform duration-300 group-hover:translate-y-full' />
                  <ArrowDownToLine className='absolute top-0 left-0 w-5 h-5 transition-transform duration-300 transform -translate-y-full group-hover:translate-y-0' />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className='pt-10 mt-10 border-t border-gray-600/50 text-center'>
          <p className='text-sm text-gray-500 tracking-wide'>
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

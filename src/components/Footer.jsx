import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Text from './LocalizedText';
import CVDownloadModal from './CVDownloadModal';
import { Home, User2, Code, BriefcaseBusiness, Mail, ChevronsRight, Download } from 'lucide-react';

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
    <footer className='relative bg-gray-950 text-gray-300'>
      <div className='container mx-auto px-2 pt-12 pb-8'>
        <div className='bg-gray-900/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-800/50'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10'>
            <div className='col-span-1 lg:col-span-2'>
              <h2 className='text-3xl font-bold text-gray-100 mb-4 tracking-tight'>
                <Text>hero.name</Text>
              </h2>
              <p className='text-gray-400 mb-6 max-w-md leading-relaxed'>
                Crafting exceptional digital experiences with modern web technologies. Focused on building scalable and
                performant applications.
              </p>
              <div className='h-px w-20 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-full'></div>
            </div>

            <div className='col-span-1'>
              <h3 className='text-lg font-medium mb-5 text-gray-200 tracking-wide uppercase'>
                <Text>footer.quick-link</Text>
              </h3>
              <ul className='space-y-3'>
                {navLinksData.map(({ nameKey, to, icon }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      smooth={true}
                      duration={500}
                      className='flex items-center text-gray-400 hover:text-gray-100 cursor-pointer py-2 transition-all duration-300 group'
                    >
                      {React.cloneElement(icon, {
                        className: "mr-3 text-gray-500 group-hover:text-gray-300 transition-colors"
                      })}
                      <Text>{nameKey}</Text>
                      <ChevronsRight className='ml-auto text-gray-600 group-hover:text-gray-400 transition-colors' />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='col-span-1'>
              <h3 className='text-lg font-medium mb-5 text-gray-200 tracking-wide uppercase'>
                <Text>footer.download-cv</Text>
              </h3>
              <p className='text-gray-400 mb-6 leading-relaxed'>Do you want to know more? Download my Curriculum Vitae.</p>
              <button
                onClick={handleDownloadClick}
                className='inline-flex items-center px-5 py-3 bg-gray-800 hover:bg-gray-700/90 text-gray-100 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group border border-gray-700/50 hover:border-gray-600/50'
              >
                <Text>footer.download-cv</Text>
                <Download className='ml-3 text-lg group-hover:translate-y-0.5 transition-transform' />
              </button>
            </div>
          </div>
        </div>

        <div className='pt-10 mt-10 border-t border-gray-800/50 text-center'>
          <p className='text-sm text-gray-500 tracking-wide'>
            &copy; {currentYear} Kirito. <Text>footer.copyright</Text>
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
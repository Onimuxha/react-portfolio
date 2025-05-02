import React from 'react';
import { Link } from 'react-scroll';
import cvFile from '../assets/kirito.pdf';
import { useTranslation } from 'react-i18next';
import LocalizedText from './LocalizedText';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative bg-gradient-to-br from-gray-900 to-blue-900 text-white'>
      {/* Main Footer Content with glassmorphism */}
      <div className='container mx-auto px-6 pt-8 pb-6'>
        <div className='backdrop-blur-sm bg-white/5 rounded-2xl p-8 shadow-xl border border-white/10'>
          {/* Footer Links Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
            {/* Brand Column */}
            <div className='col-span-1 lg:col-span-2'>
              <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 mb-4'>
                Kirito
              </h2>
              <p className='text-gray-300 mb-5 max-w-md'>
                Crafting exceptional digital experiences with modern web technologies. Focused on building scalable and
                performant applications.
              </p>
              <div className='h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full'></div>
            </div>

            {/* Quick Links Column */}
            <div className='col-span-1'>
              <h3 className='text-xl font-semibold mb-4 text-blue-200'>Quick Links</h3>
              <ul className='space-y-2'>
                {['home', 'about', 'skills', 'contact'].map((item) => (
                  <li key={item} className='transition-all duration-300'>
                    <Link
                      to={item}
                      smooth={true}
                      duration={500}
                      className='text-gray-300 hover:text-blue-300 cursor-pointer inline-block py-1 transition-all duration-300 hover:translate-x-2'
                    >
                      <LocalizedText>{t(`navbar.${item}`)}</LocalizedText>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className='col-span-1'>
              <h3 className='text-xl font-semibold mb-4 text-blue-200'><LocalizedText>{t('footer.download-cv')}</LocalizedText></h3>
              <p className='text-gray-300 mb-4'>Want to know more? Download my Curriculum Vitae.</p>
              <a
                href={cvFile}
                className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-lg transition-all duration-300 shadow-lg group'
                download='kiritoss.pdf'
              >
                <LocalizedText>{t('footer.download-cv')}</LocalizedText>
                <i className='bx bxs-download ml-2 text-xl group-hover:translate-y-1 transition-transform duration-300'></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 mt-8 border-t border-white/10 text-center'>
          <p className='text-sm text-gray-400'>&copy; {currentYear} Kirito. <LocalizedText>{t ('footer.copyright')}</LocalizedText></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

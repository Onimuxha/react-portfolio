import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { handleTelegramSubmission } from './telegramService';
import { useTranslation } from 'react-i18next';
import Text from './LocalizedText';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', telegram: '', subject: '', message: '' });
  const [status, setStatus] = useState({ isSubmitting: false, isSubmitted: false, error: null });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const { t, i18n } = useTranslation();

  const fields = {
    name: 'contact.name-required',
    telegram: 'contact.telegram-required',
    subject: 'contact.subject-required',
    message: 'contact.message-required',
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(fields).forEach(([key, translationKey]) => {
      if (!formData[key].trim()) {
        newErrors[key] = <Text>{translationKey}</Text>;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    if (validate()) {
      setStatus({ isSubmitting: true, isSubmitted: false, error: null });

      try {
        await handleTelegramSubmission(
          formData,
          () => {
            setStatus({ isSubmitting: false, isSubmitted: true, error: null });
            setFormData({ name: '', telegram: '', subject: '', message: '' });
            setTouched({});
          },
          (error) => {
            setStatus({ isSubmitting: false, isSubmitted: false, error: error.message || 'Failed to send message' });
          },
          validate
        );
      } catch (error) {
        setStatus({ isSubmitting: false, isSubmitted: false, error: 'An unexpected error occurred' });
      }
    }
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    validate();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (touched[e.target.name]) validate();
  };

  const contactInfo = [
    {
      icon: 'bx bxl-telegram',
      title: 'Telegram',
      content: '@socheath',
      color: 'text-blue-500',
      isLink: true,
      href: 'https://t.me/socheath',
    },
    {
      icon: 'bx bxl-gmail',
      title: 'Gmail',
      content: 'hello@pages.dev',
      isLink: true,
      href: 'mailto:hello@page.dev',
      color: 'text-blue-400',
    },
    {
      icon: 'bx bxs-mobile',
      title: 'Phone',
      content: '+81 70-1234-5678',
      isLink: true,
      href: 'tel:+817012345678',
      color: 'text-purple-400',
    },
  ];

  const socialLinks = [
    {
      icon: 'bx bxl-github',
      url: 'https://github.com',
      className: 'text-gray-800 dark:text-gray-200 hover:text-white',
      bg: 'bg-gray-200 dark:bg-gray-700 hover:bg-black dark:hover:bg-black',
    },
    {
      icon: 'bx bxl-linkedin',
      url: 'https://linkedin.com',
      className: 'text-[#0A66C2] hover:text-white',
      bg: 'bg-[#0A66C2]/10 hover:bg-[#0A66C2]',
    },
    {
      icon: 'bx bxl-facebook',
      url: 'https://facebook.com',
      className: 'text-white hover:text-white',
      bg: 'bg-[#1877f2] hover:bg-[#166fe5]',
    },
    {
      icon: 'bx bxl-instagram',
      url: 'https://instagram.com',
      className: 'text-white opacity-90 hover:opacity-100',
      bg: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:shadow-lg hover:shadow-[#ee2a7b]/50',
    },
  ];

  const renderField = (name, label, isTextarea = false) => (
    <div className={`relative z-0 ${!['name', 'telegram'].includes(name) ? 'mt-6' : ''}`}>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          rows='5'
          className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-gray-800 dark:text-white focus:outline-none focus:ring-0 peer ${touched[name] && errors[name]
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-300 dark:border-gray-600 focus:border-cyan-400 dark:focus:border-cyan-400'
            }`}
          placeholder=' '
        />
      ) : (
        <input
          type='text'
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-gray-800 dark:text-white focus:outline-none focus:ring-0 peer ${touched[name] && errors[name]
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-300 dark:border-gray-600 focus:border-cyan-400 dark:focus:border-cyan-400'
            }`}
          placeholder=' '
        />
      )}
      <label
        htmlFor={name}
        className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${touched[name] && errors[name]
          ? 'text-red-500'
          : 'text-gray-500 dark:text-gray-400 peer-focus:text-cyan-400 peer-focus:dark:text-cyan-400'
          }`}
      >
        <Text>{`contact.${name}`}</Text>
      </label>
      {touched[name] && errors[name] && (
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className='mt-1 text-xs text-red-500'>
          {errors[name]}
        </motion.p>
      )}
    </div>
  );

  return (
    <section
      id='contact'
      className='py-20 bg-gray-50/80 dark:bg-gray-950/90'
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h3 className='text-5xl md:text-7xl font-black tracking-tight mb-4 text-gray-900 dark:text-white'>
            {i18n.language === 'kh' ? (
              <>
                <span className='text-transparent py-3 bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-100'>
                  <Text>contact.let's</Text>
                </span>{' '}
                <Text>contact.together</Text>
              </>
            ) : (
              <>
                <Text>contact.let's</Text>{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-100'>
                  <Text>contact.together</Text>
                </span>
              </>
            )}
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-600 dark:via-gray-400 dark:to-gray-600 mx-auto rounded-full mb-16"></div>

          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Contact Info */}
          <div className='lg:w-2/5' data-aos='fade-up'>
            <div
              className='backdrop-blur-xl bg-white/90 dark:bg-gray-800/80 rounded-xl p-8 h-full relative group 
    transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/80 dark:border-gray-700/50'
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                backgroundImage:
                  'var(--contact-gradient, linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%))',
              }}
            >
              <h3 className='text-2xl font-semibold mb-8 text-gray-800 dark:text-white'>
                <Text>contact.contact-info</Text>
              </h3>

              {/* Keep existing contact info content */}
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 flex items-center justify-center shadow-sm group-hover:bg-gray-200/50 dark:group-hover:bg-gray-700 transition-all duration-300">
                      <i className={`${item.icon} text-xl text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100`}></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h4>
                      {item.isLink ? (
                        <div
                          onClick={() => {
                            // Force page navigation
                            const a = document.createElement('a');
                            a.href = item.href;
                            if (item.href.startsWith('http')) {
                              a.target = '_blank';
                              a.rel = 'noopener noreferrer';
                            }
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                          }}
                          className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300 flex items-center"
                        >
                          {item.content}
                        </div>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Keep existing social links section */}
              <div className='mt-12'>
                <h4 className='text-lg font-semibold mb-4 text-gray-800 dark:text-white'>
                  <Text>contact.follow-me</Text>
                </h4>
                <div className='flex space-x-4'>
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`
          w-12 h-12 rounded-xl flex items-center justify-center 
          transition-all duration-300 shadow-sm
          bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600
          hover:bg-gray-50 dark:hover:bg-gray-600/70
          hover:shadow-md hover:-translate-y-1
          group
        `}
                      data-aos='zoom-in'
                      data-aos-delay={i * 100}
                    >
                      <i className={`
          ${social.icon} text-2xl 
          text-gray-700 dark:text-gray-300
          group-hover:text-gray-900 dark:group-hover:text-gray-100
          transition-colors duration-300
        `}></i>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:w-3/5' data-aos='fade-up'>
            <div
              className='backdrop-blur-xl bg-white/80 dark:bg-gray-800/70 rounded-xl overflow-hidden relative group 
    transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-gray-400/20 dark:hover:shadow-gray-600/20'
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
                backgroundImage:
                  'var(--contact-gradient, linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%))',
              }}
            >
              <AnimatePresence>
                {status.isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='text-center p-12'
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                      }}
                      className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 mb-6'
                    >
                      <motion.svg
                        width='32'
                        height='32'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <motion.path
                          d='M20 6L9 17l-5-5'
                          initial={{ pathLength: 1, pathOffset: 1 }}
                          animate={{ pathLength: 1, pathOffset: 0 }}
                          transition={{
                            duration: 0.8,
                            ease: 'easeInOut',
                            delay: 0.4,
                            times: [0, 1],
                            direction: 'reverse',
                          }}
                        />
                      </motion.svg>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className='text-2xl font-semibold mb-2 text-gray-800 dark:text-white'
                    >
                      <Text>contact.send-success</Text>
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      className='text-gray-600 dark:text-gray-300 mb-8'
                    >
                      Thank you for reaching out! I'll get back to you within 24 hours.
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStatus({ ...status, isSubmitted: false })}
                      className='px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-md'
                    >
                      <Text>contact.send-another</Text>
                    </motion.button>
                  </motion.div>
                ) : (
                  <div className='p-8 text-gray-800 dark:text-white'>
                    <h3 className='text-2xl font-semibold mb-6 text-gray-800 dark:text-white'>
                      <Text>contact.send-message</Text>
                    </h3>

                    {status.error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='mb-6 p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-600 dark:text-red-300 rounded-md'
                      >
                        <p>{status.error}</p>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className='py-12' noValidate>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {renderField('name')}
                        {renderField('telegram')}
                      </div>

                      {renderField('subject')}
                      {renderField('message', true)}

                      <button
                        type='submit'
                        disabled={status.isSubmitting}
                        className={`w-full mt-8 px-6 py-3 rounded-lg bg-gray-800 dark:bg-gray-700 text-white font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg ${status.isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                          }`}
                      >
                        {status.isSubmitting ? (
                          <span className='flex items-center justify-center'>
                            <svg
                              className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                            >
                              <circle
                                className='opacity-25'
                                cx='12'
                                cy='12'
                                r='10'
                                stroke='currentColor'
                                strokeWidth='4'
                              ></circle>
                              <path
                                className='opacity-75'
                                fill='currentColor'
                                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                              ></path>
                            </svg>
                            <Text>contact.sending</Text>
                          </span>
                        ) : (
                          <p>
                            <Text>contact.send</Text>
                          </p>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </AnimatePresence>
              {/* Animated border */}
              <div className='absolute inset-0 rounded-xl border border-gray-300 dark:border-gray-600 group-hover:border-gray-400 dark:group-hover:border-gray-500 pointer-events-none'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Fix for the styled-jsx issue */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --contact-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 249, 255, 0.9) 100%);
          }
    
          .dark {
            --contact-gradient: linear-gradient(135deg, rgba(21, 94, 117, 0.15) 0%, rgba(8, 51, 68, 0.25) 100%);
          }
        `,
        }}
      />
    </section>
  );
};

export default Contact;

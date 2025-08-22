import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { handleTelegramSubmission } from './telegramService';
import { useTranslation } from 'react-i18next';
import Text from './LocalizedText';
import { LoaderCircle, SendHorizonal } from 'lucide-react';
import { Facebook, GitHubDark, Gmail, Instagram, LinkedIn, Telegram, XDark } from 'developer-icons';

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
      icon: <Telegram className='w-7 h-7' />,
      title: 'Telegram',
      content: '@socheath',
      color: 'text-blue-500',
      isLink: true,
      href: 'https://t.me/socheath',
    },
    {
      icon: <Gmail className='w-7 h-7' />,
      title: 'Gmail',
      content: 'hello@pages.dev',
      isLink: true,
      href: 'mailto:hello@page.dev',
      color: 'text-blue-400',
    },
    {
      icon: <XDark className='w-7 h-7' />,
      title: 'Phone',
      content: '+81 70-1234-5678',
      isLink: true,
      href: 'tel:+817012345678',
      color: 'text-purple-400',
    },
  ];

  const socialLinks = [
    {
      icon: <GitHubDark className='w-7 h-7' />,
      url: 'https://github.com',
    },
    {
      icon: <LinkedIn className='w-7 h-7' />,
      url: 'https://linkedin.com',
    },
    {
      icon: <Facebook className='w-7 h-7' />,
      url: 'https://facebook.com',
    },
    {
      icon: <Instagram className='w-7 h-7' />,
      url: 'https://instagram.com',
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
          className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-gray-800 dark:text-white focus:outline-none focus:ring-0 peer ${
            touched[name] && errors[name]
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
          className={`block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-gray-800 dark:text-white focus:outline-none focus:ring-0 peer ${
            touched[name] && errors[name]
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 dark:border-gray-600 focus:border-cyan-400 dark:focus:border-cyan-400'
          }`}
          placeholder=' '
        />
      )}
      <label
        htmlFor={name}
        className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
          touched[name] && errors[name]
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
    <section id='contact' className='py-20 bg-slate-200 dark:bg-slate-800 min-h-screen'>
      <div className='container mx-auto px-3 max-w-6xl'>
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
          <div className='w-24 h-1 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-600 dark:via-gray-400 dark:to-gray-600 mx-auto rounded-full mb-10'></div>
          <p className='text-md md:text-xl mx-auto text-gray-800 dark:text-gray-400 max-w-2xl'>
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
              <div className='space-y-6'>
                {contactInfo.map((item, i) => (
                  <div key={i} className='flex items-start group'>
                    <div className='flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 flex items-center justify-center shadow-sm group-hover:bg-gray-200/50 dark:group-hover:bg-gray-700 transition-all duration-300'>
                      {item.icon}
                    </div>
                    <div className='ml-4'>
                      <h4 className='text-lg font-semibold text-gray-800 dark:text-white'>{item.title}</h4>
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
                          className='cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300 flex items-center'
                        >
                          {item.content}
                        </div>
                      ) : (
                        <p className='text-gray-600 dark:text-gray-400'>{item.content}</p>
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
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600/70 hover:shadow-md hover:-translate-y-1 group`}
                      data-aos='zoom-in'
                      data-aos-delay={i * 100}
                    >
                      {/* <i className={`${social.icon} text-2xl text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300`}></i> */}
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:w-3/5' data-aos='fade-up'>
            <div
              className='backdrop-blur-xl bg-white/80 dark:bg-gray-800/70 rounded-xl overflow-hidden relative group transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-gray-400/20 dark:hover:shadow-gray-600/20'
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
                        className={`relative inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group w-full mt-8 ${
                          status.isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                        }`}
                      >
                        <span className='absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition' />
                        <span className='absolute bottom-0 left-1/2 h-px w-0 bg-white transition-all duration-500 group-hover:w-3/4 group-hover:left-[12.5%]' />
                        {status.isSubmitting ? (
                          <span className='relative z-10 flex items-center font-medium text-lg'>
                            <LoaderCircle className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' />
                            <Text>contact.sending</Text>
                          </span>
                        ) : (
                          <span className='relative z-10 flex items-center font-medium text-lg'>
                            <Text>contact.send</Text>
                            <div className='relative h-5 w-5 ml-2 overflow-hidden'>
                              <SendHorizonal className='absolute top-0 left-0 w-5 h-5 transition-transform duration-300 group-hover:translate-x-full' />
                              <SendHorizonal className='absolute top-0 left-0 w-5 h-5 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0' />
                            </div>
                          </span>
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

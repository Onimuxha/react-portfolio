import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ isSubmitting: false, isSubmitted: false, error: null });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched to show validation messages
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (validate()) {
      setStatus({ isSubmitting: true, isSubmitted: false, error: null });
      // Simulate form submission
      setTimeout(() => {
        setStatus({ isSubmitting: false, isSubmitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({});
      }, 1500);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validate();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      validate();
    }
  };

  const contactInfo = [
    {
      icon: 'fab fa-telegram',
      title: 'Telegram',
      content: '@kirito',
      color: 'text-blue-500',
      isLink: true,
      href: 'https://t.me/kirito',
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'hello@kirito.dev',
      isLink: true,
      href: 'mailto:hello@kirito.dev',
      color: 'text-blue-400',
    },
    {
      icon: 'fas fa-mobile',
      title: 'Phone',
      content: '+81 70-1234-5678',
      isLink: true,
      href: 'tel:+817012345678',
      color: 'text-purple-400',
    },
  ];

  return (
    <section
      id='contact'
      className='py-20 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950'
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h2 className='text-4xl font-semibold mb-4 text-gray-800 dark:text-white'>
            Get In{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>Touch</span>
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Contact Info */}
          <div className='lg:w-2/5' data-aos='fade-up'>
            <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-8 h-full border border-gray-200/50 dark:border-gray-700/50'>
              <h3 className='text-2xl font-semibold mb-8 text-gray-800 dark:text-white'>Contact Information</h3>
              <div className='space-y-6'>
                {contactInfo.map((item, i) => (
                  <div key={i} className='flex items-start'>
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/10 to-blue-500/10 ${item.color} flex items-center justify-center shadow-sm`}
                    >
                      <i className={`${item.icon} text-xl`}></i>
                    </div>
                    <div className='ml-4'>
                      <h4 className='text-lg font-semibold text-gray-800 dark:text-white'>{item.title}</h4>
                      {item.isLink ? (
                        <a
                          href={item.href}
                          className={`text-gray-600 dark:text-gray-300 hover:${item.color} transition-colors`}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className='text-gray-600 dark:text-gray-300'>{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-12'>
                <h4 className='text-lg font-semibold mb-4 text-gray-800 dark:text-white'>Follow Me</h4>
                <div className='flex space-x-4'>
                  {[
                    {
                      icon: 'fab fa-github',
                      url: 'https://github.com',
                      className: 'text-gray-800 dark:text-gray-200 hover:text-white',
                      bg: 'bg-gray-200 dark:bg-gray-700 hover:bg-black dark:hover:bg-black transition-all duration-300',
                    },
                    {
                      icon: 'fab fa-linkedin-in',
                      url: 'https://linkedin.com',
                      className: 'text-[#0A66C2] hover:text-white',
                      bg: 'bg-[#0A66C2]/10 hover:bg-[#0A66C2] transition-all duration-300',
                    },
                    {
                      icon: 'fab fa-facebook-f',  // Facebook icon
                      url: 'https://facebook.com',
                      className: 'text-white hover:text-white',  // Always white text
                      bg: 'bg-[#1877f2] hover:bg-[#166fe5] transition-all duration-300',  // Official Facebook blue
                    },
                    {
                      icon: 'fab fa-instagram',
                      url: 'https://instagram.com',
                      className: 'text-white opacity-90 hover:opacity-100',
                      bg: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:shadow-lg hover:shadow-[#ee2a7b]/50 transition-all duration-300',
                    },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${social.bg} ${social.className}`}
                      data-aos='zoom-in'
                      data-aos-delay={i * 100}
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:w-3/5' data-aos='fade-up'>
            <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50'>
              <AnimatePresence>
                {status.isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className='text-center p-12'
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-400 mb-6'
                    >
                      <svg
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
                          transition={{ delay: 0.2, duration: 0.6 }}
                        />
                      </svg>
                    </motion.div>
                    <h3 className='text-2xl font-semibold mb-2 text-gray-800 dark:text-white'>Message Sent!</h3>
                    <p className='text-gray-600 dark:text-gray-300 mb-8'>
                      Thank you for reaching out! I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus({ ...status, isSubmitted: false })}
                      className='px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-md'
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <div className='p-8'>
                    <h3 className='text-2xl font-semibold mb-6 text-gray-800 dark:text-white'>Send Me a Message</h3>
                    <form onSubmit={handleSubmit} noValidate>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {['name', 'email'].map((field) => (
                          <div key={field} className='relative z-0'>
                            <input
                              type={field === 'email' ? 'email' : 'text'}
                              id={field}
                              name={field}
                              value={formData[field]}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer ${
                                touched[field] && errors[field]
                                  ? 'border-red-500 focus:border-red-500'
                                  : 'border-gray-300 dark:border-gray-600 focus:border-cyan-400 dark:focus:border-cyan-400'
                              }`}
                              placeholder=' '
                            />
                            <label
                              htmlFor={field}
                              className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                                touched[field] && errors[field]
                                  ? 'text-red-500'
                                  : 'text-gray-500 dark:text-gray-400 peer-focus:text-cyan-400 peer-focus:dark:text-cyan-400'
                              }`}
                            >
                              {field === 'name' ? 'Your Name' : 'Your Email'}
                            </label>
                            {touched[field] && errors[field] && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className='mt-1 text-xs text-red-500'
                              >
                                {errors[field]}
                              </motion.p>
                            )}
                          </div>
                        ))}
                      </div>

                      {['subject', 'message'].map((field, i) => (
                        <div key={field} className='relative z-0 mt-6'>
                          {field === 'message' ? (
                            <textarea
                              id={field}
                              name={field}
                              value={formData[field]}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              rows='5'
                              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer ${
                                touched[field] && errors[field]
                                  ? 'border-red-500 focus:border-red-500'
                                  : 'border-gray-300 dark:border-gray-600 focus:border-cyan-400 dark:focus:border-cyan-400'
                              }`}
                              placeholder=' '
                            />
                          ) : (
                            <input
                              type='text'
                              id={field}
                              name={field}
                              value={formData[field]}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer ${
                                touched[field] && errors[field]
                                  ? 'border-red-500 focus:border-red-500'
                                  : 'border-gray-300 dark:border-gray-600 focus:border-cyan-400 dark:focus:border-cyan-400'
                              }`}
                              placeholder=' '
                            />
                          )}
                          <label
                            htmlFor={field}
                            className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                              touched[field] && errors[field]
                                ? 'text-red-500'
                                : 'text-gray-500 dark:text-gray-400 peer-focus:text-cyan-400 peer-focus:dark:text-cyan-400'
                            }`}
                          >
                            {field === 'message' ? 'Your Message' : 'Subject'}
                          </label>
                          {touched[field] && errors[field] && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className='mt-1 text-xs text-red-500'
                            >
                              {errors[field]}
                            </motion.p>
                          )}
                        </div>
                      ))}

                      <button
                        type='submit'
                        disabled={status.isSubmitting}
                        className={`w-full mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg ${
                          status.isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
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
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

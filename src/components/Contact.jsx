import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ isSubmitting: false, isSubmitted: false, error: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ isSubmitting: true, isSubmitted: false, error: null });
    // Simulate form submission
    setTimeout(() => {
      setStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', title: 'Location', content: 'San Francisco, CA' },
    { icon: 'fas fa-envelope', title: 'Email', content: 'hello@example.com', isLink: true, href: 'mailto:hello@example.com' },
    { icon: 'fas fa-phone', title: 'Phone', content: '+1 (234) 567-8900', isLink: true, href: 'tel:+1234567890' }
  ];

  const socials = [
    { icon: 'fab fa-github', url: 'https://github.com' },
    { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com' }
  ];

  return (
    <section id='contact' className='py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h2 className='text-4xl font-bold mb-4 text-gray-800 dark:text-white'>
            Get In <span className='text-primary'>Touch</span>
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-12'>
          {/* Contact Info */}
          <div className='lg:w-2/5' data-aos='fade-up'>
            <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full'>
              <h3 className='text-2xl font-bold mb-8 text-gray-800 dark:text-white'>Contact Information</h3>
              <div className='space-y-6'>
                {contactInfo.map((item, i) => (
                  <div key={i} className='flex items-start'>
                    <div className='flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center'>
                      <i className={`${item.icon} text-xl`}></i>
                    </div>
                    <div className='ml-4'>
                      <h4 className='text-lg font-semibold text-gray-800 dark:text-white'>{item.title}</h4>
                      {item.isLink ? (
                        <a href={item.href} className='text-gray-600 dark:text-gray-300 hover:text-primary transition-colors'>
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
                <div className='flex space-x-4 text-gray-800 dark:text-white'>
                  {socials.map((social, i) => (
                    <a key={i} href={social.url} target='_blank' rel='noopener noreferrer' 
                       className='social-icon group' data-aos='zoom-in' data-aos-delay={i * 100}>
                      <i className={`${social.icon} group-hover:text-white transition-colors`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:w-3/5' data-aos='fade-up'>
            <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden'>
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
                      className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-500 mb-6'
                    >
                      <svg width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                        <motion.path d='M20 6L9 17l-5-5' initial={{ pathLength: 1, pathOffset: 1 }} animate={{ pathLength: 1, pathOffset: 0 }} transition={{ delay: 0.2, duration: 0.6 }} />
                      </svg>
                    </motion.div>
                    <h3 className='text-2xl font-bold mb-2 text-gray-800 dark:text-white'>Message Sent!</h3>
                    <p className='text-gray-600 dark:text-gray-300 mb-8'>Thank you for reaching out! I'll get back to you within 24 hours.</p>
                    <button onClick={() => setStatus({...status, isSubmitted: false})} className='px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90'>
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <div className='p-8'>
                    <h3 className='text-2xl font-bold mb-6 text-gray-800 dark:text-white'>Send Me a Message</h3>
                    <form onSubmit={handleSubmit}>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {['name', 'email'].map(field => (
                          <div key={field} className='relative z-0'>
                            <input
                              type={field === 'email' ? 'email' : 'text'}
                              id={field}
                              name={field}
                              value={formData[field]}
                              onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
                              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer'
                              placeholder=' '
                              required
                            />
                            <label htmlFor={field} className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                              {field === 'name' ? 'Your Name' : 'Your Email'}
                            </label>
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
                              onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
                              rows='5'
                              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer'
                              placeholder=' '
                              required
                            />
                          ) : (
                            <input
                              type='text'
                              id={field}
                              name={field}
                              value={formData[field]}
                              onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
                              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer'
                              placeholder=' '
                              required
                            />
                          )}
                          <label htmlFor={field} className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            {field === 'message' ? 'Your Message' : 'Subject'}
                          </label>
                        </div>
                      ))}

                      <button
                        type='submit'
                        disabled={status.isSubmitting}
                        className={`w-full mt-8 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 ${status.isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                      >
                        {status.isSubmitting ? (
                          <span className='flex items-center justify-center'>
                            <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                              <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                            </svg>
                            Sending...
                          </span>
                        ) : 'Send Message'}
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
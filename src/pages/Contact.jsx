import React, { useState, useEffect } from 'react';
import { handleTelegramSubmission } from '../components/telegramService';
import { useTranslation } from 'react-i18next';
import Text from '../components/LocalizedText';
import {
  IconLoader3,
  IconSend,
  IconMail,
  IconPhone,
  IconBrandTelegram,
  IconCheck,
  IconArrowUpRight,
  IconMap2,
} from '@tabler/icons-react';
import { GitHubDark, LinkedIn, Instagram, Facebook } from 'developer-icons';

const contacts = [
  {
    href: 'https://t.me/socheath',
    label: 'Telegram',
    value: '@socheath',
    icon: <IconBrandTelegram size={25} className='text-blue-400' />,
    border: 'border-blue-500/30',
    bg: 'from-blue-500/30 to-blue-600/20',
  },
  {
    href: 'mailto:hello@pages.dev',
    label: 'Email',
    value: 'hello@pages.dev',
    icon: <IconMail size={25} className='text-emerald-400' />,
    border: 'border-emerald-500/30',
    bg: 'from-emerald-500/30 to-emerald-600/20',
  },
  {
    href: 'tel:+817012345678',
    label: 'Phone',
    value: '+81 70-1234-5678',
    icon: <IconPhone size={25} className='text-violet-400' />,
    border: 'border-violet-500/30',
    bg: 'from-violet-500/30 to-violet-600/20',
  },
  {
    href: '#',
    label: 'Location',
    value: 'Phnom Penh, Cambodia',
    icon: <IconMap2 size={25} className='text-pink-400' />,
    border: 'border-pink-500/30',
    bg: 'from-pink-500/30 to-pink-600/20',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', telegram: '', subject: '', message: '' });
  const [status, setStatus] = useState({ isSubmitting: false, isSubmitted: false, error: null });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 120,
      });
    }
  }, []);

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) newErrors[key] = true;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

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
          (error) => setStatus({ isSubmitting: false, isSubmitted: false, error: error.message }),
          validate
        );
      } catch (error) {
        setStatus({ isSubmitting: false, isSubmitted: false, error: 'Unexpected error occurred' });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) validate();
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    validate();
  };

  return (
    <section id='contact' className='min-h-screen bg-gray-100 px-3 py-20 pt-28 dark:bg-gray-900'>
      <div className='mx-auto max-w-5xl'>
        {/* Header */}
        <div className='mb-16 text-center' data-aos='fade-up'>
          <h3 className='mb-4 text-5xl font-black tracking-tight text-gray-900 dark:text-white md:text-7xl'>
            <Text>contact.contact</Text>{' '}
            <span className='bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text py-6 text-transparent dark:from-gray-400 dark:to-gray-100'>
              <Text>general.me</Text>
            </span>
          </h3>
          <div className='mx-auto mb-10 h-1 w-24 rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-600 dark:via-gray-400 dark:to-gray-600'></div>
          <p className='mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300'>
            Ready to start something amazing together?
          </p>
        </div>

        {/* Bento Grid */}
        <div className='mb-6 grid grid-cols-1 gap-5 md:grid-cols-2'>
          {/* Get in touch */}
          <div
            className='group rounded-3xl border border-gray-300/50 bg-gradient-to-br from-white/90 to-gray-50/70 p-8 backdrop-blur-sm transition-all duration-500 hover:border-gray-400/50 dark:border-gray-700/50 dark:from-gray-900/90 dark:to-gray-800/70 dark:hover:border-gray-600/50'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <h3 className='mb-8 text-3xl font-medium text-gray-900 dark:text-white'>Get in touch</h3>
            <div>
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className='group/item flex cursor-pointer items-center gap-5 rounded-2xl p-4 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${c.border} bg-gradient-to-br ${c.bg} transition-transform group-hover/item:scale-110`}
                  >
                    {c.icon}
                  </div>
                  <div className='flex-1'>
                    <p className='mb-1 font-semibold text-gray-900 dark:text-white'>{c.label}</p>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>{c.value}</p>
                  </div>
                </a>
              ))}
              <div className='border-t border-gray-200/50 pt-4 dark:border-gray-700/50'>
                <p className='text-sm text-gray-600 dark:text-gray-400'>GMT+7 Timezone</p>
                <p className='text-sm text-gray-500 dark:text-gray-500'>
                  Local time:{' '}
                  {new Date().toLocaleTimeString('en-US', {
                    timeZone: 'Asia/Phnom_Penh',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Social Connect - Enhanced */}
          <div
            className='rounded-3xl border border-gray-300/50 bg-gradient-to-br from-white/90 to-gray-50/70 p-8 backdrop-blur-sm transition-all duration-500 hover:border-gray-400/50 dark:border-gray-700/50 dark:from-gray-900/90 dark:to-gray-800/70 dark:hover:border-gray-600/50'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <h3 className='mb-8 text-3xl font-medium text-gray-900 dark:text-white'>Connect</h3>
            <div>
              {[
                {
                  icon: <GitHubDark size={25} className='dark:invert' />,
                  href: 'https://github.com/yourusername',
                  label: 'GitHub',
                  username: '@yourusername',
                },
                {
                  icon: <LinkedIn size={25} />,
                  href: 'https://linkedin.com/in/yourusername',
                  label: 'LinkedIn',
                  username: '@yourusername',
                },
                {
                  icon: <Instagram size={25} />,
                  href: 'https://instagram.com/yourusername',
                  label: 'Instagram',
                  username: '@yourusername',
                },
                {
                  icon: <Facebook size={25} />,
                  href: 'https://facebook.com/yourusername',
                  label: 'Facebook',
                  username: '@yourusername',
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex cursor-pointer items-center gap-5 rounded-2xl p-4 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                >
                  <div className='group flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300/50 bg-white/80 transition-all hover:scale-110 dark:border-gray-600/50 dark:bg-gray-700/60'>
                    <span className='text-gray-600 dark:text-gray-400'>{social.icon}</span>
                  </div>
                  <div className='flex-1'>
                    <p className='mb-1 font-semibold text-gray-900 dark:text-white'>{social.label}</p>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>{social.username}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form - Enhanced */}
        <div
          className='rounded-3xl border border-gray-300/50 bg-gradient-to-br from-white/90 to-gray-50/70 p-10 backdrop-blur-sm transition-all duration-500 hover:border-gray-400/50 dark:border-gray-700/50 dark:from-gray-900/90 dark:to-gray-800/70 dark:hover:border-gray-600/50'
          data-aos='fade-up'
          data-aos-delay='500'
        >
          {status.isSubmitted ? (
            <div className='py-16 text-center'>
              <div className='mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/30 bg-gradient-to-br from-emerald-500/30 to-emerald-600/20'>
                <IconCheck size={36} className='text-emerald-500 dark:text-emerald-400' />
              </div>
              <h3 className='mb-6 text-3xl font-medium text-gray-900 dark:text-white'>Message sent successfully!</h3>
              <p className='mx-auto mb-10 max-w-md text-lg leading-relaxed text-gray-600 dark:text-gray-400'>
                Thank you for reaching out. I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus({ ...status, isSubmitted: false })}
                className='rounded-2xl bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-gray-100'
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h3 className='mb-10 text-3xl font-medium text-gray-900 dark:text-white'>Send me a message</h3>

              {status.error && (
                <div className='mb-8 rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-500/10 to-red-600/5 p-5 text-red-600 backdrop-blur-sm dark:from-red-500/20 dark:to-red-600/10 dark:text-red-400'>
                  <p className='font-medium'>{status.error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  {/* Name */}
                  <div className='relative'>
                    <input
                      type='text'
                      name='name'
                      placeholder='Your name'
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full rounded-2xl border-2 bg-gray-50/70 p-5 text-gray-900 backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:outline-none dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-500 ${
                        touched.name && errors.name
                          ? 'border-red-500/60 bg-red-100/40 focus:border-red-500 dark:bg-red-950/20 dark:focus:border-red-400'
                          : 'border-gray-300/60 hover:border-gray-400 focus:border-gray-500 dark:border-gray-700/60 dark:hover:border-gray-600/70 dark:focus:border-gray-500/80'
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className='mt-2 text-sm font-medium text-red-600 dark:text-red-400'>Name is required</p>
                    )}
                  </div>

                  {/* Telegram */}
                  <div className='relative'>
                    <input
                      type='text'
                      name='telegram'
                      placeholder='Your telegram'
                      value={formData.telegram}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full rounded-2xl border-2 bg-gray-50/70 p-5 text-gray-900 backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:outline-none dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-500 ${
                        touched.telegram && errors.telegram
                          ? 'border-red-500/60 bg-red-100/40 focus:border-red-500 dark:bg-red-950/20 dark:focus:border-red-400'
                          : 'border-gray-300/60 hover:border-gray-400 focus:border-gray-500 dark:border-gray-700/60 dark:hover:border-gray-600/70 dark:focus:border-gray-500/80'
                      }`}
                    />
                    {touched.telegram && errors.telegram && (
                      <p className='mt-2 text-sm font-medium text-red-600 dark:text-red-400'>Telegram is required</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className='relative'>
                  <input
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full rounded-2xl border-2 bg-gray-50/70 p-5 text-gray-900 backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:outline-none dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-500 ${
                      touched.subject && errors.subject
                        ? 'border-red-500/60 bg-red-100/40 focus:border-red-500 dark:bg-red-950/20 dark:focus:border-red-400'
                        : 'border-gray-300/60 hover:border-gray-400 focus:border-gray-500 dark:border-gray-700/60 dark:hover:border-gray-600/70 dark:focus:border-gray-500/80'
                    }`}
                  />
                  {touched.subject && errors.subject && (
                    <p className='mt-2 text-sm font-medium text-red-600 dark:text-red-400'>Subject is required</p>
                  )}
                </div>

                {/* Message */}
                <div className='relative'>
                  <textarea
                    name='message'
                    rows='6'
                    placeholder='Your message'
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full resize-none rounded-2xl border-2 bg-gray-50/70 p-5 text-gray-900 backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:outline-none dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-500 ${
                      touched.message && errors.message
                        ? 'border-red-500/60 bg-red-100/40 focus:border-red-500 dark:bg-red-950/20 dark:focus:border-red-400'
                        : 'border-gray-300/60 hover:border-gray-400 focus:border-gray-500 dark:border-gray-700/60 dark:hover:border-gray-600/70 dark:focus:border-gray-500/80'
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className='mt-2 text-sm font-medium text-red-600 dark:text-red-400'>Message is required</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={status.isSubmitting}
                  className={`flex items-center gap-3 rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 ${
                    status.isSubmitting
                      ? 'cursor-not-allowed bg-gray-200 text-gray-500 dark:bg-gray-700/70 dark:text-gray-400'
                      : 'bg-black text-white shadow-lg hover:scale-105 hover:bg-gray-900 active:scale-95 dark:bg-white dark:text-black dark:shadow-white/10 dark:hover:bg-gray-100'
                  }`}
                >
                  {status.isSubmitting ? (
                    <>
                      <IconLoader3 size={22} className='animate-spin' />
                      Sending message...
                    </>
                  ) : (
                    <>
                      Send message
                      <IconSend size={22} />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

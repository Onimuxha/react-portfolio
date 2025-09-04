import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Text from './LocalizedText';
import cvFile from '../assets/kirito.pdf';
import { IconDownload, IconFileTextFilled, IconLoader3, IconServer, IconX } from '@tabler/icons-react';

const CVDownloadModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [fileSize, setFileSize] = useState(null);

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} bytes`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  useEffect(() => {
    const getFileSize = async () => {
      try {
        const response = await fetch(cvFile);
        if (response.ok) {
          const blob = await response.blob();
          setFileSize(formatSize(blob.size));
        } else {
          setFileSize('Size unknown');
        }
      } catch (error) {
        console.error('Error fetching file size:', error);
        setFileSize('Size unknown');
      }
    };

    if (isOpen) getFileSize();
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'kirito.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/70 backdrop-blur-md' onClick={onClose}></div>
      <div className='relative mx-4 w-full max-w-md overflow-hidden rounded-xl border border-gray-700 bg-gray-900 text-gray-200 shadow-2xl'>
        <div className='flex items-center justify-between border-b border-gray-800 px-6 py-4'>
          <h3 className='text-xl font-semibold text-gray-100'>
            <Text>footer.confirm</Text>
          </h3>
          <button
            onClick={onClose}
            className='rounded-md p-2 text-gray-400'
          >
            <IconX size={23} className='transition-all duration-300 hover:rotate-90' />
          </button>
        </div>

        <div className='px-6 py-6'>
          <div className='mb-6 text-center'>
            <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-700 bg-gray-800'>
              <IconFileTextFilled size={30} className='text-gray-300' />
            </div>
            <p className='mb-2 text-gray-300'>Are you sure you want to download this file?</p>
            <div className='mt-4 rounded-lg border border-gray-700/50 bg-gray-800/50 p-4'>
              <p className='font-medium text-gray-100'>{cvFile.split('/').pop()}</p>
              <p className='mt-1 flex items-center justify-center text-sm text-gray-400'>
                {fileSize ? (
                  <>
                    <IconServer className='mr-1' />
                    {fileSize}
                  </>
                ) : (
                  <>
                    <IconLoader3 className='mr-1 animate-spin' />
                    Loading size...
                  </>
                )}
              </p>
            </div>
          </div>

          <div className='flex justify-center gap-3'>
            <button
              onClick={onClose}
              className='group relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none'
            >
              <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 p-3 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
                <span className='flex items-center p-5 transition-all hover:text-red-500'>
                  <Text>footer.cancel</Text>
                  <IconX size={20} className='ml-2 duration-300 group-hover:rotate-90' />
                </span>
              </span>
            </button>

            <button
              onClick={handleDownload}
              className='group relative inline-flex h-14 animate-shimmer items-center justify-center overflow-hidden rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-all duration-300'
            >
              <Text>footer.download</Text>
              <div className='relative ml-3 h-5 w-5 overflow-hidden'>
                <IconDownload
                  size={20}
                  className='absolute left-0 top-0 transition-all duration-300 group-hover:translate-y-full'
                />
                <IconDownload
                  size={20}
                  className='absolute left-0 top-0 -translate-y-full transform transition-all duration-300 group-hover:translate-y-0'
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDownloadModal;

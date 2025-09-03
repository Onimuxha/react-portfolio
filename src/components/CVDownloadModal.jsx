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
            className='rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-800 hover:text-gray-100'
          >
            <IconX size={23} className='hover:rotate-90 transition-all duration-300' />
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
              className='flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-5 py-2.5 text-gray-300 shadow transition-all duration-300 hover:border-gray-600 hover:bg-gray-700 hover:text-gray-100 hover:shadow-md'
            >
              <Text>footer.cancel</Text>
            </button>
            <button
              onClick={handleDownload}
              className='flex items-center gap-2 rounded-lg border border-gray-600 bg-gray-700 px-5 py-2.5 text-gray-100 shadow transition-all duration-300 hover:border-gray-500 hover:bg-gray-600 hover:text-white hover:shadow-md'
            >
              <Text>footer.download</Text>
              <IconDownload size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDownloadModal;

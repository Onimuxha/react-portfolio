import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Text from './LocalizedText';
import cvFile from '../assets/kirito.pdf';

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
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={onClose}></div>

      <div className='relative bg-gradient-to-br from-gray-800 to-blue-900 text-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden border border-white/10'>
        <div className='px-6 py-4 border-b border-gray-700 flex justify-between items-center'>
          <h3 className='text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400'>
            <Text>footer.confirm</Text>
          </h3>
          <button onClick={onClose} className='text-gray-400 hover:text-white transition-colors'>
            <i className='bx bx-x text-2xl'></i>
          </button>
        </div>

        <div className='px-6 py-6'>
          <div className='mb-6 text-center'>
            <div className='w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-600/30 rounded-lg'>
              <i className='bx bxs-file-pdf text-5xl text-blue-400'></i>
            </div>
            <p className='text-gray-300 mb-2'>Are you sure you want to download this file?</p>
            <div className='bg-white/5 rounded-lg p-4 mt-4'>
              <p className='text-blue-300 font-medium'>{cvFile.split('/').pop()}</p>
              <p className='text-gray-400 text-sm mt-1'>
                {fileSize ? (
                  <>
                    <i className='bx bxs-data mr-1'></i>
                    {fileSize}
                  </>
                ) : (
                  <>
                    <i className='bx bx-loader-alt animate-spin mr-1'></i>Loading size...
                  </>
                )}
              </p>
            </div>
          </div>

          <div className='flex gap-3 justify-center'>
            <button
              onClick={onClose}
              className='px-4 py-2 bg-gradient-to-r from-red-500/80 to-red-600/80 
                hover:from-red-600 hover:to-red-700
                rounded-lg transition-all duration-300
                border border-red-500/20 
                shadow-lg shadow-red-500/20 hover:shadow-red-500/30
                flex items-center gap-2'
            >
              <Text>footer.cancel</Text>
            </button>
            <button
              onClick={handleDownload}
              className='px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 rounded-lg transition-all duration-300 flex items-center'
            >
              <Text>footer.download</Text>
              <i className='bx bxs-download ml-2'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDownloadModal;

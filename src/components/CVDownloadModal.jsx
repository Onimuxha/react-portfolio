import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LocalizedText from './LocalizedText';
import cvFile from '../../public/assets/kirito.pdf';

const CVDownloadModal = ({ isOpen, onClose, onConfirm, fileName }) => {
  const { t } = useTranslation();
  const [fileSize, setFileSize] = useState(null);

  useEffect(() => {
    const getFileSize = async () => {
      try {
        try {
          const response = await fetch(cvFile);
          if (response.ok) {
            const blob = await response.blob();
            const size = blob.size;

            if (size < 1024) {
              setFileSize(`${size} bytes`);
            } else if (size < 1024 * 1024) {
              setFileSize(`${(size / 1024).toFixed(2)} KB`);
            } else {
              setFileSize(`${(size / (1024 * 1024)).toFixed(2)} MB`);
            }
            return;
          }
        } catch (fetchError) {
          console.log('Fetch blob method failed:', fetchError);
        }

        const xhr = new XMLHttpRequest();
        xhr.open('GET', cvFile, true);
        xhr.responseType = 'blob';

        xhr.onload = function () {
          if (xhr.status === 200) {
            const size = xhr.response.size;
            if (size < 1024) {
              setFileSize(`${size} bytes`);
            } else if (size < 1024 * 1024) {
              setFileSize(`${(size / 1024).toFixed(2)} KB`);
            } else {
              setFileSize(`${(size / (1024 * 1024)).toFixed(2)} MB`);
            }
          } else {
            console.log('Failed to get file size from XMLHttpRequest');
            setFileSize('Size unknown');
          }
        };

        xhr.onerror = function () {
          console.error('XHR error occurred');
          setFileSize('Size unknown');
        };

        xhr.send(null);
      } catch (error) {
        console.error('Error fetching file size:', error);
        setFileSize('Size unknown');
      }
    };

    if (isOpen) {
      getFileSize();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      {/* Backdrop overlay */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={onClose}></div>

      {/* Modal */}
      <div className='relative bg-gradient-to-br from-gray-800 to-blue-900 text-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden border border-white/10'>
        {/* Modal header */}
        <div className='px-6 py-4 border-b border-gray-700 flex justify-between items-center'>
          <h3 className='text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400'>
            <LocalizedText>{t('footer.confirm')}</LocalizedText>
          </h3>
          <button onClick={onClose} className='text-gray-400 hover:text-white transition-colors'>
            <i className='bx bx-x text-2xl'></i>
          </button>
        </div>

        {/* Modal body */}
        <div className='px-6 py-6'>
          <div className='mb-6 text-center'>
            <div className='w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-600/30 rounded-lg'>
              <i className='bx bxs-file-pdf text-5xl text-blue-400'></i>
            </div>
            <p className='text-gray-300 mb-2'>Are you sure you want to download this file?</p>
            <div className='bg-white/5 rounded-lg p-4 mt-4'>
              <p className='text-blue-300 font-medium'>{fileName.split('/').pop()}</p>
              {fileSize ? (
                <p className='text-gray-400 text-sm mt-1'>
                  <i className='bx bxs-data mr-1'></i>{fileSize}
                </p>
              ) : (
                <p className='text-gray-400 text-sm mt-1'>
                  <i className='bx bx-loader-alt animate-spin mr-1'></i> Loading size...
                </p>
              )}
            </div>
          </div>

          <div className='flex gap-3 justify-center'>
            <button
              onClick={onClose}
              className='px-4 py-2 bg-red-700 hover:bg-red-600 rounded-lg transition-colors duration-300'
            >
              <LocalizedText>{t('footer.cancel')}</LocalizedText>
            </button>
            <button
              onClick={onConfirm}
              className='px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 rounded-lg transition-all duration-300 flex items-center'
            >
              <LocalizedText>{t('footer.download')}</LocalizedText>
              <i className='bx bxs-download ml-2'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDownloadModal;

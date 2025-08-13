import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Text from './LocalizedText';
import cvFile from '../assets/kirito.pdf';
import { Database, Download, LoaderCircle, X } from 'lucide-react';

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
      <div className='absolute inset-0 bg-black/70 backdrop-blur-md' onClick={onClose}></div>

      <div className='relative bg-gray-900 text-gray-200 rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden border border-gray-700'>
        <div className='px-6 py-4 border-b border-gray-800 flex justify-between items-center'>
          <h3 className='text-xl font-semibold text-gray-100'>
            <Text>footer.confirm</Text>
          </h3>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-100 transition-colors p-1 rounded-full hover:bg-gray-800'
          >
            <X className='bx bx-x text-2xl' />
          </button>
        </div>

        <div className='px-6 py-6'>
          <div className='mb-6 text-center'>
            <div className='w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-800 rounded-lg border border-gray-700'>
              <i className='bx bxs-file-pdf text-4xl text-gray-300'></i>
            </div>
            <p className='text-gray-300 mb-2'>Are you sure you want to download this file?</p>
            <div className='bg-gray-800/50 rounded-lg p-4 mt-4 border border-gray-700/50'>
              <p className='text-gray-100 font-medium'>{cvFile.split('/').pop()}</p>
              <p className='text-gray-400 text-sm mt-1 flex items-center justify-center'>
                {fileSize ? (
                  <>
                    <Database className="mr-1" />
                    {fileSize}
                  </>
                ) : (
                  <>
                    <LoaderCircle className='animate-spin mr-1' />
                    Loading size...
                  </>
                )}
              </p>
            </div>
          </div>

          <div className='flex gap-3 justify-center'>
            <button
              onClick={onClose}
              className='px-5 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-gray-100 flex items-center gap-2 shadow hover:shadow-md'
            >
              <Text>footer.cancel</Text>
            </button>
            <button
              onClick={handleDownload}
              className='px-5 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 text-gray-100 hover:text-white flex items-center gap-2 shadow hover:shadow-md border border-gray-600 hover:border-gray-500'
            >
              <Text>footer.download</Text>
              <Download size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDownloadModal;
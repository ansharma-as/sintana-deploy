// VideoModal.jsx
import React from 'react';

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="relative w-full max-w-4xl mx-auto bg-transparent">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
        >
          X
        </button>

        {/* YouTube Video Embed */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;

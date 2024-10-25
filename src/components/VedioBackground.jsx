import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';



const VideoBackgroundSection = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [showYouTubeVideo, setShowYouTubeVideo] = useState(false); // State to toggle YouTube video

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to stop video playback below 760px
  useEffect(() => {
    if (viewportWidth <= 760) {
      setShowVideo(false);
    } else {
      setShowVideo(true);
    }
  }, [viewportWidth]);

  const handleWatchVideoClick = () => {
    setShowYouTubeVideo(true);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Video Background */}
      {showVideo ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/images/home-page-vedio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src="/images/BU3.png" 
          alt="Background Image"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Main Overlay Div (for content) */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-[86%] mx-auto bg-white bg-opacity-0 flex flex-col justify-center">
        {/* Title */}
        <h1 className="mt-32 text-4xl md:text-5xl lg:text-7xl text-white font-bold tracking-wide mb-4">
        Alliance for Growth


        </h1>

        {/* Subtitle */}
        <div>
          <p className=" text-lg lg:text-[27.26px] font-bold text-white mb-6 w-full leading-relaxed">
          Accelerating University Growth and Success


          </p>

          <span className="text-lg lg:text-[27.26px] text-white mb-6 leading-relaxed w-full">
            Founded by <span className="text-yellow-400">Jagendra Singh</span> in collaboration with <span className="text-yellow-400">Bennett University</span> (ranked #1 in the India for innovation), Sintana helps universities reach more students with the education they need and deserve.
          </span>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2 lg:space-x-4 mt-16">
          <a href="/sintana-alliance">
            <button className="text-bold opacity-85 text-sm lg:text-lg bg-yellow-500 text-white px-8 lg:px-12 py-2.5 transition duration-300">
              Discover More
            </button>
          </a>
          <button
            onClick={handleWatchVideoClick}
            className="text-sm lg:text-lg text-white px-9 py-2 transition duration-300"
          >
            Watch The Video
            <FontAwesomeIcon icon={faYoutube} className="ml-2 text-lg" />
          </button>
        </div>
      </div>

      {/* YouTube Video Overlay */}
      {showYouTubeVideo && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-[90%] h-[70%] lg:h-[100%] lg:w-[80%]">
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/PZMHnE71cuM?playlist=PZMHnE71cuM&loop=1"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowYouTubeVideo(false)}
              className="absolute top-2 right-2 bg-gray-700 text-white px-4 py-2 rounded-full z-60"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBackgroundSection;

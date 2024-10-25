import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCards = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex flex-col xl:flex-row items-center">
        
        {/* Left Section - Text and Button */}
        <div className="xl:w-1/2 text-center xl:text-left">
          <h1 className="text-gray-700 text-4xl font-bold mb-4 ml-5">
            Powered by BU
          </h1>
          <p className="text-gray-500 mb-6 ml-5">
            When you partner with Sintana and BU, your students get direct access to the resources and expertise of Bennett University.
          </p>
          <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded hover:bg-yellow-600 transition ml-8"
          onClick={() => navigate('/powered-by-bu')}>
            Learn more
          </button>
        </div>
        
        {/* Right Section - Image */}
        <div className="xl:w-1/2">
          <img
            src="/images/BU3.png"  // Replace with your image URL
            alt="Billboard"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
    </div>



    {/* Section 2 reverting cards */}

    <div className="container mx-auto flex flex-col xl:flex-row items-center">
        {/* Left Section - Image */}
        <div className="xl:w-1/2">
          <img
            src="/images/BU4.png"  // Replace with your image URL
            alt="Billboard"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Section - Text and Button */}
        <div className="xl:w-1/2 text-center xl:text-left">
          <h1 className="text-gray-700 text-4xl font-bold mb-4 ml-5">
            Launching New universities
          </h1>
          <p className="text-gray-500 mb-6 ml-5">
          We can help design, launch, and operate new projects anywhere in the world.          </p>
          <button className="bg-yellow-500 text-white ml-8 font-bold py-2 px-6 rounded hover:bg-yellow-600 transition"
          onClick={() => navigate('/new-universities')}>
            Learn more
          </button>
        </div>
      </div>


      {/* Section-3 Again Reverting */}

      <div className="container mx-auto flex flex-col xl:flex-row items-center">
        
        {/* Left Section - Text and Button */}
        <div className="xl:w-1/2 text-center xl:text-left">
          <h1 className="text-gray-700 text-4xl font-bold mb-4 ml-5">
          Helping Globally Ranked Universities Reach New Markets
          </h1>
          <p className="text-gray-500 mb-6 ml-5">
          We can help develop new markets, launch and manage foreign campuses, and create new cross-border partnerships.          </p>
          <button className="bg-yellow-500 ml-8 text-white font-bold py-2 px-6 rounded hover:bg-yellow-600 transition"
          onClick={() => navigate('/globally-ranked-universities')}>
            Learn more
          </button>
        </div>
        
        {/* Right Section - Image */}
        <div className="xl:w-1/2">
          <img
            src="/images/BU7.png"  // Replace with your image URL
            alt="Billboard"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
    </div>

    {/* Section-4 Again Reverting */}

    <div className="container mx-auto flex flex-col xl:flex-row items-center">
        {/* Left Section - Image */}
        <div className="xl:w-1/2">
          <img
            src="/images/BU5.png"  // Replace with your image URL
            alt="Billboard"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Section - Text and Button */}
        <div className="xl:w-1/2 text-center xl:text-left">
          <h1 className="text-gray-700 text-4xl font-bold mb-4 ml-5">
          Featured University          </h1>
          <p className="text-gray-500 mb-6 ml-5">
          Bennett University Collaborates with Tel Aviv University to Boost Research and Innovation in Science and Technology. </p>
          {/* <button className="bg-yellow-500 ml-8 text-white font-bold py-2 px-6 rounded hover:bg-yellow-600 transition">
            Learn more
          </button> */}
        </div>
      </div>




    </div>


  );
};

export default HomeCards;

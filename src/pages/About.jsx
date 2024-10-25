import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/Footer';
import Partnership from '../components/PartnerwithusToday';

const AboutPage = () => {
    return (
        <>
        <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative">
        {/* Background Image */}
        <img
          className="w-full  h-[217.8px] xl:h-[500px] object-cover" // Adjust the height as necessary
          src="/images/BU7.png" // Make sure the correct image path is here
          alt="Background"
        />
    {/* <div className="min-h-screen flex flex-col">
        {/* Header Section */}
        {/* <header className="relative"> */}
            {/* Background Image */}
            {/* <img 
                className="w-full h-64 md:h-96 object-cover" 
                src="/images/about.png" 
                alt="Background"  */}
            {/* />  */}

            {/* Navigation Menu */}
            <div className="absolute top-0 left-0 w-full">
                 <Navbar />
            </div>
        </header>

        {/* About Us Section */}
        <div className="bg-gray-50 py-12">
            <div className=" px-4 md:px-0">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4 text-center">About Us</h1>
                <hr className="w-16 mx-auto border-gray-400 mb-8 " />
                <p className=" w-auto px-16 text-gray-600 text-base md:text-lg">
                Sintana Education helps universities worldwide enhance their academic standards and expand their reach, enabling more students to access the quality education they deserve. By offering top-tier expertise and leveraging both its own resources and those of BU, a prestigious university aligned with Sintana’s vision, it fosters growth and innovation in higher education. The Sintana Alliance is a global network of universities collaborating to address the increasing demand for high-quality post-secondary education across the world.
                </p>
            </div>
        </div>

        <div>
            <Partnership/>
        </div>





        {/* Footer */}
        <footer>
            <FooterComponent />
        </footer>
      </div>
    </>
    );
}

export default AboutPage;

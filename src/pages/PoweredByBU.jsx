import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/Footer';
import Partnership from '../components/PartnerwithusToday';

const PoweredByBU = () => {
    return (
        <>
        <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative">
        {/* Background Image */}
        <img
          className="w-full  h-[217.8px] xl:h-[500px] object-cover" // Adjust the height as necessary
          src="/images/BU3.png" // Make sure the correct image path is here
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

export default PoweredByBU;

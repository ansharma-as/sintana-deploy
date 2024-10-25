import React from 'react';
import MapComponent from '../components/MapComponent';
import CardSection from '../components/CardComponent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // Import the Navbar component

const SintanaAlliance = () => {
  return (
    <div>
      {/* Hide the MapComponent when screen width is 1280px or larger */}
      <div className="w-full sm1:hidden md1:hidden lg1:hidden"> 
        <MapComponent />
      </div>

      {/* Show the Navbar component when screen width is 1280px or larger */}
      <div className="hidden sm1:block md1:block lg1:block bg-customGrey">
        <Navbar />
      </div>

      <div className="py-12 bg-gray-100">
        <h1 className="text-center text-5xl font-bold text-customGrey">The Sintana Alliance</h1>
        <div className="mt-4 text-center">
          <h1 className="text-lg text-slate-400 px-20">
          We are creating a global network of innovative universities committed to delivering the highest quality education to all of their students. So far, the Sintana Alliance has positively impacted students worldwide by equipping their institutions with the essential resources to succeed in a highly competitive landscape.          </h1>       
          <p className="text-black px-20 mt-5">
          Each member of the Sintana Alliance is meticulously chosen to serve as the exclusive affiliate of Sintana in their respective regions and areas of study.</p>
          <p className="text-black px-20 mt-5">Sintana Alliance members will provide students and faculty with unparalleled opportunities for global learning, research, and career advancement through exchange programs, dual-degree programs, and access to a vast network of educational institutions.</p>
          <p className="text-black px-20 mt-5"> Through our collective efforts, our alliance will play a leading role in shaping the global discourse on higher education, driving innovation, and addressing the evolving needs of students and society.</p>    
        </div>
        <CardSection />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SintanaAlliance;

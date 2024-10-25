import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative">
        {/* Background Image */}
        <img 
          className="w-full h-150 h-[217.8px] xl:h-[500px]  object-cover" 
          src="/images/BU3.png" 
          alt="Background" 
        />

        {/* Navigation Menu */}
        <div className="absolute top-0 left-0 w-full">
                 <Navbar />
            </div>
      </header>

      {/* Main Section */}
      <section className="bg-customGrey text-white flex-grow flex items-center">
        <div className="container mx-3 max-w-screen-md px-4 py-16 md:px-8">
          {/* Headquarters */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-customYellow mb-4">Headquarters</h2>
            <address className="not-italic space-y-2 text-lg">
              <p>Sintana Education</p>
              <p>Plot 8-11,</p>
              <p>Bennett University</p>
              <p>Greater Noida, 201310 U.P</p>
            </address>
          </div>

          {/* Phone */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-customYellow mb-4">Phone</h2>
            <p className="text-lg">+91 9773661339</p>
          </div>

          {/* Travel Information */}
          <div>
            <h2 className="text-4xl font-bold text-customYellow mb-4">Travel Information</h2>
            <a 
              href="https://Sintana-education.netlify.app/contact" 
              className="text-lg hover:underline">
              https://sintana-education.netlify.app
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-customGrey">
        <div className="relative">
          <iframe
            title="Google Map"
            className="w-full h-96 md:h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.0800640374915!2d77.583237!3d28.449239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzAwLjkiTiA3N8KwMzUnMDAuNiJF!5e0!3m2!1sen!2sin!4v1695881390230!5m2!1sen!2sin&maptype=satellite"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </section>

      <footer>
        <FooterComponent/>
      </footer>
    </div>
  );
};

export default ContactPage;

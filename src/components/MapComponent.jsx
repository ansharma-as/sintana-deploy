import React from 'react';

function MapComponent() {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 ,  blacktheme: true}}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.0800640374915!2d77.583237!3d28.449239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzAwLjkiTiA3N8KwMzUnMDAuNiJF!5e0!3m2!1sen!2sin!4v1695881390230!5m2!1sen!2sin&maptype=satellite"

        allowFullScreen
        title="Sintana Alliance Map"
      ></iframe>
    </div>
  );
}

export default MapComponent;

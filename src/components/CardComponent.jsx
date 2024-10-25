import React from 'react';

const universities = [
  {
    name: 'The University of British Columbia, Canada',
    description: 'A globally renowned university in Canada, offering top-tier programs in various fields through its collaboration with Bennett University.',
    img: '/images/cardSection/UBC.jpg',
    link: 'https://www.bennett.edu.in/ubc',
  },
  {
    name: 'Florida International University, USA',
    description: 'A leading U.S. institution, partnered with Bennett University to provide students with access to international learning and academic opportunities.',
    img: '/images/cardSection/FIU.jpg',
    link: 'https://www.bennett.edu.in/florida-international-university',
  },
  {
    name: 'University of Nebraska, Omaha',
    description: 'Bennett University partners with the University of Nebraska, offering students globally competitive programs in various disciplines.',
    img: '/images/cardSection/UMO.jpg',
    link: 'https://www.bennett.edu.in/university-of-nebraska',
  },
  {
    name: 'University of Essex, England',
    description: 'Through its partnership with the University of Essex, Bennett University offers world-class programs in law and humanities, providing students with a global education.',
    img: '/images/cardSection/EU.jpg',
    link: 'https://www.bennett.edu.in/university-of-essex',
  },
  {
    name: 'King’s University College, Canada',
    description: 'Bennett University partners with King’s University College, offering students unique opportunities to pursue high-quality education in Canada.',
    img: '/images/cardSection/KU.jpg',
    link: 'https://www.bennett.edu.in/kings-university-college',
  },
  {
    name: 'George Mason University, Virginia',
    description: 'Bennett University’s partnership with George Mason University enables students to benefit from internationally recognized programs and professional development opportunities.',
    img: '/images/cardSection/GMU.jpg',
    link: 'https://www.bennett.edu.in/george-mason-university',
  },
  {
    name: 'Tel Aviv University, Israel',
    description: 'In collaboration with Tel Aviv University, Bennett University provides students with access to cutting-edge research and global academic exposure.',
    img: '/images/cardSection/TAU.jpg',
    link: 'https://www.bennett.edu.in/tel-aviv-university',
  },
  {
    name: 'Georgia Institute of Technology, USA',
    description: 'Bennett University’s partnership with Georgia Tech offers students unparalleled opportunities in engineering and technology education.',
    img: '/images/cardSection/GT.jpg',
    link: 'https://www.bennett.edu.in/georgia-tech',
  },

];

const CardSection = () => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-16">
      {universities.map((university, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={university.img} alt={university.name} className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{university.name}</h2>
            <p className="mt-2 text-gray-600">{university.description}</p>
            <a 
              href={university.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;

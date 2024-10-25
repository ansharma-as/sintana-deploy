import React, { useState } from 'react';

const NewsCards = () => {
  const articles = [
    {
        title: 'Bennett University, recognized as one of the most innovative institutions in India, Bennett University transform higher education in Noida(U.P) and the surrounding region.',
        description: "As one of India's most innovative universities, Bennett University is reshaping the educational landscape in Noida and the surrounding region. With a focus on cutting-edge curriculum, state-of-the-art facilities, and a commitment to excellence, Bennett University is empowering students to become future leaders.",
        link: '#',
    },
    {
      title: 'Senior Faculty of Bennett University Jagendra Singh to Join Sintana Education as President',
      description: 'Former Bennett University executive leader brings deep higher education and business background to Sintana Education’s global university network.',
      link: '#',
    },
    {
      title: 'Bennett University Partners with Georgia Tech to Drive Innovation in Engineering and Technology Education',
      description: 'Bennett University collaborates with Georgia Tech to introduce advanced programs that provide students with cutting-edge opportunities in engineering and technology. Greater Noida – March 5, 2024. Bennett University...',
      link: '#',
    },
    {
      title: 'Bennett University Joins Forces with George Mason University to Enhance Global Business and Management Education',
      description: 'In partnership with George Mason University, Bennett University is set to deliver globally recognized business programs, equipping students with international perspectives and expertise. Greater Noida – April 10, 2024...',
      link: '#',
    },
    {
      title: 'Bennett University Collaborates with Tel Aviv University to Boost Research and Innovation in Science and Technology',
      description: 'Through its partnership with Tel Aviv University, Bennett University aims to elevate research and innovation, providing students with unparalleled learning experiences in science and technology. Greater Noida – May 20, 2024...',
      link: '#',
    },
    {
      title: 'Bennett University Partners with the University of Essex to Redefine Legal Studies and Humanities Programs in India',
      description: 'Bennett University teams up with the University of Essex to offer world-class programs in law and humanities, giving students access to international education and professional development. Greater Noida – June 15, 2024...',
      link: '#',
    },
    
    {
        title: 'Bennett University Partners with Sintana Education to Launch Global University Network',
        description: 'Unique collaboration will help institutions worldwide meet rising demand for higher education; scale access to high-quality programs.',
        link: '#',
      },
      
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = window.innerWidth <= 760 ? 1 : 3; // Set cardsPerPage based on viewport width

  const handleNext = () => {
    if (currentPage < Math.ceil(articles.length / cardsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * cardsPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="bg-gray-300 py-12 h-auto">
      <div className="container max-w-fit mx-auto  ">
      {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          {currentArticles.map((article, index) => (
            <div key={index} className="bg-gray-300 p-6 rounded-lg  w-full lg:w-1/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {article.description}
              </p>
              <a href={article.link} className="text-gray-600 font-semibold hover:text-gray-800 flex items-center">
                Read More <span className="ml-2">&rarr;</span>
              </a>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`px-6 py-2 rounded-lg text-white ${currentPage === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-800'}`}
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage >= Math.ceil(articles.length / cardsPerPage) - 1}
            className={`px-6 py-2 rounded-lg text-white ${currentPage >= Math.ceil(articles.length / cardsPerPage) - 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-800'}`}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;

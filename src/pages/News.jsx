import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/Footer';
import Partnership from '../components/PartnerwithusToday';

const NewsPage = () => {
    return (
        <>
        <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative">
        {/* Background Image */}
        <img
          className="w-full  h-[217.8px] xl:h-[500px] object-cover" // Adjust the height as necessary
          src="/images/BU5.png" // Make sure the correct image path is here
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
                <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4 text-center">News</h1>
                <hr className="w-16 mx-auto border-gray-400 mb-8 " />
                {/* <p className=" w-auto px-16 text-gray-600 text-base md:text-lg">
                Sintana Education helps universities worldwide enhance their academic standards and expand their reach, enabling more students to access the quality education they deserve. By offering top-tier expertise and leveraging both its own resources and those of BU, a prestigious university aligned with Sintana’s vision, it fosters growth and innovation in higher education. The Sintana Alliance is a global network of universities collaborating to address the increasing demand for high-quality post-secondary education across the world.
                </p> */}
                <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg">
  <div className="space-y-8">
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold text-gray-800">Bennett University Partners with Georgia Tech to Drive Innovation in Engineering Education</h3>
      <p className="text-sm text-gray-500 mb-2">Nov 27, 2023 | BU News</p>
      <p className="text-gray-700">Bennett University joins hands with Georgia Institute of Technology to enhance its engineering programs, creating transformative academic opportunities for students in India.</p>
    </div>

    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold text-gray-800">Global Education Conference 2023: Bennett University at the Forefront of Higher Education Innovation</h3>
      <p className="text-sm text-gray-500 mb-2">Nov 27, 2023 | BU News</p>
      <p className="text-gray-700">Bennett University showcases its cutting-edge educational model at the Global Education Conference, emphasizing the future of international education.</p>
    </div>

    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold text-gray-800">Bennett and University of Essex Collaborate to Foster Academic Excellence in Humanities and Law</h3>
      <p className="text-sm text-gray-500 mb-2">Oct 30, 2023 | BU News</p>
      <p className="text-gray-700">Through its partnership with the University of Essex, Bennett University continues to provide world-class programs, equipping students with globally competitive skills.</p>
    </div>

    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold text-gray-800">Bennett University Expands Global Footprint with Tel Aviv University Partnership</h3>
      <p className="text-sm text-gray-500 mb-2">Oct 2, 2023 | BU News</p>
      <p className="text-gray-700">Bennett University’s collaboration with Tel Aviv University enhances research initiatives and opens new academic avenues for students in STEM fields.</p>
    </div>

    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold text-gray-800">Pioneering New Educational Models: Bennett University Partners with George Mason University</h3>
      <p className="text-sm text-gray-500 mb-2">July 11, 2023 | BU News</p>
      <p className="text-gray-700">Bennett University teams up with George Mason University to introduce innovative learning methodologies and cross-border research collaborations.</p>
    </div>

    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold text-gray-800">Bennett University Strengthens Ties with the University of British Columbia to Redefine Higher Education in India</h3>
      <p className="text-sm text-gray-500 mb-2">June 8, 2023 | BU Announcement</p>
      <p className="text-gray-700">Through this global partnership, Bennett University offers students access to world-class faculty and programs, setting new standards in education.</p>
    </div>

    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold text-gray-800">Bennett University and King’s University College Join Forces to Enhance Academic Opportunities for Indian Students</h3>
      <p className="text-sm text-gray-500 mb-2">March 31, 2023 | BU Announcement</p>
      <p className="text-gray-700">The partnership brings a robust exchange of ideas and expertise, enabling students to benefit from a global perspective in various disciplines.</p>
    </div>

    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold text-gray-800">Celebrating Faculty Mobility: Bennett University and Georgia Tech Successfully Exchange Expertise</h3>
      <p className="text-sm text-gray-500 mb-2">Feb 22, 2023 | BU News</p>
      <p className="text-gray-700">The faculty exchange program with Georgia Tech marks a significant step in fostering academic collaboration and innovation at Bennett University.</p>
    </div>

    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold text-gray-800">Bennett University Partners with the University of Nebraska to Expand Educational Horizons</h3>
      <p className="text-sm text-gray-500 mb-2">Dec 30, 2022 | BU Announcement</p>
      <p className="text-gray-700">This collaboration aims to provide Bennett students with access to global research and educational opportunities in various fields.</p>
    </div>

    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-bold text-gray-800">Bennett University Collaborates with Florida International University to Launch New Programs for Global Competitiveness</h3>
      <p className="text-sm text-gray-500 mb-2">August 27, 2022 | BU News</p>
      <p className="text-gray-700">The partnership focuses on integrating international best practices in education, enhancing Bennett’s curriculum with global insights.</p>
    </div>
  </div>
</div>

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

export default NewsPage;

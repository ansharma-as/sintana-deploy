import React from 'react';

const UniversityLogos = () => {
  return (
    <div className="bg-slate-400 py-0 h-24 pt-4">
      <div className="container mx-auto  flex justify-around items-center">
        {/* Logo 1 */}
        <a href="https://www.fiu.edu/" target="_blank" rel="noopener noreferrer">
          <img src="/images/university-logo/flu.png" alt="Florida International University, Miami" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 2 */}
        <a href="https://www.gmu.edu/" target="_blank" rel="noopener noreferrer">
          <img src="/images/university-logo/GMU.png" alt="George Mason University, USA" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 3 */}
        <a href="https://www.essex.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="/images/university-logo/UE.png" alt="University of Essex, England" className="h-16 hover:opacity-75 transition-opacity" />
        </a>
        
        {/* Logo 4 */}
        <a href="https://www.kings.uwo.ca/" target="_blank" rel="noopener noreferrer">
          <img src="/images/university-logo/KUC.png" alt="King's University College, Canada" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 5 */}
        <a href="https://english.tau.ac.il/" target="_blank" rel="noopener noreferrer">
          <img src="/images/university-logo/TAU.png" alt="Tel Aviv University, Israel" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 6 */}
        <a href="https://www.ubc.ca/" target="_blank" rel="noopener noreferrer">
          <img src="/images/university-logo/ubc.png" alt="The University of British Columbia" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 7 */}
        <a href="https://www.gatech.edu/" target="_blank" rel="noopener noreferrer">
          <img src="/images/university-logo/GT.png" alt="Georgia Tech University Florida" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

      </div>
    </div>
  );
};

export default UniversityLogos;

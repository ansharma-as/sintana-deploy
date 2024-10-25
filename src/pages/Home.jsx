import React from 'react';
import VideoBackgroundSection from '../components/VedioBackground';
import UniversityLogos from '../components/University-home';
import Footer from '../components/Footer';
import Partnership from '../components/PartnerwithusToday';
import UniversityImprovement from '../components/HelpingUniversitiesImproveandGrow';
import HomeCardsSection from '../components/HomeCards';
import HomeComponent2 from '../components/HomeComponent2';



const App = () => {
  return (
    <div className="App ">
      
        <div className=" w-full">
            <VideoBackgroundSection />
        </div>

        <div >
            <UniversityLogos />
        </div>
        <div>
          <UniversityImprovement />
        </div>

      <div>
        <div>
          <HomeCardsSection />
        </div>
        <div>
          <HomeComponent2 />
        </div>
      </div>
      
      
      <div>
        <Partnership />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

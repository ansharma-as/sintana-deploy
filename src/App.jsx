import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ContactPage from './pages/ContactPage'; // Ensure the path is correct
import AboutPage from './pages/About'; // Ensure the path is correct
import SintanaAlliance from './pages/SintanaAlliance'; // Ensure the path is correct
import Home from './pages/Home'; // Ensure the path is correct
import TrackpadSensitiveSlider from './components/SilderComponent';
import AsuPartnership from './pages/AsuPartnership';
import Team from './pages/Team';
import TeamMemberDetail from './components/TeamMemberDetail';
import Universities from './pages/Universities';
import NewUniversities from './pages/NewUniversities';

import NewsPage from './pages/News';
import TermsPage from './pages/TermsOfUse';
import ExistingUniversities from './pages/existingUniversities';
import PoweredByBU from './pages/PoweredByBU';


// Define a separate component to use the location inside the Router
const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Home - Sintana Education';
        break;
      case '/about':
        document.title = 'About - Sintana Education';
        break;
      case '/contact':
        document.title = 'Contact - Sintana Education';
        break;
      case '/news':
        document.title = 'News - Sintana Education';
        break;
      case '/terms':
        document.title = 'Terms - Sintana Education';
        break;
      case '/bu-partnership':
        document.title = 'BU Partnership - Sintana Education';
        break;
        case '/team':
      document.title = 'Team - Sintana Education';
      break;
      case '/sintana-alliance':
        document.title = 'The Sintana Alliance - Sintana Education';
        break;
      case '/globally-ranked-universities':
      document.title = 'Globally Ranked Universities - Sintana Education';
      break;
      case '/new-universities':
      document.title = 'New Universities - Sintana Education';
      break;
      case '/powered-by-bu':
      document.title = 'Powered By BU - Sintana Education';
      break;
      case '/existing-universities':
      document.title = 'Existing Universities - Sintana Education';
        break;
      default:
        document.title = 'Home - Sintana Education';
    }
  }, [location]);

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/#' element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sintana-alliance" element={<SintanaAlliance />} />
        <Route path="/w" element={<TrackpadSensitiveSlider/>}/>
        <Route path="/bu-partnership" element={<AsuPartnership />}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/team/:name' element={<TeamMemberDetail/>}/>
        <Route path='/globally-ranked-universities' element={<Universities/>} />
        <Route path='/new-universities' element={<NewUniversities/>}/>

        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/terms' element={<TermsPage/>}/>
        <Route path='/powered-by-bu' element={<PoweredByBU/>}/>
        <Route path='/existing-universities' element={< ExistingUniversities />}/>


      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppContent />
      </Suspense>
    </Router>
  );
};

export default App;

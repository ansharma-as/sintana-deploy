import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import RoomIcon from '@mui/icons-material/Room';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LaptopIcon from '@mui/icons-material/Laptop';
import PublicIcon from '@mui/icons-material/Public';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate } from 'react-router-dom';


const UniversityImprovement = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center h-auto w-full py-12">
      <div className="text-customGrey text-5xl font-bold mb-4 mt-4">
        <AccountBalanceIcon  sx={{ fontSize: 100 }} className="text-customGrey text-3xl mb-4"/>
        <br />
        Helping Universities Improve And Grow
      </div>


      <hr className="w-28 mx-auto border-gray-400 mb-8 mt-10 " />


      <div className="text-black mb-8">
        Helping universities to achieve ambitious goals in growth, quality, and reputation.
      </div>

      <div className="grid grid-cols-1 mx-auto ml-24 mr-24 mt-10 mb-10 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="flex flex-col items-center">
          <SchoolIcon sx={{ fontSize: 60 }} className="text-customGrey mb-2" />
          <h3 className="font-bold text-3xl text-customGrey mb-2">Strategic Planning</h3>
          <p className="text-gray-500">Set your course for ambitious growth and expanded impact</p>
        </div>

        <div className="flex flex-col items-center">
          <RoomIcon sx={{ fontSize: 60 }} className="text-customGrey mb-2" />
          <h3 className="font-bold text-3xl text-customGrey mb-2">Recruiting and Marketing</h3>
          <p className="text-gray-500">Reach more prospective students in more markets</p>
        </div>

        <div className="flex flex-col items-center">
          <DesignServicesIcon sx={{ fontSize: 60 }} className="text-customGrey mb-2" />
          <h3 className="font-bold text-3xl text-customGrey mb-2">Academic Curricula</h3>
          <p className="text-gray-500">Develop new programs, enrich existing ones, and offer dual degrees</p>
        </div>

        <div className="flex flex-col items-center">
          <LaptopIcon sx={{ fontSize: 60 }} className="text-customGrey mb-2" />
          <h3 className="font-bold text-3xl text-customGrey mb-2">Online Learning</h3>
          <p className="text-gray-500">Engage with the expanding population of online students</p>
        </div>

        <div className="flex flex-col items-center">
          <PublicIcon sx={{ fontSize: 60 }} className="text-customGrey mb-2" />
          <h3 className="font-bold text-3xl text-customGrey mb-2">International Exchange</h3>
          <p className="text-gray-500">Collaborate and conduct research with other universities</p>
        </div>

        <div className="flex flex-col items-center">
          <EmojiEventsIcon sx={{ fontSize: 60 }} className="text-customGrey mb-2" />
          <h3 className="font-bold text-3xl text-customGrey mb-2">Reputation and Ranking</h3>
          <p className="text-gray-500">Enhance your reputation and improve your rankings</p>
        </div>
      </div>

      <div className="mt-8">
        <button className="bg-yellow-500 text-customGrey font-bold py-2 px-16 rounded mt-8 hover:bg-yellow-600 transition"
        onClick={() => navigate('existing-universities')}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default UniversityImprovement;

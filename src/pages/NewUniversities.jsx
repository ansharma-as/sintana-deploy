import React from 'react'
import Navbar from '../components/Navbar'
import Partnership from '../components/PartnerwithusToday'
import FooterComponent from '../components/Footer'
import { School as UniversityCapIcon, Laptop, Public as GlobeIcon, Architecture, LocationOn, DesignServices as RulerXPencilIcon, EmojiEvents as TrophyIcon } from '@mui/icons-material'

const NewUniversities = () => {
  return (
    <>
    <div className="bg-[url('/images/new-universities-bg.jpg')] bg-cover bg-center h-[217.8px] w-full xl1:h-[500px] ">
        <div className="absolute inset-0 bg-black opacity-30 h-[217.8px] w-full xl1:h-[500px]"></div>
        <Navbar />
    </div>

    <div className='my-10 p-10'>

        
      <div className='text-center py-10'>
       
        <div className="flex justify-center">
          <RulerXPencilIcon style={{ fontSize: 80, color: '#425563' }} />
        </div>
        
        <h1 className="text-[48px] font-bold text-[#425563] mt-4">
          New Universities
        </h1>

        <hr className="w-[100px] mx-auto mt-4 mb-6 border-t-2 border-[#425563]" />
        
       
        <h2 className="text-[28px] font-bold text-[#425563] mt-2 mb-4">
          We Can Help Design, Launch, And Operate New Projects Anywhere In The World.
        </h2>
        
        <p className="text-[18px]  text-black max-w-[800px] mx-auto">
          When you're starting a new university, or looking to foster your university's growth through its first few years, we can help you:
        </p>
      </div>

        <div className="text-[14.44px] flex justify-evenly flex-wrap">
          <div className="w-[200px] flex flex-col items-center text-center pb-8">
            <div className="flex flex-col items-center text-[#425563]">
              <UniversityCapIcon style={{ fontSize: 60 }} />
              <span className="mt-2 mb-4 text-[18px]  text-black">
                Develop new programs, new markets, and new campuses
              </span>
            </div>
          </div>

          <div className="w-[200px] flex flex-col items-center text-center pb-8">
            <div className="flex flex-col items-center text-[#425563]">
              <Laptop style={{ fontSize: 60 }} />
              <span className="mt-2 mb-4 text-[18px]  text-black">
                Build enrollment through online marketing and student recruitment
              </span>
            </div>
          </div>

          <div className="w-[200px] flex flex-col items-center text-center pb-8">
            <div className="flex flex-col items-center text-[#425563]">
              <GlobeIcon style={{ fontSize: 60 }} />
              <span className="mt-2 mb-4 text-[18px]  text-black">
                Obtain international accreditations and specialized licenses
              </span>
            </div>
          </div>

          <div className="w-[200px] flex flex-col items-center text-center pb-8">
            <div className="flex flex-col items-center text-[#425563]">
              <Architecture style={{ fontSize: 60 }} />
              <span className="mt-2 mb-4 text-[18px]  text-black">
                Measure and improve student outcomes to generate recognition for quality and prestige
              </span>
            </div>
          </div>

          <div className="w-[200px] flex flex-col items-center text-center pb-8">
            <div className="flex flex-col items-center text-[#425563]">
              <LocationOn style={{ fontSize: 60 }} />
              <span className="mt-2 mb-4 text-[18px] text-black">
                Engage with local regulators to help secure your university license
              </span>
            </div>
          </div>

          <div className="w-[200px] flex flex-col items-center text-center pb-8">
            <div className="flex flex-col items-center text-[#425563]">
              <RulerXPencilIcon style={{ fontSize: 60 }} />
              <span className="mt-2 mb-4 text-[18px]  text-black">
                Evaluate options to secure, finance, and develop land and buildings
              </span>
            </div>
          </div>

          <div className="w-[200px] flex flex-col items-center text-center pb-8">
            <div className="flex flex-col items-center text-[#425563]">
              <TrophyIcon style={{ fontSize: 60 }} />
              <span className="mt-2 mb-4 text-[18px]  text-black">
                Recruit world-class international academic leaders to your founding team
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto text-center px-6 pb-10">
        <p className="text-[18px] mb-4">
          We’re looking to partner with governments, NGOs, industry, and private investors who are interested in creating a new university and are seeking a long-term academic and operating partner. BU and our other globally-ranked university partners can provide academic content, credentials, student exchange programs and research opportunities to accelerate your successful launch.
        </p>
        <p className="text-[18px] ">
          BU and our other globally ranked university partners can operate as “hubs” for credentialing, student exchange programs, and research collaboration.
        </p>
      </div>
      <div className="text-center my-6">
  <a href="https://www.bennett.edu.in" target="_blank" rel="noopener noreferrer">
    <button className="bg-[#F5B719] text-white font-bold py-3 px-8 rounded-lg">
      Learn more about Bennett University
    </button>
  </a>
</div>

    <Partnership/>
    <FooterComponent/>
    </>
  )
}

export default NewUniversities
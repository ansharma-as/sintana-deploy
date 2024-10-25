import { useLocation } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import {
  FaStreetView,
  FaGlobeAmericas,
  FaLightbulb,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import FooterComponent from "./Footer";
import teamData from "./teamData";
import { useNavigate } from "react-router-dom";

const TeamMemberDetail = () => {
  const location = useLocation();
  const { member } = location.state || {};

  const navigate = useNavigate();

  const slugify = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  const currentIndex = teamData.findIndex(
    (teamMember) => teamMember.name === member.name
  );

  const handlePrevious = () => {
    

    if (currentIndex > 0) {
        const slugifiedName = slugify((teamData[currentIndex - 1]).name);
      navigate(`/team/${slugifiedName}`, {
        state: { member: teamData[currentIndex - 1] },
      });
    }
  };

  const handleNext = () => {
    

    if (currentIndex < teamData.length - 1) {
        const slugifiedName = slugify((teamData[currentIndex + 1]).name);
      navigate(`/team/${slugifiedName}`, {
        state: { member: teamData[currentIndex + 1] },
      });
    }
  };

  return (
    <>
      <div className="bg-[#425563] ">
        <Navbar />

        <div>
          <h2 className="text-[46px] font-bold text-white pl-7 pb-4 ">
            Our Team
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 p-6">
        <div className="col-span-12 md:col-span-3">
          <img
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-auto"
          />
        </div>

        <div className="col-span-12 md:col-span-9">
          <h2 className="text-[46px] font-bold text-[#425563]">
            {member.name}
          </h2>

          <h3 className="text-[18.72px] font-normal text-[#425563] mb-4">
            {member.position}
          </h3>

          <ul className="space-y-4">
            <li className="flex items-center text-[15.84px] text-[#53655A] font-bold">
              <FaStreetView className="mr-2" />
              <span>{member.leadership}</span>
            </li>
            <li className="flex items-center text-[15.84px] text-[#53655A] font-bold">
              <FaGlobeAmericas className="mr-2" />
              <span>{member.region}</span>
            </li>
            <li className="flex items-center text-[15.84px] text-[#53655A] font-bold">
              <FaLightbulb className="mr-2" />
              <span>{member.practice}</span>
            </li>
          </ul>

          <div className="py-5"></div>

          <p className="text-[15.84px]">{member.description}</p>
        </div>
      </div>
      <div className="flex justify-between m-10">
        <div className="flex-grow flex-shrink">
          <button
            className={`md:text-[22px] text-[#425563] font-bold flex items-center gap-2  truncate ${
              currentIndex === 0 ? "opacity-0 " : ""
            }`}
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft className="text-[#F5B719]" /> PREVIOUS
          </button>
        </div>

        <div className="w-[1px] bg-slate-400 flex-shrink-0"></div>

        <div className="flex-grow flex-shrink ">
          <button
            className={`  md:text-[22px] text-[#425563] font-bold flex items-center ml-auto  gap-2 truncate ${
              currentIndex === teamData.length - 1 ? "opacity-0" : ""
            }`}
            onClick={handleNext}
            disabled={currentIndex === teamData.length - 1}
          >
            NEXT <FaChevronRight className="text-[#F5B719]" />
          </button>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default TeamMemberDetail;

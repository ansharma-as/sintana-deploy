import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import LaptopIcon from "@mui/icons-material/Laptop";
import LanguageIcon from "@mui/icons-material/Language";

const BUPart = () => {
  return (
    <div className="text-[14.44px] flex justify-evenly flex-wrap">
      <div className="w-[200px] flex flex-col items-center text-center pb-8">
        <div className="flex flex-col items-center text-[#425563]">
          <SchoolIcon style={{ fontSize: 60 }} />
          <span className="mt-2 mb-4 text-[28.8px] font-bold">
            Content Repository
          </span>
        </div>

        <div >
          Access to a digital repository of content and curriculum from the BU
          catalogue of 200+ online degree programs.
        </div>
      </div>

      <div className="w-[200px] flex flex-col items-center text-center pb-8">
        <div className="flex flex-col items-center text-[#425563]">
          <LocationOnIcon style={{ fontSize: 60 }} />
          <span className="mt-2 mb-4 text-[28.8px] font-bold">
            Study Abroad
          </span>
        </div>
        <div>
          A range of global learning options including the opportunity to study
          at an BU campus in Phoenix, Washington D.C., or Los Angeles.
        </div>
      </div>

      <div className="w-[200px] flex flex-col items-center text-center pb-8">
        <div className="flex flex-col items-center text-[#425563]">
          <ArchitectureIcon style={{ fontSize: 60 }} />
          <span className="mt-2 mb-4 text-[28.8px] font-bold">
            Dual Degrees
          </span>
        </div>
        <div>
          Coordinated program opportunities where students study one or more
          years directly with BU and earn two degrees (e.g. 2+2, 3+1, 4+1).
        </div>
      </div>

      <div className="w-[200px] flex flex-col items-center text-center pb-8">
        <div className="flex flex-col items-center text-[#425563]">
          <LaptopIcon style={{ fontSize: 60 }} />
          <span className="mt-2 mb-4 text-[28.8px] font-bold">
            Online Enablement
          </span>
        </div>
        <div>
          Accelerate your digital learning capabilities by utilizing online
          curricula from BU.
        </div>
      </div>

      <div className="w-[200px] flex flex-col items-center text-center pb-8">
        <div className="flex flex-col items-center text-[#425563]">
          <LanguageIcon style={{ fontSize: 60 }} />
          <span className="mt-2 mb-4 text-[28.8px] font-bold">
            Academic and Research Collaborations
          </span>
        </div>
        <div>
          Opportunities for your faculty to collaborate with BU academic
          counterparts.
        </div>
      </div>
    </div>
  );
};

export default BUPart;
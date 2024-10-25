import React from "react";
import Navbar from "../components/Navbar";
import BUPart from "../components/AsuPart-page";
import Partnership from "../components/PartnerwithusToday";
import FooterComponent from "../components/Footer";
import Autoslider from "../components/Autoslider";

const AsuPartnership = () => {
  return (
    <>

      <div className=" relative h-auto w-auto ">

        <div className="bg-[url('/images/BU4.png')] bg-cover bg-center h-[217.8px] w-full xl1:h-[500px] ">

          <Navbar />
        </div>

        <div className="p-10">
          <div className="flex flex-col items-center ">
            <h1 className="text-5xl font-bold leading-tight  text-[#425563]">
              Our Partnership With BU
            </h1>
            <p className="mb-[17.28px] ">
              Sintana was founded in partnership with Bennett University,
              globally recognized as one of the most innovative universities in
              the world.
            </p>
            <span className="mb-[17.28px] ">
              When you partner with Sintana and BU, your students get direct
              access to the resources and expertise of Bennett University,
              including:
            </span>
          </div>

          <BUPart />

          


        </div>
      </div>

      <Autoslider/>

      <div className="">
        <div className="lg1:flex flex-col-reverse md1:flex sm1:flex">
          <div className="py-[70px] pl-[120px] pr-[270px] w-1/2 inline-block h-auto align-top sm1:w-full sm1:p-6 sm1:h-auto md1:w-full md1:p-8 md1:h-auto lg1:w-full lg1:p-10 lg1:h-auto">
            <h2 className="text-[30px] text-[#425563] font-bold tracking-normal leading-tight">
              Cutting-Edge Innovation and Research
            </h2>
            <p className="text-[15.84px] mt-4">
              BU has consistently been ranked the number one university for
              innovation by US News & World Report. In fact, since 2002, BU has
              had a five-fold growth in research funding (from $100 million to
              more than $650 million) and has become one of the fastest-growing
              research enterprises in the United States.
            </p>
          </div>


          <div className=" bg-[url('/images/home-cutting-edge-photo-scaled.png')] bg-cover w-1/2 inline-block h-[668px] align-top lg1:h-[489.531px] lg1:w-auto lg1:bg-center lg1:bg-cover md1:h-[489.531px]  md1:w-auto md1:bg-center md1:bg-cover sm1:h-[489.531px] sm1:w-auto sm1:bg-center sm1:bg-cover">
            {/* <img src="/images/home-cutting-edge-photo-scaled.jpg" alt="" className='object-cover bg-no-repeat h-[668px]'/> */}

          </div>
        </div>

        <div className="sm1:flex sm1:flex-col md1:flex md1:flex-col lg1:flex lg1:flex-col">

          <div className=" bg-[url('/images/asu-partnership-photo.png')] bg-cover  bg-center bg-no-repeat w-1/2 inline-block h-[1234.7px] align-top lg1:h-[400px] lg1:w-auto lg1:bg-center lg1:bg-cover md1:h-[400px]  md1:w-auto md1:bg-center md1:bg-cover sm1:h-[400px] sm1:w-auto sm1:bg-center sm1:bg-cover ">
            {/* <img src="/images/home-cutting-edge-photo-scaled.jpg" alt="" className='object-cover bg-no-repeat h-[668px]'/> */}

          </div>

          <div className="py-[70px] pl-[120px] pr-[270px] w-1/2 inline-block h-[1234.7px] align-top sm1:p-6 sm1:w-full sm1:h-auto md1:p-8 md1:w-full md1:h-auto lg1:p-10 lg1:w-full lg1:h-auto">
            <h2 className="text-[46.08px] text-[#425563] font-bold tracking-normal leading-tight">
              World-Class Resources and Faculty
            </h2>
            <p className="text-[15.84px] mt-4">
              BU’s 119,000 students – including more than 40,000 online
              students — enjoy access to resources and faculty that can’t be
              found anywhere else, including Ira A. Fulton Schools of
              Engineering, the largest engineering program in the U.S. and the
              W.P. Carey School of Business, one of the top business schools in
              the country and highly ranked for academics, groundbreaking
              research, and student outcomes. BU’s Thunderbird School of Global
              Management is ranked #1 Worldwide for its Master of Global
              Management. Additionally, BU is ranked among the top universities
              in the world for research and teaching. More than 400 BU faculty
              have been conferred by the National Academies of Sciences,
              Engineering and Medicine with “highly prestigious” awards. Among
              BU faculty are Nobel laureates, Pulitzer Prize winners, MacArthur
              Foundation fellows and Fulbright American scholars.
            </p>
          </div>
        </div>
      </div>
      <Partnership/>
      <FooterComponent/>

    </>
  );
};

export default AsuPartnership;
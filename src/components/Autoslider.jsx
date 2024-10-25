import React, { useState, useEffect } from "react";

const Autoslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flag, setFlag] = useState(true);
  const slides = [
    {
      statement:
        "Top 10 globally in business management programs with exceptional faculty and resources",
      by: "— U.S. News & World Report",
    },
    {
      statement:
        "Ranked #1 for innovation, 8 years straight, driving groundbreaking advancements worldwide",
      by: "— U.S. News & World Report",
    },
    {
      statement:
        "Top 100 universities globally for academic excellence, research, and student success",
      by: "— QS World University Rankings",
    },
    {
      statement:
        "Top 1% worldwide for research impact, advancing solutions to global challenges",
      by: "— Times Higher Education",
    },
    {
      statement:
        "#1 for best online undergraduate programs, offering flexible and quality education",
      by: "— U.S. News & World Report",
    },
    {
      statement:
        "Top 50 global universities recognized for their academic and research excellence",
      by: "— Academic Ranking of World Universities",
    },
    {
      statement:
        "Top 5 for graduate employability, ensuring strong career outcomes for students",
      by: "— QS Graduate Employability Rankings",
    },
    {
      statement:
        "World leader in sustainability and environmental impact, driving global climate solutions",
      by: "— Times Higher Education Impact Rankings",
    },
    {
      statement:
        "Top 20 for global leadership and management programs, fostering innovative leaders",
      by: "— Financial Times",
    },
    {
      statement:
        "#1 globally for research and teaching in cutting-edge scientific disciplines",
      by: "— Nature Index",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [slides.length, flag]);

  const moveToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className=" xl:p-[100px] md:p-10 p-6 bg-[#EFEFEF] flex flex-col items-center h-auto">
      <h2 className="text-[46.08px] text-[#425563] font-bold tracking-normal leading-tight">
        About Arizona State University
      </h2>
      <div className="my-8"></div>
      <p className="text-center">
        ASU is a comprehensive public research university, measured not by whom
        it excludes, but by whom it includes and how they succeed; advancing
        research and discovery of public value; and assuming fundamental
        responsibility for the economic, social, cultural and overall health of
        the communities it serves.
      </p>
      <div className="my-6"></div>
      <span className="text-[28.8px] text-[#425563] font-bold tracking-normal leading-tight">
        Unrivaled Recognition
      </span>
      <div className="my-6"></div>
      <div className="w-full max-w-lg mx-auto text-center">
        <div className="relative w-full min-h-64 h-auto">
          {/* slides content */}
          <div className="relative w-full  overflow-hidden h-auto">
            <div
              className="flex transition-transform duration-500 ease-in-out h-auto"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 h-auto flex flex-col justify-center items-center"
                  style={{ minWidth: "100%" }}
                >
                  <h2 className="text-[28.8px] font-semibold italic text-[#425563]">
                    {slide.statement}
                  </h2>
                  <div className="my-6"></div>
                  <span className="text-[#425563] text-[17.5px] font-bold">
                    {slide.by}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* dots below the slides */}
          <div className="mt-6 flex flex-wrap justify-center space-x-3 h-auto">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => {
                  moveToSlide(index);
                  setFlag(!flag);
                }}
                className={`cursor-pointer h-2 w-2 rounded-full mx-2 my-2 ${
                  index === currentSlide ? "bg-black" : "bg-slate-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autoslider;
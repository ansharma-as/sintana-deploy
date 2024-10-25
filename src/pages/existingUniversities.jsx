import React from "react";
import Navbar from "../components/Navbar"
import Partnership from "../components/PartnerwithusToday";
import FooterComponent from "../components/Footer";
import UniversityImprovement from "../components/HelpingUniversitiesImproveandGrow";

const universities = [
    {
      name: "University of British Columbia",
      description: "The University of British Columbia (UBC) is one of Canada's leading research institutions, known for its cutting-edge programs in science, arts, and technology. It has a strong focus on sustainability and global citizenship.",
      image: "/images/uniImages/University of British Columbia.jpeg"
    },
    {
      name: "Monash University",
      description: "Monash University, based in Melbourne, Australia, is a global leader in research and education. With campuses across four continents, Monash excels in disciplines such as medicine, engineering, and business, and is known for its commitment to solving global challenges.",
      image: "/images/uniImages/monash.jpeg"
    },
    {
      name: "National Taiwan University",
      description: "National Taiwan University (NTU) is Taiwan's leading institution, excelling in a range of disciplines including engineering, natural sciences, and business. It is recognized globally for its academic excellence and research output.",
      image: "/images/uniImages/National Taiwan University.jpeg"
    },
    {
      name: "Pennsylvania State University",
      description: "Penn State, a major public research university in the United States, is known for its robust academic programs across diverse fields such as engineering, business, and health sciences. It has a strong alumni network and offers extensive research opportunities.",
      image: "/images/uniImages/Pennsylvania State University.webp"
    },
    {
      name: "University of Birmingham",
      description: "The University of Birmingham, located in the UK, is a prestigious institution known for its strength in engineering, business, and social sciences. It is also home to one of the UK's leading medical schools.",
      image: "/images/uniImages/University of Birmingham.jpeg"
    },
    {
      name: "University of Technology Sydney",
      description: "The University of Technology Sydney (UTS) is a dynamic and innovative university in Australia, renowned for its strong industry connections and practical approach to education, especially in engineering and information technology.",
      image: "/images/uniImages/University of Technology Sydney.jpeg"
    },
    {
      name: "Georgia Institute of Technology",
      description: "Georgia Tech, a leading institution in the United States, is highly respected for its engineering, computing, and business programs. It is a hub for innovation and research, with a focus on technology and sustainability.",
      image: "/images/uniImages/Georgia Institute of Technology.jpeg"
    },
    {
      name: "University of Wollongong",
      description: "The University of Wollongong in Australia is known for its strong emphasis on research and innovation. It offers leading programs in engineering, information technology, and business, with a global network of campuses.",
      image: "/images/uniImages/University of Wollongong.jpeg"
    },
    {
      name: "University of York",
      description: "Located in the UK, the University of York is renowned for its research-intensive approach to education, offering strong programs in the humanities, sciences, and social sciences. It is a member of the prestigious Russell Group of universities.",
      image: "/images/uniImages/University of York.jpeg"
    },
    {
      name: "University of Florida",
      description: "The University of Florida, located in the United States, is one of the nation's top public research universities, known for its strength in agriculture, engineering, and health sciences. It also has a thriving sports culture.",
      image: "/images/uniImages/University of Florida.jpeg"
    },
    {
      name: "Tel Aviv University",
      description: "Tel Aviv University, Israel's largest university, is globally recognized for its research and innovation. It offers leading programs in science, technology, and business, and fosters strong industry collaborations.",
      image: "/images/uniImages/Tel Aviv University.jpeg"
    },
    {
      name: "University of Waikato",
      description: "The University of Waikato in New Zealand is known for its expertise in environmental studies, business, and engineering. It offers a diverse range of programs and is strongly focused on sustainability.",
      image: "/images/uniImages/University of Waikato.jpg"
    },
    {
      name: "Hebrew University of Jerusalem",
      description: "The Hebrew University of Jerusalem is Israel's premier university, known for its strengths in law, medicine, and the natural sciences. It is a leader in research and innovation in the Middle East.",
      image: "/images/uniImages/Hebrew University of Jerusalem.jpeg"
    },
    {
      name: "University of Strathclyde",
      description: "The University of Strathclyde in Scotland is renowned for its engineering and business programs. It has a strong focus on research and is known for its partnerships with industry.",
      image: "/images/uniImages/University of Strathclyde.jpeg"
    },
    {
      name: "UCSI University Malaysia",
      description: "UCSI University in Malaysia is recognized for its strong emphasis on science and technology. It offers a diverse range of programs and is known for its innovation and research output.",
      image: "/images/uniImages/UCSI University Malaysia.jpeg"
    },
    {
      name: "Yeshiva University",
      description: "Yeshiva University in New York City is a leading private institution known for its combination of Jewish studies and academic excellence across diverse fields such as law, business, and social sciences.",
      image: "/images/uniImages/Yeshiva University.jpeg"
    },
    {
      name: "Western Sydney University",
      description: "Western Sydney University in Australia offers innovative programs across various fields, including medicine, social sciences, and the arts. It is known for its strong community ties and global engagement.",
      image: "/images/uniImages/Western Sydney University.jpeg"
    },
    {
      name: "Iowa State University",
      description: "Iowa State University in the United States is a top public research institution, particularly known for its agriculture, engineering, and technology programs. It has a long tradition of innovation and research excellence.",
      image: "/images/uniImages/Iowa State University.jpeg"
    },
    {
      name: "Royal Holloway University of London",
      description: "Royal Holloway, part of the University of London, is a historic institution known for its strong programs in the humanities, social sciences, and performing arts.",
      image: "/images/uniImages/Royal Holloway University of London.jpeg"
    },
    {
      name: "University of Dundee",
      description: "The University of Dundee in Scotland is renowned for its medical and life sciences programs. It is a leader in research and innovation, particularly in the fields of healthcare and digital technology.",
      image: "/images/uniImages/University of Dundee.jpeg"
    },
    {
      name: "University of Essex",
      description: "The University of Essex in the UK is known for its strong emphasis on social sciences, law, and human rights. It has a vibrant international community and a reputation for groundbreaking research.",
      image: "/images/uniImages/University of Essex.jpeg"
    },
    {
      name: "University of Bordeaux",
      description: "The University of Bordeaux in France is a leading institution known for its research in wine studies, biology, and medicine. It is one of the top universities in France and has a strong international presence.",
      image: "/images/uniImages/University of Bordeaux.jpeg"
    },
    {
      name: "Babson College",
      description: "Babson College in the United States is renowned for its leadership in entrepreneurship education. It is consistently ranked among the top business schools in the world for its focus on innovation and start-up culture.",
      image: "/images/uniImages/Babson College.jpeg"
    }
  ];
  

  const UniversityCard = ({ name, description, image }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
  
  const ExistingUniversities = () => {
    return (
      <>
       <div className="bg-[#475965]">
        <Navbar/>
       </div>
       <div>
        <UniversityImprovement />
       </div>
        <div className=" mx-auto p-4">
          <h1 className="text-4xl font-bold mb-6">Our Global Partners</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {universities.map((university, index) => (
              <UniversityCard
                key={index}
                name={university.name}
                description={university.description}
                image={university.image}
              />
            ))}
          </div>
        </div>
        <Partnership/>
        <FooterComponent/>
      </>
      
    );
  };
  
export default ExistingUniversities;

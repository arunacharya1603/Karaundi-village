import React from "react";
import CropDetails from "../components/CropDetails";
import MapDetails from "../components/MapDetails";
import NearMarket from "../components/NearMarket";
import OurProjects from "../components/OurProjects";
import ContactDeveloper from "../components/ContactDeveloper";
import Img from "../assets/sarpanch.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col p-4 md:p-8 relative">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center blur"></div>
        <div className="flex flex-col justify-center items-center md:flex-row ">
          <div className="p-4 md:p-8 z-50">
            <img
              className="rounded-full md:h-80 w-40 md:w-56"
              src={Img}
              alt=""
            />
          </div>
          <div className="p-4 w-1/2 md:p-12 z-50">
            <p className="text-sm font-light italic font-handwriting hover:uppercase hover:text-pink-700 hover:rounded-md hover:indent-8">
              I am Ajit Patel, Sarpanch of Karaundi Village. I am a farmer and
              an entrepreneur who is passionate about technology and
              agriculture. I am working towards the development of my village
              and its people. I have completed my masters' in Hindi from DDU.
            </p>
          </div>
        </div>
      
        <div className="flex justify-center z-50">
          <CropDetails />
        </div>
        <div className="flex flex-col md:flex-row justify-center md:gap-5 gap-10 mt-4">
          <div className="flex justify-center mt-4 md:mt-0 z-50">
            <MapDetails />
          </div>
          <div className="flex justify-center mt-4 md:mt-0 z-50">
            <NearMarket />
          </div>
        </div>

        <div className="flex justify-center mt-4 z-50">
          <OurProjects />
        </div>
        <div className="flex justify-center mt-4 z-50">
          <ContactDeveloper />
        </div>
      </div>
    </>
  );
};

export default Home;

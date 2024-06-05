import React from "react";

const OurProjects = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <p className="text-3xl font-bold text-emerald-500 mb-4 mt-4 box-border shadow-md shadow-emerald-400 drop-shadow-xl rounded-md">
          Our Projects or What we are running Successfully in our village.
        </p>
        <div>
          <ul className="text-xl list-disc hover:list-decimal text-orange-700 ml-6 mb-20 font-handwriting">
            <div className="mt-12">
              <li>Our Village has a school for the childrens.</li>
              <li>We have a Medicine facility in the village.</li>
              <li>We have a playground for the childrens.</li>
              <li>We have a Supply water for the Villagers.</li>
              <li>
                We have installled toilets for every house for the Villagers.
              </li>
              <li>
                We have built roads for routing to every house of this village.
              </li>
            </div>
          </ul>
        </div>

        <p className="text-3xl font-bold text-emerald-500 mb-4 mt-4 box-border shadow-md shadow-emerald-400 drop-shadow-xl rounded-md">
          These are proposed work to be done in the upcoming sessions.
        </p>
        <div>
          <ul className="text-xl list-disc hover:list-decimal text-orange-700 ml-6 mb-20 font-handwriting">
            <div className="mt-12">
              <li>Installing Libraries for the Children.</li>
              <li>Installing Wi-Fi facility.</li>
              <li>Installing road-side lighting system.</li>
              <li>Installing on-Grid solar panels for power supply.</li>
              <li>Education over sensitive topics.</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurProjects;

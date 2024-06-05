import React from "react";

const NearMarket = () => {
  return (
    <>
      <div className="flex flex-col justify-center m-12">
        <p className="text-3xl font-bold text-emerald-500 mb-4 mt-4 box-border shadow-md shadow-emerald-400 drop-shadow-xl rounded-md">
          Near Markets for the village
        </p>
        <ul className="text-xl list-disc hover:list-decimal text-orange-700 ml-6 mb-20 font-handwriting">
          <div className="mt-12">
            <li>Bhaluani 3km east from the village.</li>
            <li>Tekua 3km North from the village.</li>
            <li>Deoria 18km North from the village.</li>
            <li>Barhaj 18km South from the village.</li>
            <li>Pakri Bajar 10km West from the village.</li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default NearMarket;

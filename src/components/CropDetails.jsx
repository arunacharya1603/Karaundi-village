import React from "react";
import { GiHighGrass } from "react-icons/gi";

const CropDetails = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex box-border shadow-sm drop-shadow-2xl rounded-md justify-center items-start">
          <GiHighGrass className="font-bold  cursor-pointer text-3xl text-emerald-700 line-through hover:overline font-handwriting" />
          <p className="font-bold text-3xl cursor-pointer text-emerald-700 line-through hover:overline font-handwriting">
            Crop Details
          </p>
          {/* we have in our village rice, wheats, daal, chana and many more */}
        </div>
        <div className="grid grid-cols-2 mt-20 gap-12 w-[75vw] text-2xl font-handwriting text-amber-700 font-semibold cursor-pointer">
          <div className="box-border hover:bg-orange-100 shadow-md shadow-orange-700 rounded-md drop-shadow-xl">
            <p className="ml-4">RICE</p>
            <p className="text-lg ml-4">These are some Rice grown by the villagers</p>
            <p className="text-sm ml-4">
              <ul className="list-none text-amber-500 hover:list-disc list-outside hover:list-inside">
                <li>Basmati</li>
                <li>Kala namak</li>
                <li>Mansuri</li>
                <li>Sona</li>
              </ul>
            </p>
          </div>
          <div className="box-border hover:bg-orange-100 shadow-md shadow-orange-700 rounded-md drop-shadow-xl">
            <p className="ml-4">WHEAT</p>
            <p className="text-lg ml-4">These are some Wheat grown by the villagers</p>
            <p className="text-sm ml-4">
              <ul className="list-none text-amber-500 hover:list-disc list-outside hover:list-inside">
                <li>650</li>
                <li>Bansi Wheat</li>
                <li>Without Fertilizer</li>
                <li>Kathia Wheat </li>
              </ul>
            </p>
          </div>
          <div className="box-border hover:bg-orange-100 shadow-md shadow-orange-700 rounded-md drop-shadow-xl">
            <p className="ml-4">Chana</p>
            <p className="text-lg ml-4">These are some Rice grown by the villagers</p>
            <p className="text-sm ml-4">
              <ul className="list-none text-amber-500 hover:list-disc list-outside hover:list-inside">
                <li>Desi Chana</li>
                <li>Kabuli Chana</li>
                <li>Kala Chana</li>
                <li>Green Chana</li>
              </ul>
            </p>
          </div>
          <div className="box-border hover:bg-orange-100 shadow-md shadow-orange-700 rounded-md drop-shadow-xl">
            <p className="ml-4">Bajra</p>
            <p className="text-lg ml-4">These are some Rice grown by the villagers</p>
            <p className="text-sm ml-4">
              <ul className="list-none text-amber-500 hover:list-disc list-outside hover:list-inside">
                <li>Bajra</li>
                <li>Kharif Bajra</li>
                <li>Bajri</li>
                <li>Rabi Bajra</li>
              </ul>
            </p>
          </div>
          <div className="box-border hover:bg-orange-100 shadow-md shadow-orange-700 rounded-md drop-shadow-xl">
            <p className="ml-4">Sugar Cane</p>
            <p className="text-lg ml-4">These are some Rice grown by the villagers</p>
            <p className="text-sm ml-4">
              <ul className="list-none text-amber-500 hover:list-disc list-outside hover:list-inside">
                <li>Ribbon Cane</li>
                <li>White Sugarcane</li>
                <li>Red Sugarcane</li>
                <li>Saccharum officinarum</li>
              </ul>
            </p>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default CropDetails;

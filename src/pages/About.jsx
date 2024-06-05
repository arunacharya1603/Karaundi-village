import React from 'react';

const About = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">About Our Village</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Location & Connectivity</h2>
          <p className="text-gray-700">
            Our village is located in Deoria district, Block Bhaluani, Post Thakur Deoria. It connects with Rudrapur, Barhaj, Deoria, and Bhaluani, which are vital for resources such as hospitals, schools, employment, and more.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Population</h2>
          <p className="text-gray-700">
            The village has a population of around 2500 people, all of whom are Hindus.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Education</h2>
          <p className="text-gray-700">
            Our village runs a well-functioning government school that not only provides quality education but also offers a playground for the youth.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Infrastructure</h2>
          <p className="text-gray-700">
            The village has a water supply tank and ponds serving as water reservoirs. It is well-connected by good roads and includes services like a mobile care center and a cyber cafe.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Community & Services</h2>
          <p className="text-gray-700">
            The village conducts Panchayat meetings on a weekly basis, ensuring active community participation and governance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

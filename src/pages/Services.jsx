import React from 'react';

const Services = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">Our Services</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Education</h2>
          <p className="text-gray-700">
            Our village is proud to host a well-functioning government school that provides quality education to the children. The school also features a playground where youth can engage in sports and other recreational activities.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Healthcare</h2>
          <p className="text-gray-700">
            The village is well-connected to nearby towns like Rudrapur and Deoria, which provide access to essential healthcare services, including hospitals and clinics, ensuring that medical help is always within reach.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Infrastructure</h2>
          <p className="text-gray-700">
            We have robust infrastructure, including well-maintained roads, a reliable water supply system with tanks and ponds serving as water reservoirs. The infrastructure supports both the daily needs and the overall development of the village.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Technology</h2>
          <p className="text-gray-700">
            The village offers modern technological services such as a mobile care center and a cyber cafe, providing residents with access to essential tech support and internet services.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Community Services</h2>
          <p className="text-gray-700">
            Our community is active and engaged, with weekly Panchayat meetings that ensure everyone's voice is heard. These meetings foster a strong sense of community and collaborative decision-making.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

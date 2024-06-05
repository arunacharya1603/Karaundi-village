import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="md:text-3xl font-bold text-red-600 mb-6">Oops! Something Went Wrong</h1>
      <p className="text-lg text-gray-700 mb-8">Please try again later.</p>
      <Link to='/' className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">
        Go Back to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;

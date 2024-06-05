import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-700 mb-4 sm:mb-0">
            © 2024 Arun. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/gallary" className="text-gray-700 hover:text-gray-900">
              Gallery
            </Link>
            <Link to="#" className="text-gray-700 hover:text-gray-900">
              Achievements
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

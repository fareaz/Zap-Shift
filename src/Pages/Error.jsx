import React from "react";
import { Link } from "react-router";
import ErrorI from '../assets/18499954_bubble_gum200_89 1.png';

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">

        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <img 
            src={ErrorI}  // <-- replace with your image
            alt="Error Illustration" 
            className="w-48 md:w-56"
          />
        </div>

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Error 404
        </h1>

        {/* BUTTON */}
        <Link 
          to="/"  // <-- replace with your route
          className="inline-block px-5 py-2 bg-lime-500 text-sm rounded-md font-medium text-gray-800 hover:bg-lime-600 transition"
        >
          Go Home
        </Link>

      </div>
    </div>
  );
};

export default Error;

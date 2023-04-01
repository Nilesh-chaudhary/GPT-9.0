import React from "react";
import Loader from "./Loader";

const test = () => {
  return (
    <>
      <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
        {form.photo ? (
          <img
            src={form.photo}
            alt={form.prompt}
            className="w-full h-full object-contain"
          />
        ) : (
          <img
            src={preview}
            alt="preview"
            className="w-9/12 h-9/12 object-contain opacity-40"
          />
        )}
        {generatingImg && (
          <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
            <Loader />
          </div>
        )}
      </div>
      <div className="mt-5 flex gap-5">
        <button
          type="button"
          onClick={generateImage}
          className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {generatingImg ? "Generating..." : "Generate"}
        </button>
      </div>
    </>
  );
};

export default test;

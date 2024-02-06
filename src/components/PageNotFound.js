import React from 'react';
import NotFound from 'assets/svg/not.svg';

function PageNotFound() {
  return (
    <div className="gradient bg-gray-900 text-white min-h-screen w-full flex items-center">
      <div className="w-[90%] h-full mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full md:w-5/12 text-center p-4">
          <img src={NotFound} alt="Not Found" />
        </div>
        <div className="w-full md:w-7/12 text-center md:text-left p-4">
          <div className="text-6xl font-medium">404</div>
          <div className="text-xl md:text-3xl font-medium mb-4">
            Oops. This page has gone missing.
          </div>
          <div className="text-lg mb-8">
            You may have mistyped the address or the page may have moved.
          </div>
          <a href="/dashboard/home" className="border border-white rounded p-4">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;

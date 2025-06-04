import React from 'react';
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-purple-50 to-indigo-900 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full flex items-center justify-between">
        {/* Left Side - Logo and Text */}
        <div className="flex-1 space-y-8">
          {/* Logo */}
          <div className="w-32 h-32 relative">
            <div className="w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center border-4 border-red-600">
              {/* Coat of Arms - Simplified representation */}
              <div className="text-center">
                <div className="w-16 h-12 bg-red-600 mx-auto mb-2 relative">
                  {/* Ship silhouette */}
                  <div className="absolute bottom-0 w-full h-6 bg-red-800"></div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-red-800"></div>
                </div>
                <div className="h-4 bg-blue-600 w-full"></div>
                <div className="text-xs text-red-600 font-bold mt-1">NSBM</div>
              </div>
            </div>
          </div>
          
          {/* Name */}
          <div className="space-y-2">
            <h1 className="text-6xl font-light text-gray-800 leading-tight">
              shasheen
            </h1>
            <h2 className="text-6xl font-light text-gray-800 leading-tight">
              indusara
            </h2>
          </div>
        </div>
        
        {/* Right Side - Profile Photo */}
        <div className="flex-1 flex justify-end">
          <div className="relative">
            {/* White circular background */}
            <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center">
              {/* Profile photo container */}
              <div className="w-72 h-72 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-green-100 flex items-center justify-center relative">
                  {/* Placeholder for actual photo - wooden background with person */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-30"></div>
                  <div className="relative z-10 w-32 h-32 bg-amber-600 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-amber-800 rounded-full flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">SI</div>
                    </div>
                  </div>
                  {/* Green plant elements */}
                  <div className="absolute top-4 left-8 w-12 h-12 bg-green-400 rounded-full opacity-60"></div>
                  <div className="absolute top-8 right-12 w-8 h-8 bg-green-500 rounded-full opacity-40"></div>
                  <div className="absolute bottom-12 left-12 w-6 h-6 bg-green-600 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
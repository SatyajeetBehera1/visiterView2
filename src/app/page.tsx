"use client";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "lib/redux/store";
import { ResumeForm } from "components/ResumeForm";
import { Resume } from "components/Resume";
import { MobileResume } from "components/Resume/MobileIndex"; 
import { useButtonContext } from "components/ButtonContext";
import { useMediaQuery } from "react-responsive";

export default function Create() {
  const { activeButton } = useButtonContext();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isPreview, setIsPreview] = useState(false); 

  const handlePreviewClick = () => {
    setIsPreview(true);
  };

  const handleCloseModal = () => {
    setIsPreview(false);
  };

  return (
    <Provider store={store}>
      <main className="relative h-full w-full overflow-hidden bg-gray-50">
        <div className="grid grid-cols-3 md:grid-cols-6 ">
          <div className="col-span-3">
            <ResumeForm activeButton={activeButton} />
          </div>
          {isMobile ? (
            <div className="col-span-3 flex justify-center items-center">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handlePreviewClick} 
              >
                Preview
              </button>
            </div>
          ) : (
            <div className="col-span-3">
              <Resume />
            </div>
          )}
        </div>
        {isPreview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg overflow-hidden w-full max-w-lg relative">
              <div className="p-4">
                <MobileResume />
              </div>
              <div className="absolute top-2 right-2">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </Provider>
  );
}

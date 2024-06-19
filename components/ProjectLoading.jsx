import React from 'react';

const ProjectLoading = () => {
  return (
    <div>
      <div className="card p-6 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-7 w-32 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-6 w-32 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="h-5 bg-gray-200 rounded-md w-full animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-6 w-32 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="h-5 bg-gray-200 rounded-md w-full animate-pulse"></div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="w-auto h-48 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-auto h-48 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-auto h-48 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-auto h-48 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-auto h-48 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-auto h-48 bg-gray-200 rounded-md animate-pulse"></div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-6 ">
            <div className="h-8 w-32 bg-gray-200 rounded-md animate-pulse"></div>

            <div className="h-8 w-32 bg-gray-200 rounded-md animate-pulse"></div>
          </div>
          <div className="h-8 w-32 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLoading;

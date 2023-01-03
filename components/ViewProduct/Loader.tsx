import React from "react";

const Loader = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-10 py-4 sm:py-10 min-h-full animate-pulse">
        <div className="md:col-span-2 xl:col-span-2">
          <div className="w-full max-w-[474px] h-[474px] bg-slate-200 rounded-md" />
        </div>
        <div className="justify-center md:col-span-2 xl:col-span-4 grid xl:grid-cols-2 gap-10">
          <div className="w-[300px] sm:w-full order-2 xl:order-1">
            <div className="flex items-center justify-between pt-3">
              <div>
                <div className="w-20 h-2 bg-slate-200 rounded-md" />
                <div className="w-36 h-3 bg-slate-200 rounded-md mt-2" />
              </div>
              <div className="w-10 h-2 bg-slate-200 rounded-md" />
            </div>
            <div className="w-[max-content] mt-2 grid grid-cols-5 gap-1">
              <div className="w-8 h-8 bg-slate-200 rounded-full" />
              <div className="w-8 h-8 bg-slate-200 rounded-full" />
              <div className="w-8 h-8 bg-slate-200 rounded-full" />
              <div className="w-8 h-8 bg-slate-200 rounded-full" />
              <div className="w-8 h-8 bg-slate-200 rounded-full" />
            </div>
            <hr className="my-4" />
            <div className="w-[100%] h-2 bg-slate-200 rounded-md" />
            <div className="w-[95%] h-2 bg-slate-200 rounded-md mt-2" />
            <div className="w-[90%] h-2 bg-slate-200 rounded-md mt-2" />
            <div className="w-[97%] h-2 bg-slate-200 rounded-md mt-2" />
            <div className="w-[100%] h-2 bg-slate-200 rounded-md mt-2" />
            <hr className="my-4" />
            <div className="w-10 h-2 bg-slate-200 rounded-md" />
            <div className="w-36 h-9 bg-slate-200 rounded-md mt-2" />
            <div className="flex gap-2 items-center">
              <div className="w-24 h-9 bg-slate-200 rounded-md mt-3" />
              <div className="w-24 h-9 bg-slate-200 rounded-md mt-3" />
            </div>
          </div>

          <div className="w-[300px] sm:w-full order-1 xl:order-2 bg-white drop-shadow-2xl rounded-md p-4 h-[max-content] mt-2 xl:mt-0">
            <div className="w-20 h-4 bg-slate-200 rounded-md m-auto" />
            <hr className="py-2 mt-4" />
            <div className="flex justify-between mb-5">
              <div className="w-20 h-4 mr-2 bg-slate-200 rounded-md" />
              <div className="w-full h-4 mr-2 bg-slate-200 rounded-md" />
            </div>
            <div className="flex justify-between mb-5">
              <div className="w-20 h-4 mr-2 bg-slate-200 rounded-md" />
              <div className="w-full h-4 mr-2 bg-slate-200 rounded-md" />
            </div>
            <div className="flex justify-between">
              <div className="w-20 h-4 mr-2 bg-slate-200 rounded-md" />
              <div className="w-full h-4 mr-2 bg-slate-200 rounded-md" />
            </div>
            <hr className="py-2 mt-4" />
            <div className="flex justify-between">
              <div className="w-20 h-4 mr-2 bg-slate-200 rounded-md" />
              <div className="w-full h-4 mr-2 bg-slate-200 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;

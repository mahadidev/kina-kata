import React from "react";

const Loader = ({ rows = 1 }: { rows?: number }) => {
  return (
    <div className="animate-pulse">
      <div className="w-56 h-4 rounded-md bg-slate-200" />
      <div>
        {Array.from(Array(rows), (e, i) => (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-start gap-6 pt-4"
            key={i}
          >
            <div className="W-full group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-200 aspect-none h-80">
                <div className="w-full h-full bg-slate-200" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <div className="w-24 h-2 rounded-md bg-slate-200" />
                  <div className="w-full flex items-center space-x-1 mt-2">
                    <div className="w-32 h-2 rounded-md bg-slate-200" />
                    <div className="w-8 h-2 rounded-md bg-slate-200" />
                  </div>
                </div>
                <div className="w-6 h-2 rounded-md bg-slate-200" />
              </div>
            </div>
            <div className="W-full group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-200 aspect-none h-80">
                <div className="w-full h-full bg-slate-200" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <div className="w-24 h-2 rounded-md bg-slate-200" />
                  <div className="w-full flex items-center space-x-1 mt-2">
                    <div className="w-32 h-2 rounded-md bg-slate-200" />
                    <div className="w-8 h-2 rounded-md bg-slate-200" />
                  </div>
                </div>
                <div className="w-6 h-2 rounded-md bg-slate-200" />
              </div>
            </div>
            <div className="W-full group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-200 aspect-none h-80">
                <div className="w-full h-full bg-slate-200" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <div className="w-24 h-2 rounded-md bg-slate-200" />
                  <div className="w-full flex items-center space-x-1 mt-2">
                    <div className="w-32 h-2 rounded-md bg-slate-200" />
                    <div className="w-8 h-2 rounded-md bg-slate-200" />
                  </div>
                </div>
                <div className="w-6 h-2 rounded-md bg-slate-200" />
              </div>
            </div>
            <div className="W-full group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-200 aspect-none h-80">
                <div className="w-full h-full bg-slate-200" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <div className="w-24 h-2 rounded-md bg-slate-200" />
                  <div className="w-full flex items-center space-x-1 mt-2">
                    <div className="w-32 h-2 rounded-md bg-slate-200" />
                    <div className="w-8 h-2 rounded-md bg-slate-200" />
                  </div>
                </div>
                <div className="w-6 h-2 rounded-md bg-slate-200" />
              </div>
            </div>
            <div className="W-full group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-200 aspect-none h-80">
                <div className="w-full h-full bg-slate-200" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <div className="w-24 h-2 rounded-md bg-slate-200" />
                  <div className="w-full flex items-center space-x-1 mt-2">
                    <div className="w-32 h-2 rounded-md bg-slate-200" />
                    <div className="w-8 h-2 rounded-md bg-slate-200" />
                  </div>
                </div>
                <div className="w-6 h-2 rounded-md bg-slate-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;

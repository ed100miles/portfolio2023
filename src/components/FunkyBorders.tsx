import { ReactNode } from "react";

export const FunkyBorders = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-wrap w-full min-h-full md:max-w-6xl relative">
    <div className="bg-gradient-to-br from-slate-400 rounded-tl-2xl h-[30vh] w-[30vh] -z-1 relative">
      <div className="bg-slate-900 h-[85%] w-[85%] bottom-0 right-0 absolute"></div>
    </div>
    <div className="absolute h-[30vh] w-[30vh] bg-gradient-to-tl rounded-br-2xl from-slate-400 bottom-0 right-0">
      <div className="bg-slate-900 h-[85%] w-[85%]"></div>
    </div>
    <div
      className="absolute w-5/6 md:max-w-5xl h-5/6 z-10  flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>
  </div>
)

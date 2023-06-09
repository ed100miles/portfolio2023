import { ReactNode } from "react";

export const FunkyBorders = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-wrap w-full min-h-full md:max-w-6xl relative">
    <div className="bg-gradient-to-br from-malachite from-7% via-islamGreen via-15% to-vampire to-50% rounded-tl-xl h-[30vmin] w-[30vmin] -z-1 relative">
      <div className="bg-vampire h-[95%] w-[95%] bottom-0 right-0 absolute rounded-md"></div>
    </div>
    <div className="absolute h-[30vmin] w-[30vmin] bg-gradient-to-tl rounded-br-xl from-malachite from-7% via-islamGreen via-15% to-vampire to-50% bottom-0 right-0">
      <div className="bg-vampire h-[95%] w-[95%] rounded-md"></div>
    </div>
    <div
      className="absolute w-5/6 md:max-w-5xl h-5/6 z-10  flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>
  </div>
)

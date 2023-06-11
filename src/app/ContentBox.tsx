"use client"

import { useState } from "react"
import Typewriter from 'typewriter-effect';
import { useInterval, useWindowSize } from 'usehooks-ts'
import { contentMap } from "./Content";
import type { ContentMap } from "./Content";

export const ContentBox = () => {
  const [selectedContent, setSelectedContent] = useState<keyof ContentMap>('welcome')
  const { width, height } = useWindowSize()

  const Nav = () => {
    return (
      <div className="h-fit lg:h-2/3 w-full md:w-1/4 pt-5 md:pt-0 p-3">
        <div className="pb-4 font-semibold md:text-xl text-islamGreen">Directory</div>
        <div className="h-fit w-full text-xs md:text-base text-islamGreen space-y-2">
          {
            Object.entries(contentMap).map((entry) => {
              const key = entry[0] as keyof ContentMap
              const value = entry[1]
              return <div key={key} className={"text-xs md:text-base"}>
                <button
                  className={`hover:underline ${selectedContent === key ? 'text-malachite' : 'text-islamGreen'}`}
                  onClick={() => setSelectedContent(key)}
                >{selectedContent === key && "> "}{value.title}</button>
              </div>
            })
          }
        </div>
      </div>
    )
  }

  const ContentText = ({ selected }: { selected: keyof ContentMap }) => {
    const [maskHeight, setMaskHeight] = useState(100)
    const [maskWidth, setMaskWidth] = useState(100)

    const getInterval = () => {
      if (maskHeight == 100) return 1000
      if (maskHeight + maskWidth <= 0) return null
      return 10
    }

    useInterval(() => {
      if (maskHeight > 0) { setMaskHeight(maskHeight - 1) }
      else { setMaskWidth(maskWidth - 2) }
    }, getInterval())

    return (
      <div className={`h-[60vh] w-full lg:h-2/3 min-w-[50vw] ${width > height && "min-w-[50vw]"
        } lg:border-r-[1px] pl-1 pr-1 md:pr-5 pb-3 border-malachite`}>
        <div className={`text-2xl md:text-6xl h-1/6 pt-2 md:pb-20 text-islamGreen ${
          width > height && "pb-10"}`}>
          <Typewriter
            options={{
              strings: contentMap[selected].title,
              autoStart: true,
              cursor: "",
              delay: 50
            }}
          />
        </div>
        <div
          className={'relative z-10 h-5/6 pr-3 text-xs md:text-base scrollbar-thumb-malachite scrollbar-track-islamGreen scrollbar-thin scrollbar-corner-vampire'}
          style={{ overflow: maskHeight + maskWidth > 0 ? 'hidden' : 'auto' }}
        >
          <>{contentMap[selected].content}</>
          {maskHeight + maskWidth > 0 && <div
            className={'absolute inset-x-0 bottom-0 right-0 w-full border-t-[1px] border-malachite bg-vampire'}
            style={{
              height: `${maskHeight}%`,
              width: `${maskWidth}%`
            }}
          />}
        </div>
      </div>
    )
  }

  return (
    <div className={`flex ${height > width && "flex-wrap"
      } h-full w-full justify-between md:items-center`}>
      <ContentText selected={selectedContent} />
      <Nav />
    </div>
  )
}

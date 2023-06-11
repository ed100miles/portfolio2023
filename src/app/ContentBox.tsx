"use client"

import { useEffect, useState } from "react"
import Typewriter from 'typewriter-effect';
import { useInterval } from 'usehooks-ts'
import { contentMap } from "./Content";
import type { ContentMap } from "./Content";

export const ContentBox = () => {
  const [selectedContent, setSelectedContent] = useState<keyof ContentMap>('welcome')
  const Nav = () => {
    return (
      <div className="w-full h-[60vh] lg:h-2/3 lg:w-1/4">
        <div className="pb-4 font-semibold text-xl text-islamGreen">Directory</div>
        <div className="h-fit w-full text-islamGreen space-y-2">
          {
            Object.entries(contentMap).map((entry) => {
              const key = entry[0] as keyof ContentMap
              const value = entry[1]
              return <div key={key} >
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
    const [os, setOS] = useState("")

    useEffect(() => {
      setOS(window.navigator.userAgent)
    }, [])

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
      <div className="w-full h-[60vh] lg:h-2/3 lg:w-4/6 pr-8 lg:border-r-[1px] border-malachite pl-1">
        <div className=" text-2xl md:text-6xl h-1/6 pb-12 text-islamGreen">
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
          className={`relative z-10 h-5/6 ${os.toLowerCase().includes("iphone") ? 'overflow-scroll' : 'overflow-auto'
            } scrollbar-thumb-malachite scrollbar-track-islamGreen scrollbar-thin scrollbar-corner-vampire pr-2`}
          style={{ overflow: maskHeight + maskWidth > 0 ? 'hidden' : 'auto' }}
        >
          <div className="w-11/12">
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
      </div>
    )
  }

  return (
    <div className="h-full w-full flex items-center justify-evenly flex-wrap sm:min-h-fit">
      <ContentText selected={selectedContent} />
      <Nav />
    </div>
  )
}

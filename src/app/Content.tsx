"use client"

import { useState } from "react"
import Typewriter from 'typewriter-effect';
import { useInterval } from 'usehooks-ts'

interface Content {
  title: string,
  content: string[]
}

interface ContentMap {
  welcome: Content,
  about: Content,
  skills: Content,
  experience: Content
}

const contentMap: ContentMap = {
  welcome: {
    title: 'Welcome.',
    content: ["SITE UNDER ACTIVE CONSTRUCTION. I started yesterday, should be done next week. Please check back soon!",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptates unde fuga, facere ex, in earum perspiciatis eligendi tenetur pariatur quisquam impedit atque rem veniam nisi aspernatur quibusdam laborum reiciendis."]
  },
  about: {
    title: 'About Me.',
    content: ["SITE UNDER ACTIVE CONSTRUCTION. I started yesterday, should be done next week. Please check back soon!",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptates unde fuga, facere ex, in earum perspiciatis eligendi tenetur pariatur quisquam impedit atque rem veniam nisi aspernatur quibusdam laborum reiciendis."]
  },
  skills: {
    title: 'Key Skills.',
    content: ["SITE UNDER ACTIVE CONSTRUCTION. I started yesterday, should be done next week. Please check back soon!",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptates unde fuga, facere ex, in earum perspiciatis eligendi tenetur pariatur quisquam impedit atque rem veniam nisi aspernatur quibusdam laborum reiciendis."]
  },
  experience: {
    title: 'Experience.',
    content: ["SITE UNDER ACTIVE CONSTRUCTION. I started yesterday, should be done next week. Please check back soon!",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptates unde fuga, facere ex, in earum perspiciatis eligendi tenetur pariatur quisquam impedit atque rem veniam nisi aspernatur quibusdam laborum reiciendis."]
  },
}

export const Content = () => {
  const [selectedContent, setSelectedContent] = useState<keyof ContentMap>('welcome')

  const Nav = () => {
    return (
      <div className="w-full h-[60vh] lg:h-2/3 lg:w-1/4">
        <div className="pb-4 font-semibold text-lg">Directory</div>
        <div className="h-fit w-full">
          {
            Object.entries(contentMap).map((entry) => {
              const key = entry[0] as keyof ContentMap
              const value = entry[1]
              return <div key={key}>
                <button
                  className="pb-2 hover:underline"
                  onClick={() => setSelectedContent(key)}
                >{value.title}</button>
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
      if(maskHeight>0){setMaskHeight(maskHeight - 1)}
      else {setMaskWidth(maskWidth-2)}
    }, getInterval())

    return (
      <div className="w-full h-[60vh] lg:h-2/3 lg:w-4/6 pr-8 lg:border-r-[1px] border-malachite pl-1">
        <div className="text-6xl pb-8">
          <Typewriter
            options={{
              strings: contentMap[selected].title,
              autoStart: true,
              cursor: "",
              delay: 50
            }}
          />
        </div>
        <div className="relative -z-10">
          {contentMap[selected].content.map(
            (chunk, idx) => <div key={idx}>{chunk}<br /><br /></div>)
          }
          <div
            className={'absolute inset-x-0 bottom-0 right-0 w-full border-t-[1px] border-malachite bg-vampire'}
            style={{
              height: `${maskHeight}%`,
              width: `${maskWidth}%`
            }}
          />
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

import Image from "next/image"
import { FunkyBorders } from "@/components/FunkyBorders"

export default function Home() {
  return (
    <main className="flex min-h-screen min-h-xs min-w-screen bg-slate-900 justify-center p-5">
      <FunkyBorders>
        <div className="flex flex-col justify-evenly items-center h-full">
        <Image
          src={'/me.svg'}
          alt='hmm... there should be a picture here...'
          width={'300'}
          height={'300'}
        />
        <div
          className="w-2/3 text-center"
        >{"Hold on, I've literally just started building this site today, and I've spent most of my time making those corner things"}</div>
        </div>
      </FunkyBorders>
    </main>
  )
}

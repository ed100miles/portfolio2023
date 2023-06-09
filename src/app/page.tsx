import { FunkyBorders } from "@/components/FunkyBorders"

export default function Home() {
  return (
    <main className="flex min-h-screen min-h-xs min-w-screen bg-vampire justify-center p-5 text-malachite font-mono text-sm md:text-base">
      <FunkyBorders>
        <div className="flex flex-col justify-evenly items-center h-full">
        <div
          className="w-2/3 text-center"
        >{"Hold on, I've literally just started building this site today, and I've spent most of my time making those corner things..."}</div>
        </div>
      </FunkyBorders>
    </main>
  )
}

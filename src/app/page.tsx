import { FunkyBorders } from "@/components/FunkyBorders"
import { ContentBox } from "./ContentBox"

export default function Home() {
  return (
    <main className="flex h-screen w-screen bg-vampire justify-center p-5 text-malachite font-mono text-sm lg:text-base">
      <FunkyBorders>
        <ContentBox/>
      </FunkyBorders>
    </main>
  )
}

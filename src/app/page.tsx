import { FunkyBorders } from "@/components/FunkyBorders"
import { Content } from "./Content"

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen bg-vampire justify-center p-5 text-malachite font-mono text-sm lg:text-base">
      <FunkyBorders>
        <Content/>
      </FunkyBorders>
    </main>
  )
}

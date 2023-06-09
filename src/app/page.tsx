import { FunkyBorders } from "@/components/FunkyBorders"

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen bg-vampire justify-center p-5 text-malachite font-mono text-sm lg:text-base">
      <FunkyBorders>
        <div className="h-full w-full flex items-center justify-evenly flex-wrap sm:min-h-fit">
          <div className="w-full h-[60vh] lg:h-2/3 lg:w-4/6 border border-malachite">

          </div>
          <div className="w-full h-[60vh] lg:h-2/3 lg:w-1/4">
            <div className="pb-2 font-semibold text-lg">Directory</div>
            <div className="h-fit w-full border-l-[1px] border-malachite pl-1">
              <div>a</div>
              <div>b</div>
              <div>c</div>
            </div>
          </div>
        </div>
      </FunkyBorders>
    </main>
  )
}

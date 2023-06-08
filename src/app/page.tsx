import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={'/me.svg'}
        alt='hmm... there should be a picture here...'
        width={'500'}
        height={'500'}
      />
      <div>{"Hold on, I've literally just started building this site today..."}</div>
    </main>
  )
}

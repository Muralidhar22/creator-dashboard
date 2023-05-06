import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import SignIn from '@/components/SignIn'

const monteserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`md:grid md:grid-cols-[0.8fr_1.5fr] min-h-screen ${monteserrat.className}`}
    >
     <div className="hidden md:flex bg-black items-center justify-center">
        <h1 className="text-white font-bold text-5xl">
          Board.
        </h1>
      </div>
     <div className="flex items-center justify-center">
      <SignIn />
     </div>
    </main>
  )
}

import Link from 'next/link'
import Image from 'next/image'

import logo from '../public/vercel.svg'

function TheHeader() {
  return (
    <header className="w-full">
      <div className="flex justify-between max-w-screen-2xl mx-auto w-full relative">
        <div className="bg-violet-900/50 rounded-b-lg p-4">
          <Link href={'/'}>
            <Image src={logo} width={66} height={128} alt="Logo" />
          </Link>
        </div>
        <div>
          <div className="flex space-x-1">
            <Link href={'https://discord.gg'} target="_blank" className="bg-violet-900/50 rounded-b p-2">
              <span className="i-logos:discord-icon w-6 h-6"></span>
            </Link>
            <Link href={'https://twitter.com'} target="_blank" className="bg-violet-900/50 rounded-b p-2">
              <span className="i-logos:twitter w-6 h-6"></span>
            </Link>
            <Link href={'https://www.instagram.com'} target="_blank" className="bg-violet-900/50 rounded-b p-2">
              <span className="i-simple-icons:instagram w-6 h-6"></span>
            </Link>
            <Link href={'https://www.youtube.com/'} target="_blank" className="bg-violet-900/50 rounded-b p-2">
              <span className="i-logos:youtube-icon w-6 h-6"></span>
            </Link>
            <Link href={'https://opensea.io/'} target="_blank" className="bg-violet-900/50 rounded-b p-2">
              <span className="i-simple-icons:opensea w-6 h-6"></span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TheHeader

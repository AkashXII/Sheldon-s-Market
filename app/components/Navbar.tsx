'use client'
import { Noto_Serif } from 'next/font/google'
import Link from "next/link";
import Image from "next/image";

const noto = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] })

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-stone-200 px-8 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <h1 className={`text-xl text-green-800 font-bold ${noto.className}`}>
        Sheldon's Market
      </h1>

      {/* Links */}
      <div className="flex items-center gap-8">
        <a href="/" className={`text-sm font-medium text-stone-800 hover:text-green-700 transition-colors ${noto.className}`}>Shop</a>
        <a href="#" className={`text-sm text-stone-500 hover:text-green-700 transition-colors ${noto.className}`}>Our Story</a>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
<input
  type="text"
  placeholder="Search..."
  className={`text-sm border-b border-stone-300 outline-none py-1 px-2 focus:border-green-700 transition-colors bg-transparent ${noto.className}`}
/>
<Link href="/cart" className="text-stone-600 hover:text-green-700 transition-colors">
  <Image src="/images/trolley.png" alt="cart" width={20} height={20} />
</Link>
      </div>

    </nav>
  )
}
'use client'
import { signIn } from "next-auth/react";
import { Noto_Serif, Work_Sans } from "next/font/google";
import Link from "next/link";

const noto = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const work = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-10 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
      }}
    >
      
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className={`text-3xl font-bold tracking-tight text-stone-800 ${noto.className}`}>
          Sheldon's Market
        </h1>
        <p className="text-stone-500 italic mt-1">Fresh from the farm, straight to you.</p>
      </div>

      {/* Card */}
      <div className="h-full bg-white border border-stone-200 rounded-2xl shadow-sm p-10">
        <h2 className={`text-2xl font-bold text-stone-800 text-center ${noto.className}`}>
          Welcome Back
        </h2>
        <p className="text-stone-400 text-center mt-1 text-sm">
          Please enter your details to continue.
        </p>

        <div className="mt-8 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-stone-500 uppercase tracking-widest">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Sheldon@market.com"
              className="w-full border-b border-stone-300 py-2 text-sm outline-none focus:border-green-700 transition-colors bg-transparent"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-stone-500 uppercase tracking-widest">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border-b border-stone-300 py-2 text-sm outline-none focus:border-green-700 transition-colors bg-transparent"
            />
          </div>
        </div>
<div className="mt-8 flex flex-col gap-3">

  {/* Normal login */}
  <button className="w-full bg-green-950 text-white py-2 rounded-xl font-medium hover:bg-green-900 duration-300 transition-colors">
    Login to the Market
  </button>

  {/* Google login */}
  <button
    onClick={() => signIn("google")}
    className="w-full flex items-center justify-center gap-3 border border-stone-200 rounded-xl py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors"
  >
    <img src="https://www.google.com/favicon.ico" className="w-4 h-4" />
    Continue with Google
  </button>

</div>
        <div className="border-t border-stone-100 mt-8 pt-6 text-center">
          <p className="text-stone-400 text-sm">Don't have an account?</p>

<Link href="/signup" className="text-green-800 font-medium hover:underline mt-1 inline-block">
  Join us →
</Link>
        </div>
      </div>

      {/* Footer */}
      <p className="text-stone-400 text-xs uppercase tracking-widest mt-10">
        Organic First · Farm Direct
      </p>
    
    </div>
  );
}
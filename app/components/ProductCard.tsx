import { noto } from '../lib/fonts'
import Link from "next/link";
import Image from "next/image";
type Product = {
  id: number
  name: string
  description: string
  price: number
  unit: string
  image_url: string
  category: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden group cursor-pointer">
      <div className="relative overflow-hidden h-52">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="pt-4 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className={`font-bold text-stone-800 pl-2 text-base ${noto.className}`}>{product.name}</h3>
            <p className="text-stone-400 text-xs uppercase pl-2 tracking-widest mt-0.5">{product.unit}</p>
          </div>
<button className="text-stone-600 hover:text-green-700 transition-colors pr-2">
  <Image src="/images/add.png" alt="add" width={20} height={20} />
</button>
        </div>
        <p className={`text-stone-800 pl-2 font-semibold mt-2 ${noto.className}`}>₹{product.price}</p>
      </div>
    </div>
  )
}
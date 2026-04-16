import db from '../lib/db'
import ProductCard from '../components/ProductCard'
import { noto } from '../lib/fonts'

type Product = {
  id: number
  name: string
  description: string
  price: number
  unit: string
  image_url: string
  category: string
}

export default async function Home() {
  const [rows] = await db.query('SELECT * FROM products')
  const products = rows as Product[]

  return (
    <main className="px-8 py-10">

      {/* Hero */}
      <div className="py-10 flex items-end justify-between border-b border-stone-200 mb-5">
        <h2 className={`text-6xl font-bold text-stone-800 leading-tight ${noto.className}`}>
          From Earth <br />
          <span className="italic font-normal">to Your Table.</span>
        </h2>
        <p className="text-stone-500 max-w-xs text-sm leading-relaxed">
          Curating the finest seasonal harvests from local independent farms. Real food, grown with integrity.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-3 mb-6">
        {['All Harvests', 'Vegetables', 'Leafy Greens', 'Fruits'].map((tab) => (
          <button
            key={tab}
            className={`px-2 py-1 rounded-full text-sm border border-stone-300 text-stone-500 hover:bg-green-900 hover:text-white hover:border-stone-500 transition-colors first:bg-stone-900 first:text-white first:border-stone-800 ${noto.className}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </main>
  )
}
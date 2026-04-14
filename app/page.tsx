import db from './lib/db'
import 'dotenv/config'

export default async function Home() {
  const [rows] = await db.query('SELECT * FROM products')
  const products = rows as any[]

  return (
    <main className="min-h-screen bg-amber-50 p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-6">🌾 Harvest Barn</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl p-4 shadow">
            <h2 className="font-bold text-green-700">{product.name}</h2>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <p className="text-amber-600 font-bold mt-2">₹{product.price} / {product.unit}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
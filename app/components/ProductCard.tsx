type Product = {
  id: number
  name: string
  description: string
  price: number
  unit: string
  image_url: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-amber-100 h-40 flex items-center justify-center text-6xl">
        🥦
      </div>
      <div className="p-4">
        <h2 className="font-bold text-green-800 text-lg">{product.name}</h2>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-amber-600 font-bold text-lg">₹{product.price}/{product.unit}</span>
          <button className="bg-green-700 text-white text-sm px-4 py-2 rounded-xl hover:bg-green-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
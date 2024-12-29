import { ShoppingBag } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  amazonUrl: string;
}

const products: Product[] = [
  {
    id: '1',
    title: 'Blue Yeti USB Microphone',
    description: 'Professional-grade USB microphone for crystal-clear audio recording',
    price: '$129.99',
    imageUrl: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=300',
    amazonUrl: '#'
  },
  {
    id: '2',
    title: 'Ring Light with Stand',
    description: '10" LED ring light with adjustable tripod stand and phone holder',
    price: '$39.99',
    imageUrl: 'https://m.media-amazon.com/images/I/31kvRk5JEZL._SY300_SX300_QL70_FMwebp_.jpg',
    amazonUrl: '#'
  },
  {
    id: '3',
    title: 'Video Editing Software',
    description: 'Easy-to-use video editing software for beginners',
    price: '$79.99',
    imageUrl: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80&w=300',
    amazonUrl: '#'
  }
];

const RelatedProducts = () => {
  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        Recommended Equipment
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">{product.price}</span>
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition-colors"
                >
                  View on Amazon
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
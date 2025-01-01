import { ShoppingBag } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  amazonUrl: string;
  blogId: number;
}

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!Array.isArray(products)) {
    console.error("Invalid products data:", products);
    return null;
  }

  return (
    <section
      className={`mt-12 pt-8 border-t ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      }`}
    >
      <h2
        className={`text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        <ShoppingBag
          className={`w-5 h-5 sm:w-6 sm:h-6 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        />
        Recommended Equipment
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`rounded-lg shadow-md overflow-hidden border p-4 ${
              isDark
                ? 'bg-gray-800 border-gray-700 text-white'
                : 'bg-white border-gray-200 text-gray-900'
            }`}
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />
            <div>
              <h3 className="font-semibold mb-2">{product.title}</h3>
              <p
                className={`text-sm mb-3 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{product.price}</span>
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    isDark
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                  }`}
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
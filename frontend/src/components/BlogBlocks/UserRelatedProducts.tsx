import { useEffect, useState } from "react";
import { Button } from "../ui/Button";

export const UserRelatedProducts = ({
  onChange,
}: {
  onChange: (products: any) => void;
}) => {
  const [products, setProducts] = useState([
    {
      title: 'Blue Yeti USB Microphone',
      description: 'Professional-grade USB microphone for crystal-clear audio recording',
      price: '$129.99',
      imageUrl: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=300',
      amazonUrl: '#'
    },
    {
      title: 'Ring Light with Stand',
      description: '10" LED ring light with adjustable tripod stand and phone holder',
      price: '$39.99',
      imageUrl: 'https://m.media-amazon.com/images/I/31kvRk5JEZL._SY300_SX300_QL70_FMwebp_.jpg',
      amazonUrl: '#'
    },
    {
      title: 'Video Editing Software',
      description: 'Easy-to-use video editing software for beginners',
      price: '$79.99',
      imageUrl: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80&w=300',
      amazonUrl: '#'
    }
  ]);
  const [preview, setPreview] = useState(false);

  const updateProduct = (index: number, field: string, value: string) => {
    const updatedProducts:any = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  useEffect(() => {
    // Call `onChange` only when the `products` state changes
    onChange(products);
  }, [products, onChange]);

  return (
    <section className="pt-8 border-t border-gray-700">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
        Recommended Equipment
      </h2>

      {!preview ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden border border-gray-700 p-4"
            >
              <label className="block mb-2 text-sm font-medium">Image URL</label>
              <input
                type="text"
                value={product.imageUrl}
                onChange={(e) =>
                  updateProduct(index, "imageUrl", e.target.value)
                }
                placeholder="Enter image link"
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 mb-4"
              />
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={`Product ${index + 1}`}
                  className="w-full h-48 object-cover mb-4"
                />
              )}

              <label className="block mb-2 text-sm font-medium">Heading</label>
              <input
                type="text"
                value={product.title}
                onChange={(e) => updateProduct(index, "title", e.target.value)}
                placeholder="Enter product title"
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 mb-4"
              />

              <label className="block mb-2 text-sm font-medium">Subheading</label>
              <textarea
                value={product.description}
                onChange={(e) =>
                  updateProduct(index, "description", e.target.value)
                }
                placeholder="Enter product description"
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 mb-4"
              ></textarea>

              <label className="block mb-2 text-sm font-medium">Amount</label>
              <input
                type="text"
                value={product.price}
                onChange={(e) => updateProduct(index, "price", e.target.value)}
                placeholder="Enter amount"
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 mb-4"
              />

              <label className="block mb-2 text-sm font-medium">Product Link</label>
              <input
                type="text"
                value={product.amazonUrl}
                onChange={(e) =>
                  updateProduct(index, "amazonUrl", e.target.value)
                }
                placeholder="Enter product link"
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <img
                src={product.imageUrl || "https://via.placeholder.com/300"}
                alt={product.title || `Product ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {product.title || "Product Title"}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {product.description || "Product Description"}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price || "$0.00"}
                  </span>
                  <a
                    href={product.amazonUrl || "#"}
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
      )}
      <br />
      <Button onClick={() => setPreview(!preview)} variant="primary">
        {preview ? "Edit Products" : "Show Preview"}
      </Button>
    </section>
  );
};
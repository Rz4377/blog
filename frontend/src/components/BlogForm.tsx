import { useState, useCallback } from "react";
import { BlogFormHeader } from "./BlogBlocks/BlogFormHeader";
import { EditableFooter } from "./BlogBlocks/EditableFooter";
import { UserRelatedProducts } from "./BlogBlocks/UserRelatedProducts";
import { Button } from "./ui/Button";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export function BlogForm() {
  const isDark = true;

  // Collect data from children
  const [headerData, setHeaderData] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [footerData, setFooterData] = useState({});
  const [accessToken, setAccessToken] = useState("");

  // Memoize callback functions
  const handleHeaderChange = useCallback((data: any) => {
    setHeaderData(data);
  }, []);

  const handleProductsChange = useCallback((products: any) => {
    setRelatedProducts(products);
  }, []);

  const handleFooterChange = useCallback((data: { authorName: string; authorTitle: string; imageUrl: string }) => {
    setFooterData(data);
  }, []);

  const handleSubmit = async () => {
    const blogData = {
      header: headerData,
      products: relatedProducts,
      footer: footerData,
      accessToken:accessToken
    };
  
    try {  
      // Send the POST request using Axios
      const response = await axios.post(`${BACKEND_URL}/api/blogs`, blogData, {
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.status !== 201) {
        throw new Error("Failed to submit blog form.");
      }
  
      alert("Blog form submitted successfully!");
    } catch (error:any) {
      console.error("Error submitting blog form:", error.message);
      alert("Failed to submit blog form. Please try again.");
    }
  };
  return (
    <article
      className={`max-w-4xl mx-auto px-4 py-6 sm:py-8 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Blog Header */}
      <BlogFormHeader onChange={handleHeaderChange} />

      {/* User Related Products */}
      <UserRelatedProducts onChange={handleProductsChange} />

      {/* Editable Footer */}
      <EditableFooter isDark={true} onChange={handleFooterChange} />
      <br />
      {/* Submit Button */}
      <div className="pt-8 border-t border-gray-700 flex flex-col items-center space-y-4">
      {/* Input Field */}
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Enter your access token"
          className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          onChange={(e:any)=>setAccessToken(e.target.value)}
        />
        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
          🔒
        </span>
      </div>

      {/* Submit Button */}
      <Button onClick={handleSubmit} variant="primary">
        Submit Blog
      </Button>
    </div>
    </article>
  );
}

export default BlogForm;
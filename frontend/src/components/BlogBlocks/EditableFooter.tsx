import { useState } from "react";

export const EditableFooter = ({ isDark }: { isDark: boolean }) => {
  const [authorName, setAuthorName] = useState("John Doe");
  const [authorTitle, setAuthorTitle] = useState("Content Creator & YouTube Expert");
  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
  );

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imagePreview = URL.createObjectURL(file);
      setImageUrl(imagePreview);
    }
  };

  return (
    <footer
      className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t ${
        isDark ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Author Info */}
        <div className="flex items-center space-x-4">
          {/* Image Upload */}
          <div>
            <img
              src={imageUrl}
              alt="Author"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-2"
            />
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Upload Author Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium">
              Author Name
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className={`w-full px-3 py-1 border rounded-lg ${
                isDark
                  ? "bg-gray-800 text-white border-gray-600"
                  : "bg-gray-100 text-gray-900 border-gray-300"
              }`}
            />
            <label className="block text-sm mt-2 mb-1 font-medium">
              Author Title
            </label>
            <input
              type="text"
              value={authorTitle}
              onChange={(e) => setAuthorTitle(e.target.value)}
              className={`w-full px-3 py-1 border rounded-lg ${
                isDark
                  ? "bg-gray-800 text-white border-gray-600"
                  : "bg-gray-100 text-gray-900 border-gray-300"
              }`}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
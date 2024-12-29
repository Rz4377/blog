import React , { useState } from 'react';

export function BlogCreationPage() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [sections, setSections] = useState<{ text: string }[]>([]);
  const [preview, setPreview] = useState(false);

  const handleAddParagraph = () => {
    setSections([...sections, { text: '' }]);
  };

  const handleUpdateParagraph = (index: number, text: string) => {
    const updatedSections = [...sections];
    updatedSections[index].text = text;
    setSections(updatedSections);
  };

  const handlePreview = () => {
    setPreview(!preview);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {!preview ? (
        <>
          <h1 className="text-2xl font-bold mb-6">Create Blog Post</h1>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Content</label>
            {sections.map((section, index) => (
              <textarea
                key={index}
                value={section.text}
                onChange={(e) => handleUpdateParagraph(index, e.target.value)}
                placeholder={`Paragraph ${index + 1}`}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            ))}
            <button
              onClick={handleAddParagraph}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add Paragraph
            </button>
          </div>
          <button
            onClick={handlePreview}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Preview
          </button>
        </>
      ) : (
        <div className="bg-gray-100 rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded preview"
              className="w-full h-[200px] sm:h-[400px] object-cover rounded-lg mb-8"
            />
          )}
          {sections.map((section, index) => (
            <p key={index} className="text-lg text-gray-700 mb-4">
              {section.text}
            </p>
          ))}
          <button
            onClick={handlePreview}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-4"
          >
            Back to Edit
          </button>
        </div>
      )}
    </div>
  );
}
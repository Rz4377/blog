import{ BlogFormHeader } from "./BlogBlocks/BlogFormHeader"
import{ EditableFooter } from "./BlogBlocks/EditableFooter"
import {UserRelatedProducts}  from "./BlogBlocks/UserRelatedProducts"

export function BlogForm() {
  const isDark = true;
  
  return (
    <article
      className={`max-w-4xl mx-auto px-4 py-6 sm:py-8 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <BlogFormHeader />
      <UserRelatedProducts />
      <EditableFooter isDark={true} />
    </article>
  );
}

export default BlogForm;
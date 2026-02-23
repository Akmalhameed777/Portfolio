import { getBlogPosts } from '@/lib/api'
import BlogCard from '@/components/BlogCard'

export default async function BlogPage() {
  let blogPosts = []

  try {
    const response = await getBlogPosts()
    blogPosts = response.data || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development and technology.
        </p>
      </div>

      {blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post: any) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="bg-gray-50 rounded-lg p-12">
            <h2 className="text-2xl font-bold mb-4">No Blog Posts Yet</h2>
            <p className="text-gray-600 mb-6">
              Add your blog posts in Strapi to display them here.
            </p>
            <a
              href="http://localhost:1337/admin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
            >
              Open Strapi Admin
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

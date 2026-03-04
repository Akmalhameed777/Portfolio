import { getProject } from '@/lib/api'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'

const projectImages: { [key: string]: string } = {
  'mail-management-jwt': 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
  'car-service-reservation': 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
  'college-admissions-system': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  let project: any = null
  try {
    const response = await getProject(params.slug)
    project = response.data?.[0] || null
  } catch (error) {
    console.error('Error fetching project:', error)
  }

  const { title, description, tech_stack, github_url, live_url } = project.attributes
  const techArray = tech_stack ? (typeof tech_stack === 'string' ? tech_stack.split(',').map((t: string) => t.trim()) : tech_stack) : []
  const imageUrl = projectImages[params.slug] || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/projects" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
        <FaArrowLeft className="mr-2" />
        Back to Projects
      </Link>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden shadow-2xl">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        {techArray.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {techArray.map((tech: string, index: number) => (
                <span key={index} className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">{tech}</span>
              ))}
            </div>
          </div>
        )}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
        </div>
        <div className="flex flex-wrap gap-4 mb-12">
          {github_url && (
            <a href={github_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
              <FaGithub className="mr-2" size={20} />
              View on GitHub
            </a>
          )}
          {live_url && (
            <a href={live_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
              <FaExternalLinkAlt className="mr-2" size={18} />
              View Live Site
            </a>
          )}
        </div>
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
          <p className="text-gray-600 mb-6">I'm always open to discussing new projects and opportunities.</p>
          <Link href="/contact" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

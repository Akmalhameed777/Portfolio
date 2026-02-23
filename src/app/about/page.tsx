import { getAbout } from '@/lib/api'
import Image from 'next/image'
import { getStrapiMedia } from '@/lib/utils'

export default async function AboutPage() {
  let aboutData: any = null

  try {
    const response = await getAbout()
    aboutData = response.data
  } catch (error) {
    console.error('Error fetching about data:', error)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {aboutData ? (
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          {aboutData.attributes.profile_image && (
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-64 rounded-full overflow-hidden">
                <Image
                  src={getStrapiMedia(aboutData.attributes.profile_image) || '/placeholder.jpg'}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Bio */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              {aboutData.attributes.bio}
            </p>
          </div>

          {/* Skills */}
          {aboutData.attributes.skills && aboutData.attributes.skills.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {aboutData.attributes.skills.map((skill: string, index: number) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition"
                  >
                    <span className="font-semibold text-gray-800">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {aboutData.attributes.experience && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Experience</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 whitespace-pre-line">
                  {aboutData.attributes.experience}
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto text-center py-12">
          <div className="bg-gray-50 rounded-lg p-12">
            <h2 className="text-2xl font-bold mb-4">No About Content Yet</h2>
            <p className="text-gray-600 mb-6">
              Add your about information in Strapi to display it here.
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

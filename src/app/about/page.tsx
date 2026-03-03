import { getAbout } from '@/lib/api'

export default async function AboutPage() {
  let aboutData: any = null

  try {
    const response = await getAbout()
    aboutData = response.data
  } catch (error) {
    console.error('Error fetching about data:', error)
  }

  const skillsArray = aboutData?.attributes?.skills
    ? typeof aboutData.attributes.skills === 'string'
      ? aboutData.attributes.skills.split(',').map((s: string) => s.trim())
      : aboutData.attributes.skills
    : []

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      {aboutData ? (
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              {aboutData.attributes.bio}
            </p>
          </div>
          {skillsArray.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skillsArray.map((skill: string, index: number) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition">
                    <span className="font-semibold text-gray-800">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto text-center py-12">
          <div className="bg-gray-50 rounded-lg p-12">
            <h2 className="text-2xl font-bold mb-4">No About Content Yet</h2>
            <p className="text-gray-600 mb-6">Add your about information in Strapi to display it here.</p>
          </div>
        </div>
      )}
    </div>
  )
}
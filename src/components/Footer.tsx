import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Akmal Hameed</h3>
            <p className="text-gray-400">
              Full-stack developer building modern web applications.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Akmalhameed777" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/akmal-hameed" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="mailto:akmalhamid143@gmail.com" 
                className="text-gray-400 hover:text-white transition"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">
              akmalhamid143@gmail.com
            </p>
            <p className="text-gray-400 mb-4">
              Toronto, Ontario, Canada
            </p>
            <a 
              href="mailto:akmalhamid143@gmail.com" 
              className="bg-primary-600 px-4 py-2 rounded-lg hover:bg-primary-700 transition inline-block"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Akmal Hameed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
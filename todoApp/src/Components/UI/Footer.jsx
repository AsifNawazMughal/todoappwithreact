import { NavLink } from "react-router-dom"
import { FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa"

export const Footer = () => {
  return (
    <div className="bg-gray-800 w-full">
      <footer className="flex flex-col px-8 py-4 justify-center items-center max-w-7xl mx-auto text-white">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center w-full font-bold my-4">
          <div className="header-logo mb-4 md:mb-0 text-center md:text-left">
            React Apps By Asif Nawaz
          </div>
          <div className="header-links">
            <ul className="flex items-center space-x-6 md:flex-row md:space-y-0 md:space-x-8 text-lg">
              <li className="hover:text-red-500 transition-colors duration-300 hover:scale-110">
                <NavLink to="https://www.youtube.com/@iamteacher33" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={32} />
                </NavLink>
              </li>
              <li className="hover:text-blue-500 transition-colors duration-300 hover:scale-110">
                <NavLink to="https://www.linkedin.com/in/asifnawaz33" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={32} />
                </NavLink>
              </li>
              <li className="hover:text-purple-500 transition-colors duration-300 hover:scale-110">
                <NavLink to="https://github.com/asifnawazmughal" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={32} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-center md:text-left">&copy; 2024 React-Apps. All rights reserved.</p>
      </footer>
    </div>
  )
}
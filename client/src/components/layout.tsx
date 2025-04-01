import React from 'react';
import { Link } from 'wouter';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import CursorGradient from './CursorGradient';
import { Oswald, Work_Sans } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${workSans.variable}`}>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <CursorGradient />
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
          <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
            <Link href="/" className="text-white font-bold text-lg sm:text-xl font-oswald group">
              <span className="text-primary group-hover:animate-pulse transition-all">Phleo</span>Delly
            </Link>
            <nav className="hidden md:flex space-x-4 sm:space-x-6 font-work">
              <Link
                href="/"
                className="text-white hover:text-primary transition-colors hover:scale-105 transform inline-block text-sm sm:text-base"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-primary transition-colors hover:scale-105 transform inline-block text-sm sm:text-base"
              >
                About Me
              </Link>
              <Link
                href="/skills"
                className="text-white hover:text-primary transition-colors hover:scale-105 transform inline-block text-sm sm:text-base"
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-primary transition-colors hover:scale-105 transform inline-block text-sm sm:text-base"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-primary transition-colors hover:scale-105 transform inline-block text-sm sm:text-base"
              >
                Contact
              </Link>
              <Link
                href="/cv"
                className="bg-blue-500 hover:bg-blue-400 transition-colors hover:scale-105 transform inline-block text-sm sm:text-base px-3 py-1 rounded-md"
              >
                CV
              </Link>
            </nav>
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transform font-work text-sm sm:text-base"
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile navigation */}
            <div className="md:hidden flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-3 py-1.5 rounded-md transition-colors font-work text-sm"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </header>

        {/* Mobile bottom navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm md:hidden flex justify-around py-2 sm:py-3 border-t border-gray-800 z-50">
          <Link href="/" className="flex flex-col items-center text-xs">
            <span className="material-icons text-lg sm:text-xl">home</span>
            <span>Home</span>
          </Link>
          <Link href="/about" className="flex flex-col items-center text-xs">
            <span className="material-icons text-lg sm:text-xl">person</span>
            <span>About</span>
          </Link>
          <Link href="/skills" className="flex flex-col items-center text-xs">
            <span className="material-icons text-lg sm:text-xl">code</span>
            <span>Skills</span>
          </Link>
          <Link href="/projects" className="flex flex-col items-center text-xs">
            <span className="material-icons text-lg sm:text-xl">work</span>
            <span>Projects</span>
          </Link>
          <Link href="/contact" className="flex flex-col items-center text-xs">
            <span className="material-icons text-lg sm:text-xl">mail</span>
            <span>Contact</span>
          </Link>
        </nav>

        <main className="flex-grow pt-16 sm:pt-20 pb-16 md:pb-0">{children}</main>

        <footer className="bg-black py-6 sm:py-8 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <Link href="/" className="text-white font-bold text-lg sm:text-xl font-oswald group">
                  <span className="text-primary group-hover:animate-pulse transition-all">Phleo</span>Delly
                </Link>
              </div>
              <div className="flex space-x-4 sm:space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                >
                  <FaGithub size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                >
                  <FaLinkedin size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                >
                  <FaTwitter size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                >
                  <FaInstagram size={18} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 text-center text-gray-400 text-xs sm:text-sm">
              <p>© {new Date().getFullYear()} Phleo Delly. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 
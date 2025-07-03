'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code, Brain, Server, Mail } from 'lucide-react'
import { scrollToElement } from '@/lib/utils'
import { NavigationItem } from '@/types'

const navigationItems: NavigationItem[] = [
  { label: 'Ana Sayfa', href: 'hero' },
  { label: 'Hakkımda', href: 'about' },
  { label: 'Hizmetler', href: 'services' },
  { label: 'Projeler', href: 'projects' },
  { label: 'İletişim', href: 'contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    scrollToElement(href)
    setIsMenuOpen(false)
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('hero')}
          >
            <div className="relative">
              <Brain className="h-8 w-8 text-primary-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">mrtbt.com</span>
              <span className="text-xs text-gray-600">aAi Yavuzer</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="btn-primary flex items-center space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>İletişim</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('contact')}
                className="mx-4 mt-2 btn-primary flex items-center justify-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>İletişim</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
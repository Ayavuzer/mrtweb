'use client'

import { Mail, Phone, MapPin, Brain, ExternalLink, ChevronUp } from 'lucide-react'
import { scrollToElement } from '@/lib/utils'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (section: string) => {
    scrollToElement(section)
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { label: 'Ana Sayfa', href: 'hero' },
    { label: 'Hakkımda', href: 'about' },
    { label: 'Hizmetler', href: 'services' },
    { label: 'Projeler', href: 'projects' },
    { label: 'İletişim', href: 'contact' }
  ]

  const services = [
    'AI Otomasyon Tasarlama',
    'Kubernetes & Container',
    'DevOps & System Engineering',
    'Sistem Mimarisi',
    'Cloud Migration',
    'Performance Optimization'
  ]

  const contactInfo = {
    address: 'Yüksekalan mah. 519 sok no: daire: 10 Muratpaşa / Antalya',
    email: 'info@mrtbt.com',
    phone: '0850 840 94 12'
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="h-8 w-8 text-primary-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">mrtbt.com</h3>
                <p className="text-gray-400 text-sm">aAi Yavuzer</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              15 yıllık tecrübe ile AI otomasyon, DevOps ve sistem mühendisliği 
              alanında uzman çözümler sunuyoruz. Modern teknolojilerle işinizi dönüştürün.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">15+</span>
              </div>
              <div>
                <div className="text-sm font-semibold">Yıl Deneyim</div>
                <div className="text-gray-400 text-xs">Güvenilir Hizmet</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Hızlı Erişim</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-gray-300 hover:text-primary-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Hizmetlerimiz</h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="text-gray-300 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>İletişime Geç</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Footer */}
      <div className="container-max py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} mrtbt.com - Tüm hakları saklıdır.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Yavuzer tarafından tasarlanmış ve geliştirilmiştir.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Güvenilir Hizmet</span>
              <span>•</span>
              <span>7/24 Destek</span>
              <span>•</span>
              <span>Hızlı Çözüm</span>
            </div>
            
            <button
              onClick={handleScrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
            >
              <span className="text-sm">Yukarı Çık</span>
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </footer>
  )
}
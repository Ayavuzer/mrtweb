'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Brain, Cpu, Cloud, Code, ArrowRight } from 'lucide-react'
import { scrollToElement } from '@/lib/utils'

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const rotatingTexts = [
    'AI Otomasyon',
    'DevOps',
    'Kubernetes',
    'Sistem Mimarisi'
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [rotatingTexts.length])

  const handleCTAClick = () => {
    scrollToElement('contact')
  }

  const handleLearnMoreClick = () => {
    scrollToElement('about')
  }

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-secondary-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-primary-300 rounded-full opacity-30 animate-bounce-slow"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-secondary-100/20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-600">
                <Brain className="h-6 w-6" />
                <span className="font-semibold">15 Yıllık Tecrübe</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-primary-600">
                  {rotatingTexts[currentText]}
                </span>
                <br />
                <span>Uzmanı</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl">
                15 yıllık tecrübe ile yapay zeka, Kubernetes ve sistem mühendisliği çözümleri. 
                Modern teknolojilerle işinizi dönüştürün.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-primary-600" />
                </div>
                <span className="text-gray-700 font-medium">AI Otomasyon</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Cpu className="h-5 w-5 text-primary-600" />
                </div>
                <span className="text-gray-700 font-medium">Kubernetes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Cloud className="h-5 w-5 text-primary-600" />
                </div>
                <span className="text-gray-700 font-medium">DevOps</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-primary-600" />
                </div>
                <span className="text-gray-700 font-medium">Sistem Mimarisi</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleCTAClick}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Projeleriniz için İletişime Geçin</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button 
                onClick={handleLearnMoreClick}
                className="btn-secondary flex items-center space-x-2"
              >
                <span>Daha Fazla Bilgi</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Visual Content */}
          <div className={`hidden lg:block ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative">
              {/* Central hub */}
              <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full shadow-2xl mx-auto flex items-center justify-center">
                <Brain className="h-16 w-16 text-white" />
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                {/* AI Element */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Brain className="h-8 w-8 text-primary-600" />
                </div>

                {/* Kubernetes Element */}
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Cpu className="h-8 w-8 text-primary-600" />
                </div>

                {/* DevOps Element */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Cloud className="h-8 w-8 text-primary-600" />
                </div>

                {/* System Architecture Element */}
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Code className="h-8 w-8 text-primary-600" />
                </div>
              </div>

              {/* Connecting lines */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-primary-600" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" className="text-primary-400" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" className="text-primary-300" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToElement('about')}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
        >
          <ChevronDown className="h-6 w-6 text-primary-600" />
        </button>
      </div>
    </section>
  )
}
'use client'

import { useState, useEffect, useRef } from 'react'
import { User, Award, Clock, Target, Brain, Server, Cloud, Code2 } from 'lucide-react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    technologies: 0
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finalCounters = {
      experience: 15,
      projects: 100,
      clients: 50,
      technologies: 25
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Start counter animation
          Object.keys(finalCounters).forEach((key) => {
            const finalValue = finalCounters[key as keyof typeof finalCounters]
            let current = 0
            const increment = finalValue / 100
            const timer = setInterval(() => {
              current += increment
              if (current >= finalValue) {
                current = finalValue
                clearInterval(timer)
              }
              setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
            }, 20)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const expertise = [
    {
      icon: Brain,
      title: 'AI Otomasyon',
      description: 'Yapay zeka tabanlı süreç otomasyonu ve machine learning çözümleri geliştirme',
      skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision']
    },
    {
      icon: Server,
      title: 'Kubernetes',
      description: 'Container orchestration ve mikroservis mimarisi tasarım ve yönetimi',
      skills: ['Container Orchestration', 'Microservices', 'Service Mesh', 'Helm Charts']
    },
    {
      icon: Cloud,
      title: 'DevOps',
      description: 'CI/CD pipeline kurulumu ve bulut altyapı yönetimi',
      skills: ['CI/CD', 'Infrastructure as Code', 'Monitoring', 'Cloud Architecture']
    },
    {
      icon: Code2,
      title: 'Sistem Mimarisi',
      description: 'Ölçeklenebilir ve yüksek performanslı sistem tasarımı',
      skills: ['System Design', 'Performance Optimization', 'Scalability', 'Security']
    }
  ]

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Profile */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-600">
                <User className="h-6 w-6" />
                <span className="font-semibold">Hakkımda</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                15 Yıllık Deneyim ile <span className="text-primary-600">Teknoloji Liderliği</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Merhaba! Ben <strong>Yavuzer</strong>, aAi Yavuzer&apos;in kurucusuyum. 
                15 yıldır AI otomasyon tasarlama, Kubernetes ve sistem mühendisliği 
                alanlarında uzmanım. Modern teknolojilerle işletmelerin dijital 
                dönüşümünü gerçekleştiriyorum.
              </p>
            </div>

            {/* Professional Image Placeholder */}
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-2xl mx-auto lg:mx-0 flex items-center justify-center">
                <User className="h-24 w-24 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">DevOps & Sistem Mühendisi</h3>
                  <p className="text-gray-600">Modern altyapı ve süreç optimizasyonu</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">15 Yıllık Tecrübe</h3>
                  <p className="text-gray-600">Kapsamlı sistem mimarisi deneyimi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Stats */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
                <div className="text-3xl font-bold text-primary-600">{counters.experience}+</div>
                <div className="text-gray-600 font-medium">Yıl Deneyim</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
                <div className="text-3xl font-bold text-primary-600">{counters.projects}+</div>
                <div className="text-gray-600 font-medium">Proje</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
                <div className="text-3xl font-bold text-primary-600">{counters.clients}+</div>
                <div className="text-gray-600 font-medium">Müşteri</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
                <div className="text-3xl font-bold text-primary-600">{counters.technologies}+</div>
                <div className="text-gray-600 font-medium">Teknoloji</div>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Uzmanlık Alanları</h3>
              <div className="grid gap-4">
                {expertise.map((item, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {item.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
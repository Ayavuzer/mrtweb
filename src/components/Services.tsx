'use client'

import { useState, useEffect, useRef } from 'react'
import { Brain, Server, Cloud, Code2, ArrowRight, CheckCircle } from 'lucide-react'
import { Service } from '@/types'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const services: Service[] = [
    {
      id: 'ai-automation',
      title: 'AI Otomasyon Tasarlama',
      description: 'Yapay zeka tabanlı süreç otomasyonu ve machine learning çözümleri ile işletmenizin verimliliğini artırın.',
      icon: 'Brain',
      features: [
        'Yapay zeka entegrasyonu',
        'Süreç otomasyonu',
        'Machine learning çözümleri',
        'Veri analizi ve görselleştirme',
        'Chatbot ve sanal asistan geliştirme',
        'Predictive analytics'
      ]
    },
    {
      id: 'kubernetes',
      title: 'Kubernetes & Container Orchestration',
      description: 'Mikroservis mimarisi tasarımı ve Kubernetes ile container orchestration çözümleri.',
      icon: 'Server',
      features: [
        'Kubernetes cluster yönetimi',
        'Microservices architecture',
        'Container optimization',
        'Service mesh implementasyonu',
        'Helm chart geliştirme',
        'Auto-scaling konfigürasyonu'
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & System Engineering',
      description: 'CI/CD pipeline kurulumu, infrastructure as code ve monitoring çözümleri ile süreçlerinizi optimize edin.',
      icon: 'Cloud',
      features: [
        'CI/CD pipeline kurulumu',
        'Infrastructure as Code',
        'Monitoring ve logging',
        'Cloud migration',
        'Security best practices',
        'Performance optimization'
      ]
    },
    {
      id: 'system-architecture',
      title: 'Sistem Mimarisi',
      description: 'Ölçeklenebilir ve yüksek performanslı sistem tasarımı ile gelecek ihtiyaçlarınızı karşılayın.',
      icon: 'Code2',
      features: [
        'Cloud architecture design',
        'Scalability planning',
        'Performance optimization',
        'Security architecture',
        'Database design',
        'Load balancing strategies'
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getIcon = (iconName: string) => {
    const icons = {
      Brain: Brain,
      Server: Server,
      Cloud: Cloud,
      Code2: Code2
    }
    return icons[iconName as keyof typeof icons] || Brain
  }

  const handleServiceClick = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId)
  }

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className={`text-center mb-16 space-y-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2 text-primary-600">
            <Server className="h-6 w-6" />
            <span className="font-semibold">Hizmetlerimiz</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Teknoloji <span className="text-primary-600">Çözümlerimiz</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            15 yıllık deneyimimizle, en son teknolojileri kullanarak işletmeniz için 
            kapsamlı çözümler sunuyoruz. Her proje, özel ihtiyaçlarınız doğrultusunda tasarlanır.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon)
            const isActive = activeService === service.id
            
            return (
              <div
                key={service.id}
                className={`card p-8 cursor-pointer transition-all duration-300 ${
                  isActive ? 'ring-2 ring-primary-500 shadow-2xl' : ''
                } ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleServiceClick(service.id)}
              >
                <div className="space-y-6">
                  {/* Service Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 mt-1">{service.description}</p>
                      </div>
                    </div>
                    <ArrowRight 
                      className={`h-6 w-6 text-primary-600 transition-transform duration-300 ${
                        isActive ? 'transform rotate-90' : ''
                      }`}
                    />
                  </div>

                  {/* Service Features */}
                  <div className={`space-y-4 transition-all duration-300 ${
                    isActive ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Özellikler:</h4>
                      <div className="grid gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <button className="w-full btn-primary">
                        Detaylı Bilgi Al
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Projeniz için hangi teknolojiye ihtiyacınız var?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              15 yıllık deneyimimizle, ihtiyaçlarınızı analiz edip en uygun teknolojiyi seçerek 
              başarılı projeler gerçekleştiriyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                Ücretsiz Danışmanlık
              </button>
              <button className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Tüm Hizmetleri Görüntüle
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
'use client'

import { useState, useEffect, useRef } from 'react'
import { Briefcase, ExternalLink, Github, TrendingUp, Users, Clock, Star } from 'lucide-react'
import { Project } from '@/types'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      id: 'ai-chatbot',
      title: 'AI Müşteri Hizmetleri Chatbot',
      description: 'Doğal dil işleme teknolojisi ile geliştirilmiş akıllı müşteri hizmetleri chatbot sistemi.',
      technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'React'],
      imageUrl: '/api/placeholder/400/300',
      results: [
        'Müşteri memnuniyeti %85 artış',
        'Yanıt süresinde %90 iyileştirme',
        'Operasyonel maliyet %60 azalma'
      ]
    },
    {
      id: 'microservices-platform',
      title: 'Mikroservis E-ticaret Platformu',
      description: 'Kubernetes tabanlı ölçeklenebilir mikroservis mimarisi ile e-ticaret platformu.',
      technologies: ['Go', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
      imageUrl: '/api/placeholder/400/300',
      results: [
        'Sistem performansı %300 artış',
        'Ölçeklenebilirlik %500 iyileştirme',
        'Uptime %99.9 güvenilirlik'
      ]
    },
    {
      id: 'devops-automation',
      title: 'DevOps Süreç Otomasyonu',
      description: 'CI/CD pipeline ve infrastructure as code ile tam otomatik deployment sistemi.',
      technologies: ['Jenkins', 'Terraform', 'AWS', 'Ansible', 'GitLab'],
      imageUrl: '/api/placeholder/400/300',
      results: [
        'Deployment süresinde %80 azalma',
        'Hata oranında %95 düşüş',
        'Geliştirici verimliliği %200 artış'
      ]
    },
    {
      id: 'cloud-migration',
      title: 'Bulut Migrasyonu Projesi',
      description: 'Legacy sistemlerin modern cloud mimarisine geçiş projesi.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CloudFormation'],
      imageUrl: '/api/placeholder/400/300',
      results: [
        'Altyapı maliyeti %40 azalma',
        'Sistem güvenliği %150 artış',
        'Bakım maliyeti %50 düşüş'
      ]
    },
    {
      id: 'ml-analytics',
      title: 'Machine Learning Analitik Sistemi',
      description: 'Büyük veri analizi ve tahmine dayalı analitik için ML sistemi.',
      technologies: ['Python', 'Spark', 'Hadoop', 'TensorFlow', 'Kafka'],
      imageUrl: '/api/placeholder/400/300',
      results: [
        'Tahmin doğruluğu %92 başarı',
        'Veri işleme hızı %400 artış',
        'İş zekası %250 iyileştirme'
      ]
    },
    {
      id: 'iot-monitoring',
      title: 'IoT Monitoring Sistemi',
      description: 'Gerçek zamanlı IoT cihaz monitoring ve yönetim platformu.',
      technologies: ['Node.js', 'MQTT', 'InfluxDB', 'Grafana', 'Docker'],
      imageUrl: '/api/placeholder/400/300',
      results: [
        'Cihaz izleme %100 kapsama',
        'Alarm süresinde %70 azalma',
        'Sistem güvenilirliği %180 artış'
      ]
    }
  ]

  const categories = ['all', 'ai', 'devops', 'cloud', 'microservices']

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

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true
    return project.technologies.some(tech => 
      tech.toLowerCase().includes(activeFilter.toLowerCase())
    )
  })

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className={`text-center mb-16 space-y-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2 text-primary-600">
            <Briefcase className="h-6 w-6" />
            <span className="font-semibold">Projelerimiz</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Başarılı <span className="text-primary-600">Proje Hikayeleri</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            15 yıllık deneyimimizle gerçekleştirdiğimiz projeler ve elde ettiğimiz başarılı sonuçlar.
            Her proje, müşterilerimizin iş süreçlerini dönüştüren gerçek çözümler sunmaktadır.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'Tümü' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card overflow-hidden group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Briefcase className="h-16 w-16 text-white/80" />
                </div>
                
                {/* Hover Actions */}
                <div className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                  <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <ExternalLink className="h-5 w-5 text-gray-700" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Github className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                    Sonuçlar:
                  </h4>
                  <div className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <Star className="h-3 w-3 mr-2 text-yellow-500" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                  Proje Detayları
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid md:grid-cols-4 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="h-8 w-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">100+</div>
            <div className="text-gray-600">Tamamlanan Proje</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600">Mutlu Müşteri</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">15+</div>
            <div className="text-gray-600">Yıl Deneyim</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">%99.9</div>
            <div className="text-gray-600">Başarı Oranı</div>
          </div>
        </div>
      </div>
    </section>
  )
}
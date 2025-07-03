'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageCircle, 
  Clock, 
  CheckCircle,
  ExternalLink 
} from 'lucide-react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const contactInfo = {
    address: 'Yüksekalan mah. 519 sok no: daire: 10 Muratpaşa / Antalya',
    email: 'info@mrtbt.com',
    phone: '0850 840 94 12'
  }

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 2000)
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`
  }

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone.replace(/\s/g, '')}`
  }

  const handleMapClick = () => {
    const address = encodeURIComponent(contactInfo.address)
    window.open(`https://maps.google.com/maps?q=${address}`, '_blank')
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className={`text-center mb-16 space-y-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2 text-primary-600">
            <Mail className="h-6 w-6" />
            <span className="font-semibold">İletişim</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Projeleriniz için <span className="text-primary-600">İletişime Geçin</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            15 yıllık deneyimimizle projenizin gereksinimlerini analiz edelim ve 
            size en uygun çözümü sunalım. Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>
              
              {/* Address */}
              <div 
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={handleMapClick}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Adres</h4>
                  <p className="text-gray-600">{contactInfo.address}</p>
                  <div className="flex items-center mt-2 text-primary-600 text-sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span>Haritada Görüntüle</span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div 
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={handleEmailClick}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">E-posta</h4>
                  <p className="text-gray-600">{contactInfo.email}</p>
                  <div className="flex items-center mt-2 text-primary-600 text-sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span>E-posta Gönder</span>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div 
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={handlePhoneClick}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                  <div className="flex items-center mt-2 text-primary-600 text-sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span>Hemen Ara</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-6 bg-primary-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="h-5 w-5 text-primary-600" />
                <h4 className="font-semibold text-gray-900">Çalışma Saatleri</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pazartesi - Cuma</span>
                  <span className="font-medium text-gray-900">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cumartesi</span>
                  <span className="font-medium text-gray-900">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pazar</span>
                  <span className="font-medium text-gray-900">Kapalı</span>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="p-6 bg-green-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hızlı Yanıt Garantisi</h4>
                  <p className="text-green-700 text-sm">
                    Tüm mesajlarınıza 24 saat içinde yanıt veriyoruz. 
                    Acil durumlar için telefon numaramızı kullanabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mesaj Gönder</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-medium">Mesajınız başarıyla gönderildi!</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    En kısa sürede size geri dönüş yapacağız.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Adınızı ve soyadınızı girin"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="E-posta adresinizi girin"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Projeniz hakkında detaylı bilgi veriniz..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Gönderiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Mesajı Gönder</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.7298339969786!2d30.69877731531936!3d36.89087697996474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadad%3A0xadadadadadadad!2sYüksekalan%2C%20Muratpaşa%2FAntalya!5e0!3m2!1str!2str!4v1635789123456!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
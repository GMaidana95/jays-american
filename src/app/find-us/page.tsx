import { Navbar } from '@/shared/navbar'
import { Footer } from '@/shared/footer'
import { ContactForm } from '@/components/contact-form'
import { HoursCard } from '@/components/hours-card'
import { MapPin, Phone, Mail, Instagram as InstagramIcon } from 'lucide-react'

export default function FindUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
          
          {/* Page Header */}
          <div className="relative bg-background/95 backdrop-blur-sm rounded-lg shadow-xl border border-primary/10 p-8 md:p-12 mb-8 md:mb-12 overflow-hidden">
            
            <div className="text-center pt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                Encontranos
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Vení a visitarnos y disfrutá del mejor desayuno americano en Buenos Aires
              </p>
            </div>
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Google Maps Placeholder - Order 1 on mobile */}
            <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-xl border border-primary/10 p-6 order-1 lg:col-span-2 lg:row-start-1">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Ubicación
                </h2>
                <div className="bg-muted/50 rounded-lg border-2 border-dashed border-border flex items-center justify-center aspect-video">
                  <div className="text-center p-6">
                    <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Google Maps Embed</h3>
                    <p className="text-muted-foreground text-sm max-w-md">
                      Placeholder para insertar el iframe de Google Maps con la ubicación del restaurante
                    </p>
                    <p className="text-muted-foreground font-medium mt-4">
                      Av. Ejemplo 1234, Buenos Aires
                    </p>
                  </div>
                </div>
              </div>

            {/* Hours Card - Order 2 on mobile */}
            <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-xl border border-primary/10 p-6 order-2 lg:col-start-3 lg:row-start-1">
              <HoursCard />
            </div>

            {/* Contact Info - Order 3 on mobile */}
            <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-xl border border-primary/10 p-6 order-3 lg:col-start-3 lg:row-start-2">
              <h3 className="font-semibold text-foreground text-lg mb-4">Información de Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Dirección</p>
                    <p className="text-sm text-muted-foreground">Av. Ejemplo 1234, Buenos Aires</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Teléfono</p>
                    <p className="text-sm text-muted-foreground">+54 11 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hola@jaysbreakfast.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <InstagramIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Instagram</p>
                    <p className="text-sm text-muted-foreground">@jays_breakfast</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Order 4 on mobile */}
            <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-xl border border-primary/10 p-6 order-4 lg:col-span-2 lg:row-start-2">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  Contacto
                </h2>
                <ContactForm />
              </div>

            {/* Instagram Embed Placeholder - Order 5 on mobile */}
            <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-xl border border-primary/10 p-6 order-5 lg:col-start-3 lg:row-start-3">
              <h3 className="font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                <InstagramIcon className="w-5 h-5 text-primary" />
                Síguenos
              </h3>
              <div className="bg-muted/50 rounded-lg border-2 border-dashed border-border flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <InstagramIcon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Instagram Feed</h4>
                  <p className="text-xs text-muted-foreground">
                    Widget placeholder para mostrar posts recientes
                  </p>
                </div>
              </div>
            </div>

            {/* Spotify Widget Placeholder - Order 6 on mobile */}
            <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-xl border border-primary/10 p-6 order-6 lg:col-span-2 lg:row-start-3">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Nuestra Música
                </h2>
                <div className="bg-muted/50 rounded-lg border-2 border-dashed border-border flex items-center justify-center p-12">
                  <div className="text-center">
                    <svg className="w-20 h-20 text-muted-foreground mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Spotify Player</h3>
                    <p className="text-muted-foreground text-sm max-w-md">
                      Placeholder para insertar el widget de Spotify con la playlist del restaurante
                    </p>
                  </div>
                </div>
              </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
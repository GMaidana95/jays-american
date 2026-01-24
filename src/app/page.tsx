import { Navbar } from '@/shared/navbar'
import { Footer } from '@/shared/footer'
import { DishCarousel } from '@/components/dish-carousel'
import { ReviewsSection } from '@/components/reviews-section'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">

        {/* Hero Section - Full Width */}
        <div className="relative overflow-hidden shadow-2xl min-h-[500px] md:min-h-screen w-screen -mx-[calc((100vw-100%)/2)]">
          <div className="absolute inset-0">
            <img
              src="/hero/hero-breakfast2.jpg"
              alt="Desayuno americano en buenos aires"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
          <div className="relative flex flex-col items-center justify-center min-h-[500px] md:min-h-screen p-6 md:p-12 lg:p-16 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl text-balance leading-tight">
              American Breakfast
            </h1>
            <p className="text-lg md:text-2xl text-white/95 mb-6 md:mb-8 max-w-xl text-pretty">
              Auténtico sabor americano en Buenos Aires
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up">
              <Button size="lg" className="flex h-12 px-8 items-center justify-center rounded-lg bg-primary hover:bg-red-700 text-white text-base font-bold shadow-lg transition-transform hover:scale-105">
                🍴 Ver Menu
              </Button>
              <Button size="lg" variant="outline" className="flex h-12 px-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white text-base font-bold transition-transform hover:scale-105">
                📍 Ubicacion
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl space-y-8">

          {/* Image Carousel */}
          <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-xl border border-primary/10 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Nuestros Platillos
            </h2>
            <DishCarousel />
          </div>

          {/* Welcome Section */}
          <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-xl border border-primary/10 p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* Left Column: Welcome Text & Badge */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                    Welcome to {"Jay's"}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
                    Con productos de primera calidad y recetas propias emulamos la clásica cocina 
                    norteamericana, centrándonos en el desayuno pero sin dejar de lado las clásicas 
                    hamburguesas, pollo frito, ensaladas y sandwiches.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    Ponemos lo mejor en cada plato para que nuestros clientes estén a gusto 
                    y se sientan en la típica cafetería de New York, pero en Buenos Aires. 
                    Vení a pasar un buen rato y a disfrutar de nuestros platos.
                  </p>
                </div>

                {/* Badge */}
                <div className="flex justify-center lg:justify-start">
                  <img
                    src="/badge.jpg"
                    alt="Best Pancakes in Town since 2017"
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>

              {/* Right Column: Instagram Feed Placeholder */}
              <div className="bg-muted/50 rounded-lg border-2 border-dashed border-border p-8 flex flex-col items-center justify-center min-h-[400px]">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Síguenos en Instagram</h3>
                  <p className="text-muted-foreground">@jays_breakfast</p>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                    Instagram feed widget placeholder - Connect your Instagram account to display live feed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Reviews */}
          <ReviewsSection />

        </div>
      </main>

      <Footer />
    </div>
  )
}

import { Navbar } from '@/shared/navbar'
import { Footer } from '@/shared/footer'
import { MenuViewer } from '@/components/menu-viewer'

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
          
          {/* Menu Header */}
          <div className="text-center bg-background/95 backdrop-blur-sm rounded-lg shadow-2xl border border-primary/10 p-4 md:p-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Menú de Salón - Take Away
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Pedís y pagás por mostrador. Lo llevamos a tu mesa.
            </p>
          </div>

          {/* Menu Image Viewer */}
          <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-2xl border border-primary/10 p-4 md:p-6">
            <MenuViewer />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

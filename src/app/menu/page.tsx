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
          <div className="text-center mb-8 md:mb-12">
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

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Usá los controles de zoom para ver mejor el menú. En mobile, podés hacer pinch-to-zoom para ampliar los detalles.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

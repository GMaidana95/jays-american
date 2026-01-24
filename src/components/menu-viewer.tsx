'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const menuImages = [
  { src: '/menu-food/menu1.png', alt: 'Menú del Restaurante - Página 1' },
  { src: '/menu-food/menu2.png', alt: 'Menú del Restaurante - Página 2' },
]

export function MenuViewer() {
  return (
    <div className="w-full">
      <div className="space-y-4">
        {/* Download PDF Button */}
        <div className="flex justify-center mb-6">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
          >
            <a href="/menu-food/menu-jays.pdf" download="Menu-Jays-American.pdf">
              <Download className="h-5 w-5" />
              Descargar Menú (PDF)
            </a>
          </Button>
        </div>

        {/* Clickable Menu Images - Download PDF on click */}
        <div className="grid gap-4">
          {menuImages.map((image) => (
            <a
              key={image.src}
              href="/menu-food/menu-jays.pdf"
              download="Menu-Jays-American.pdf"
              className="relative group cursor-pointer rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 block"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain"
              />
              {/* Overlay hint on hover/focus */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 group-focus:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm transition-opacity duration-300 flex items-center gap-2">
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Hint text for mobile users */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          Toca cualquier imagen para descargar el menú en PDF
        </p>
      </div>
    </div>
  )
}

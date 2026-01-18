'use client'

import { useState, useRef, useEffect } from 'react'
import { Download, X, ZoomIn, ZoomOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

const menuImages = [
  { src: '/menu-food/menu1.png', alt: 'Menú del Restaurante - Página 1' },
  { src: '/menu-food/menu2.png', alt: 'Menú del Restaurante - Página 2' },
]

export function MenuViewer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const lastTouchDistance = useRef<number | null>(null)
  const lastTouchCenter = useRef<{ x: number; y: number } | null>(null)

  // Reset zoom when modal closes or image changes
  useEffect(() => {
    if (!isModalOpen) {
      setScale(1)
      setPosition({ x: 0, y: 0 })
    }
  }, [isModalOpen, selectedImageIndex])

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  // Handle touch events for pinch-to-zoom
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const distance = getTouchDistance(e.touches)
      lastTouchDistance.current = distance
      lastTouchCenter.current = getTouchCenter(e.touches)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault()
      const distance = getTouchDistance(e.touches)
      const center = getTouchCenter(e.touches)

      if (lastTouchDistance.current !== null) {
        const scaleChange = distance / lastTouchDistance.current
        setScale((prev) => Math.min(Math.max(prev * scaleChange, 1), 4))
      }

      if (lastTouchCenter.current !== null && scale > 1) {
        const deltaX = center.x - lastTouchCenter.current.x
        const deltaY = center.y - lastTouchCenter.current.y
        setPosition((prev) => ({
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        }))
      }

      lastTouchDistance.current = distance
      lastTouchCenter.current = center
    }
  }

  const handleTouchEnd = () => {
    lastTouchDistance.current = null
    lastTouchCenter.current = null
  }

  const getTouchDistance = (touches: React.TouchList) => {
    return Math.hypot(
      touches[0].clientX - touches[1].clientX,
      touches[0].clientY - touches[1].clientY
    )
  }

  const getTouchCenter = (touches: React.TouchList) => {
    return {
      x: (touches[0].clientX + touches[1].clientX) / 2,
      y: (touches[0].clientY + touches[1].clientY) / 2,
    }
  }

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.5, 4))
  const zoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev - 0.5, 1)
      if (newScale === 1) setPosition({ x: 0, y: 0 })
      return newScale
    })
  }

  const resetZoom = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  return (
    <div className="w-full">
      {/* Mobile-First Menu Grid */}
      <div className="space-y-4">
        {/* Download PDF Button */}
        <div className="flex justify-center mb-6">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
          >
            <a href="/menu-food/Menu1.pdf" download="Menu-Jays-American.pdf">
              <Download className="h-5 w-5" />
              Descargar Menú (PDF)
            </a>
          </Button>
        </div>

        {/* Clickable Menu Images */}
        <div className="grid gap-4">
          {menuImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => openModal(index)}
              className="relative group cursor-pointer rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain"
              />
              {/* Overlay hint on hover/focus */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 group-focus:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm transition-opacity duration-300">
                  Toca para ampliar
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Hint text for mobile users */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          Toca cualquier imagen para verla en pantalla completa
        </p>
      </div>

      {/* Fullscreen Modal with Pinch-to-Zoom */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-w-none w-screen h-screen p-0 border-none bg-black/95 rounded-none"
        >
          <DialogTitle className="sr-only">Menú en pantalla completa</DialogTitle>
          
          {/* Modal Header with Controls */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/70 to-transparent">
            {/* Page indicator */}
            <div className="text-white text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {selectedImageIndex + 1} / {menuImages.length}
            </div>

            {/* Zoom controls (desktop) */}
            <div className="hidden sm:flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={zoomOut}
                disabled={scale <= 1}
                className="h-10 w-10 text-white hover:bg-white/20 disabled:opacity-50"
              >
                <ZoomOut className="h-5 w-5" />
              </Button>
              <span className="text-white text-sm min-w-[50px] text-center">
                {Math.round(scale * 100)}%
              </span>
              <Button
                size="icon"
                variant="ghost"
                onClick={zoomIn}
                disabled={scale >= 4}
                className="h-10 w-10 text-white hover:bg-white/20 disabled:opacity-50"
              >
                <ZoomIn className="h-5 w-5" />
              </Button>
            </div>

            {/* Close button */}
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsModalOpen(false)}
              className="h-10 w-10 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Zoomable Image Container */}
          <div
            ref={imageContainerRef}
            className="w-full h-full overflow-hidden flex items-center justify-center touch-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onDoubleClick={scale > 1 ? resetZoom : zoomIn}
          >
            <img
              src={menuImages[selectedImageIndex].src}
              alt={menuImages[selectedImageIndex].alt}
              className="max-w-full max-h-full object-contain select-none transition-transform duration-100"
              style={{
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
              }}
              draggable={false}
            />
          </div>

          {/* Navigation dots for multiple pages */}
          {menuImages.length > 1 && (
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
              {menuImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImageIndex(index)
                    resetZoom()
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedImageIndex
                      ? 'bg-white scale-110'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Ver página ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Mobile zoom hint */}
          <div className="absolute bottom-16 left-0 right-0 text-center text-white/60 text-xs sm:hidden">
            Pellizca para hacer zoom • Doble toque para restablecer
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

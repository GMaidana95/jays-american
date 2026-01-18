'use client'

import { useState } from 'react'
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MenuViewer() {
  const [scale, setScale] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3))
  }

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5))
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <>
      <div className="relative bg-muted/30 rounded-lg border-2 border-border overflow-hidden">
        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 z-10 flex gap-2 bg-background/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
          <Button
            size="icon"
            variant="outline"
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="h-10 w-10 bg-transparent"
          >
            <ZoomOut className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={zoomIn}
            disabled={scale >= 3}
            className="h-10 w-10"
          >
            <ZoomIn className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={toggleFullscreen}
            className="h-10 w-10 bg-transparent"
          >
            <Maximize2 className="h-5 w-5" />
          </Button>
        </div>

        {/* Menu Image Container */}
        <div className="overflow-auto max-h-[600px] md:max-h-[800px] p-4">
          <div 
            className="transition-transform duration-300 ease-out mx-auto"
            style={{ 
              transform: `scale(${scale})`,
              transformOrigin: 'center top'
            }}
          >
            <img
              src="/menu-food/menu1.png"
              alt="Menú del Restaurante"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
            />
            <img
              src="/menu-food/menu2.png"
              alt="Menú del Restaurante 2"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>

        {/* Scale Indicator */}
        <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
          {Math.round(scale * 100)}%
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={toggleFullscreen}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            onClick={toggleFullscreen}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="overflow-auto max-h-full max-w-full">
            <img
              src="/menu-food/menu1.png"
              alt="Menú del Restaurante"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <img
              src="/menu-food/menu2.png"
              alt="Menú del Restaurante 2"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}

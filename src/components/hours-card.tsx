'use client'

import { Clock, AlertCircle } from 'lucide-react'

export function HoursCard() {
  // This could be dynamic based on current time
  const isOpenNow = true
  const closingSoon = true

  return (
    <div className="space-y-4">
      {/* Status Banner */}
      <div className={`p-4 rounded-lg border ${
        isOpenNow 
          ? 'bg-green-50 border-green-200 text-green-800' 
          : 'bg-red-50 border-red-200 text-red-800'
      }`}>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <span className="font-semibold">
            {isOpenNow ? 'Abierto ahora' : 'Cerrado'}
          </span>
        </div>
        {closingSoon && isOpenNow && (
          <div className="flex items-center gap-2 mt-2 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>Cocina cierra en 30 minutos</span>
          </div>
        )}
      </div>

      {/* Hours List */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground text-lg">Horarios</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-muted-foreground">Lunes - Martes</span>
            <span className="font-medium text-foreground">8:00 - 16:00</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-muted-foreground">Miércoles - Viernes</span>
            <span className="font-medium text-foreground">8:00 - 17:00</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-border">
            <span className="text-muted-foreground">Sábado - Domingo</span>
            <span className="font-medium text-foreground">9:00 - 18:00</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground italic pt-2">
          * La cocina cierra 30 minutos antes del horario de cierre
        </p>
      </div>
    </div>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, MapPin, User } from 'lucide-react'

const reviews = [
    {
        id: 1,
        name: 'María González',
        rating: 5,
        comment: 'Los mejores pancakes que he probado en Buenos Aires! El ambiente es súper acogedor y el servicio excelente. Definitivamente volveré.',
        date: 'Hace 2 semanas',
    },
    {
        id: 2,
        name: 'Carlos Rodríguez',
        rating: 5,
        comment: 'Auténtico desayuno americano! Las porciones son generosas y todo está delicioso. El café es de primera calidad.',
        date: 'Hace 1 mes',
    },
    {
        id: 3,
        name: 'Laura Martínez',
        rating: 5,
        comment: 'Me encanta el ambiente vintage! Es como estar en un diner americano real. Los eggs benedict son increíbles.',
        date: 'Hace 3 semanas',
    },
]

export function ReviewsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px',
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div ref={sectionRef} className="bg-background/95 backdrop-blur-sm rounded-lg shadow-xl border border-primary/10 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Google Maps Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {reviews.map((review, index) => (
                    <div
                        key={review.id}
                        className={`bg-card border border-border rounded-lg p-6 space-y-4 transition-all duration-800 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }`}
                        style={{
                            transitionDelay: isVisible ? `${index * 200}ms` : '0ms',
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                <User className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-card-foreground">{review.name}</h4>
                                <div className="flex gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            "{review.comment}"
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{review.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

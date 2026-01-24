'use client'

interface Dish {
    id: number
    name: string
    description: string
    image: string
}

const dishes: Dish[] = [
    {
        id: 1,
        name: 'Pancakes',
        description: 'Esponjosos pancakes dorados con manteca derretida, jarabe de maple y frutas frescas',
        image: '/pancakes.jpg',
    },
    {
        id: 2,
        name: 'French Toast',
        description: 'Tostadas francesas con azúcar impalpable, canela, fresas frescas y crema batida',
        image: '/french-toast.jpg',
    },
    {
        id: 3,
        name: 'Hash Browns',
        description: 'Papas ralladas y fritas hasta quedar doradas y crujientes, servidas con tocino y huevos',
        image: '/hash-browns.jpg',
    },
]

// Duplicate dishes array to create seamless infinite loop
const dishesDouble = [...dishes, ...dishes]

export function DishCarousel() {
    return (
        <div className="relative overflow-hidden -mx-6 md:-mx-8">
            {/* Marquee Container */}
            <div className="group flex gap-6">
                {/* First Set */}
                <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]">
                    {dishesDouble.map((dish, index) => (
                        <div
                            key={`first-${dish.id}-${index}`}
                            className="flex-shrink-0 w-80 md:w-96 bg-card border border-border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={dish.image || "/placeholder.svg"}
                                    alt={dish.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            </div>
                            <div className="p-6 space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">{dish.name}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {dish.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Set (duplicate for seamless loop) */}
                <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
                    {dishesDouble.map((dish, index) => (
                        <div
                            key={`second-${dish.id}-${index}`}
                            className="flex-shrink-0 w-80 md:w-96 bg-card border border-border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={dish.image || "/placeholder.svg"}
                                    alt={dish.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            </div>
                            <div className="p-6 space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">{dish.name}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {dish.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

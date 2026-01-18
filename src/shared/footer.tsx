import Link from 'next/link'

export function Footer() {
    return (
        <footer className="border-t border-primary/20 mt-auto">
            <div
                className="relative"
                style={{
                    backgroundImage: 'url(/background/dark-wood.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/40" />
                <div className="relative container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

                        {/* Column 1: Logo */}
                        <div className="flex flex-col gap-3">
                            <div className="text-3xl font-bold text-primary tracking-tight">
                                {"Jay's"}
                            </div>
                            <p className="text-background/70 text-sm leading-relaxed">
                                Authentic American Breakfast
                            </p>
                        </div>

                        {/* Column 2: Hours */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-background font-semibold text-lg tracking-wide">
                                Horario
                            </h3>
                            <div className="flex flex-col gap-2 text-sm text-background/80">
                                <div className="flex justify-between gap-4">
                                    <span>Lun - Mar:</span>
                                    <span className="font-medium">7:00 - 15:00</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span>Mie - Vie:</span>
                                    <span className="font-medium">7:00 - 16:00</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span>Sab - Dom:</span>
                                    <span className="font-medium">8:00 - 16:00</span>
                                </div>
                                <p className="text-xs text-background/60 mt-2 italic">
                                    *Cocina cierra 30 minutos antes
                                </p>
                            </div>
                        </div>

                        {/* Column 3: Contact Info */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-background font-semibold text-lg tracking-wide">
                                Contacto
                            </h3>
                            <div className="flex flex-col gap-2 text-sm text-background/80">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-background/60">Dirección:</span>
                                    <span className="leading-relaxed">123 Main Street, Ciudad</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-background/60">Teléfono:</span>
                                    <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-background/60">Email:</span>
                                    <a href="mailto:info@jaysbreakfast.com" className="hover:text-primary transition-colors">
                                        info@jaysbreakfast.com
                                    </a>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-background/60">Instagram:</span>
                                    <a
                                        href="https://instagram.com/jaysbreakfast"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors"
                                    >
                                        @jaysbreakfast
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Column 4: Navigation Links */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-background font-semibold text-lg tracking-wide">
                                Navegación
                            </h3>
                            <div className="flex flex-col gap-2 text-sm">
                                <Link
                                    href="/"
                                    className="text-background/80 hover:text-primary transition-colors w-fit"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/menu"
                                    className="text-background/80 hover:text-primary transition-colors w-fit"
                                >
                                    Menu
                                </Link>
                                <Link
                                    href="/find-us"
                                    className="text-background/80 hover:text-primary transition-colors w-fit"
                                >
                                    Find Us
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-12 pt-6 border-t border-background/20">
                        <p className="text-center text-background/60 text-sm">
                            © {new Date().getFullYear()} {"Jay's American Breakfast"}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

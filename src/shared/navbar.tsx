import Link from 'next/link'

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20">
            <div
                className="relative"
                style={{
                    backgroundImage: 'url(/background/dark-wood.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
                <div className="relative container mx-auto px-4">
                    <nav className="flex items-center justify-between h-20">
                        {/* Logo/Brand */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                                {"Jay's"}
                            </div>
                            <div className="hidden sm:flex items-center gap-1">


                            </div>
                        </Link>

                        {/* Navigation Links */}
                        <div className="flex items-center gap-6 md:gap-8">
                            <Link
                                href="/"
                                className="text-background/80 hover:text-primary transition-colors text-sm md:text-base font-medium tracking-wide"
                            >
                                Home
                            </Link>
                            <Link
                                href="/menu"
                                className="text-background/80 hover:text-primary transition-colors text-sm md:text-base font-medium tracking-wide"
                            >
                                Menu
                            </Link>
                            <Link
                                href="/find-us"
                                className="text-background/80 hover:text-primary transition-colors text-sm md:text-base font-medium tracking-wide"
                            >
                                Find Us
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

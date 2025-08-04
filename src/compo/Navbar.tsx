import { Search } from "lucide-react"
import { useState } from "react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div className="relative z-50">
            <div className="flex items-center justify-between w-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 border-b">
                <NavigationMenu viewport={false}>
                    <NavigationMenuList className="flex-wrap">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <a href="/" className="text-lg sm:text-xl md:text-2xl font-bold px-2 sm:px-4 md:px-6 py-2 sm:py-3 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-md transition-colors">
                                    Vesparel
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hidden sm:block">
                            <NavigationMenuLink asChild>
                                <a href="/" className="text-sm sm:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-md transition-colors">Home</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hidden sm:block">
                            <NavigationMenuLink asChild>
                                <a href="/about" className="text-sm sm:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-md transition-colors">About Us</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hidden md:block">
                            <NavigationMenuTrigger className="text-sm sm:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-2 font-normal">Catalogue</NavigationMenuTrigger>
                            <NavigationMenuContent className="z-[100]">
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/catalogue"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Browse Our Collection
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Discover our wide range of products and find exactly what you're looking for.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/catalogue/new-arrivals" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">New Arrivals</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Check out our latest products and collections.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/catalogue/featured" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">Featured Products</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Our most popular and highly recommended items.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/catalogue/categories" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">Categories</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Browse products by category and type.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/catalogue/sale" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div className="text-sm font-medium leading-none">Sale Items</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Great deals and discounted products.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hidden md:block">
                            <NavigationMenuLink asChild>
                                <a href="/faq" className="text-sm sm:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-md transition-colors">FAQ's</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hidden md:block">
                            <NavigationMenuLink asChild>
                                <a href="/contact" className="text-sm sm:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-md transition-colors">Contact Us</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Search Bar */}
                <div className="relative hidden sm:block">
                    <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 sm:h-4 sm:w-4" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-8 sm:pl-10 pr-2 sm:pr-4 py-1 sm:py-2 w-32 sm:w-48 md:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                </div>

                {/* Mobile Menu Button */}
                <div className="sm:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-gray-600 hover:text-gray-900 p-2 relative"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            {/* Top line */}
                            <span
                                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                                    }`}
                            />
                            {/* Middle line */}
                            <span
                                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                            />
                            {/* Bottom line */}
                            <span
                                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg z-50 animate-in slide-in-from-top-2 duration-300">
                    <div className="px-4 py-2 space-y-1">
                        <a
                            href="/"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About Us
                        </a>
                        <a
                            href="/catalogue"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Catalogue
                        </a>
                        <a
                            href="/faq"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            FAQ's
                        </a>
                        <a
                            href="/contact"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </a>

                        {/* Mobile Search */}
                        <div className="pt-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-colors duration-200"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
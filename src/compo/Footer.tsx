import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Vesparel</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Your trusted destination for quality products and exceptional service across Pakistan.
                            Discover our curated collection of premium items delivered nationwide.
                        </p>
                        {/* Social Media Links */}
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/catalogue" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                    Catalogue
                                </a>
                            </li>
                            <li>
                                <a href="/faq" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                    FAQ's
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Customer Service</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/shipping" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                    Shipping Info
                                </a>
                            </li>
                            <li>
                                <a href="/returns" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                    Returns & Exchanges
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/support" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                    Support Center
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Get in Touch</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-gray-400" />
                                <a
                                    href="mailto:info@vesparel.com"
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    info@vesparel.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-gray-400" />
                                <a
                                    href="tel:+923001234567"
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    +92 300 1234567
                                </a>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                                <address className="text-gray-300 text-sm not-italic leading-relaxed">
                                    Plot 123, Block B<br />
                                    DHA Phase 5, Lahore<br />
                                    Punjab, Pakistan 54000
                                </address>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
                            <p className="text-gray-300 text-sm">
                                Subscribe to our newsletter for the latest updates and exclusive offers.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            />
                            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 text-sm font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    <p className="text-gray-400 text-sm">
                        © 2025 Vesparel. All rights reserved.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                            Privacy
                        </a>
                        <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                            Terms
                        </a>
                        <a href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

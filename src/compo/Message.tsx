import { Instagram, Facebook, Twitter } from 'lucide-react'

export const Message = () => {
    return (
        <div className="bg-gray-100 py-1 sm:py-2 px-3 sm:px-4 md:px-6 border-b border-gray-200">
            <div className="flex items-center justify-between text-xs sm:text-sm">
                {/* Welcome Message */}
                <div className="text-center flex-1">
                    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                        Welcome to Vesparel - Pakistan's Premier Online Shopping Destination
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 hidden sm:block">
                        Quality products delivered across Pakistan | Call +92 300 1234567 to order
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <span className="text-gray-600 text-xs hidden sm:inline">Follow us:</span>
                    <a
                        href="https://instagram.com/vesparel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-500 transition-colors"
                        aria-label="Follow us on Instagram"
                    >
                        <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
                    </a>
                    <a
                        href="https://facebook.com/vesparel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="Follow us on Facebook"
                    >
                        <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                    </a>
                    <a
                        href="https://twitter.com/vesparel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-400 transition-colors"
                        aria-label="Follow us on Twitter"
                    >
                        <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
                    </a>
                </div>
            </div>
        </div>
    )
}
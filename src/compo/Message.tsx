import React from 'react'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export const Message = () => {
    return (
        <div className="bg-gray-100 py-1 sm:py-2 px-3 sm:px-4 md:px-6 border-b border-gray-200">
            <div className="flex items-center justify-between text-xs sm:text-sm">
                {/* Welcome Message */}
                <div className="text-gray-700 truncate">
                    <span className="hidden sm:inline">Welcome to Vesparel - Your Premium Shopping Destination</span>
                    <span className="sm:hidden">Welcome to Vesparel</span>
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
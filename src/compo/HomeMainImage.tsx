import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const HomeMainImage = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    // Array of slides with different content and backgrounds
    const slides = [
        {
            id: 1,
            title: "Summer is Coming",
            subtitle: "Classic Hoodies",
            description: "Fashion that never goes out of style. The perfect fit for everybody",
            tagline: "Choose Life. Choose Style",
            buttonText: "SHOP NOW",
            backgroundImage: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            buttonColor: "bg-emerald-500 hover:bg-emerald-600"
        },
        {
            id: 2,
            title: "New Collection",
            subtitle: "Premium Streetwear",
            description: "Discover our latest urban fashion collection designed for the modern lifestyle",
            tagline: "Express Yourself. Be Bold",
            buttonText: "EXPLORE",
            backgroundImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            buttonColor: "bg-blue-500 hover:bg-blue-600"
        },
        {
            id: 3,
            title: "Limited Edition",
            subtitle: "Designer Collection",
            description: "Exclusive pieces crafted with premium materials and attention to detail",
            tagline: "Quality. Style. Excellence",
            buttonText: "SHOP LIMITED",
            backgroundImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            buttonColor: "bg-purple-500 hover:bg-purple-600"
        }
    ]

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 6000) // Change slide every 6 seconds

        return () => clearInterval(interval)
    }, [slides.length])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    return (
        <div className="relative w-full h-screen min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center lg:justify-between h-full px-4 sm:px-6 md:px-8 lg:px-16">
                        {/* Left Content */}
                        <div className="max-w-sm sm:max-w-md md:max-w-lg text-white text-center lg:text-left">
                            <p className="text-sm sm:text-base md:text-lg font-light italic mb-2 sm:mb-4">{slide.title}</p>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                                {slide.subtitle}
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg mb-1 sm:mb-2 opacity-90">
                                {slide.description}
                            </p>
                            <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 font-medium">
                                {slide.tagline}
                            </p>
                            <button className={`${slide.buttonColor} text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base font-semibold tracking-wide transition-colors duration-300 hover:shadow-lg`}>
                                {slide.buttonText}
                            </button>
                        </div>

                        {/* Right side can be used for additional content or kept empty for image focus */}
                        <div className="hidden lg:block flex-1"></div>
                    </div>
                </div>
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-white scale-125'
                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Navigation Arrows (Optional) */}
            <button
                onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" color='black' />
            </button>

            <button
                onClick={() => goToSlide((currentSlide + 1) % slides.length)}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
                aria-label="Next slide"
            >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" color='black' />
            </button>
        </div>
    )
}

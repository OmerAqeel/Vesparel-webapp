import { Users, Award, Globe, Heart } from "lucide-react"

export function AboutUs() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            About Vesparel
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We're passionate about bringing you carefully curated products that enhance your lifestyle.
                            Our journey began with a simple mission: to make quality accessible to everyone across Pakistan.
                        </p>
                    </div>
                </div>
            </div>

            {/* Company Story */}
            <div className="py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Founded in 2025, Vesparel started as a small business with big dreams in Pakistan.
                                    We noticed a gap in the market for high-quality, affordable products that
                                    didn't compromise on style or functionality for Pakistani consumers.
                                </p>
                                <p>
                                    What began as a passion project has grown into a trusted brand that serves
                                    customers across Pakistan. We believe that everyone deserves access
                                    to products that make their lives better, delivered right to their doorstep.
                                </p>
                                <p>
                                    Today, we continue to carefully select each item in our catalogue,
                                    ensuring it meets our high standards for quality, design, and value,
                                    while keeping Pakistani preferences and needs in mind.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
                                <div className="w-full h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg font-medium">Pakistan Flag Colors</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-gray-50 py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            These core principles guide everything we do and shape our commitment to our Pakistani customers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Quality */}
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We never compromise on quality. Every product is carefully vetted to ensure
                                it meets our rigorous standards for Pakistani customers.
                            </p>
                        </div>

                        {/* Customer Focus */}
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Love</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Our Pakistani customers are at the heart of everything we do. Your satisfaction
                                and happiness drive our decisions.
                            </p>
                        </div>

                        {/* Innovation */}
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nationwide Reach</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We deliver across Pakistan, from Karachi to Lahore, Islamabad to Peshawar,
                                bringing quality products to every corner of the country.
                            </p>
                        </div>

                        {/* Community */}
                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pakistani Community</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We believe in building lasting relationships and supporting the
                                Pakistani communities that support us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-green-600 py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to Explore Our Pakistani Collection?
                    </h2>
                    <p className="text-green-100 text-lg mb-8 leading-relaxed">
                        Discover carefully curated products delivered across Pakistan that will enhance your lifestyle and bring joy to your everyday moments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/catalogue"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition-colors duration-200"
                        >
                            Browse Catalogue
                        </a>
                        <a
                            href="tel:+923001234567"
                            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-600 transition-colors duration-200"
                        >
                            Call Us: +92 300 1234567
                        </a>
                    </div>
                </div>
            </div>            {/* Call to Action */}
            <div className="bg-green-600 py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to Explore Our Pakistani Collection?
                    </h2>
                    <p className="text-green-100 text-lg mb-8 leading-relaxed">
                        Discover carefully curated products delivered across Pakistan that will enhance your lifestyle and bring joy to your everyday moments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/catalogue"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition-colors duration-200"
                        >
                            Browse Catalogue
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-600 transition-colors duration-200"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

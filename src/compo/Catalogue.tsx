import { useState } from "react"
import { Search, Filter, Grid, List, Star } from "lucide-react"

// Sample product data
const sampleProducts = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 19999,
        originalPrice: 24999,
        image: "/api/placeholder/300/300",
        rating: 4.8,
        reviews: 124,
        category: "Electronics",
        isNew: true,
        isSale: true
    },
    {
        id: 2,
        name: "Organic Cotton Kurta",
        price: 2999,
        image: "/api/placeholder/300/300",
        rating: 4.6,
        reviews: 89,
        category: "Clothing",
        isNew: false,
        isSale: false
    },
    {
        id: 3,
        name: "Stainless Steel Water Bottle",
        price: 1999,
        image: "/api/placeholder/300/300",
        rating: 4.9,
        reviews: 256,
        category: "Lifestyle",
        isNew: true,
        isSale: false
    },
    {
        id: 4,
        name: "Leather Crossbody Bag",
        price: 7999,
        originalPrice: 12999,
        image: "/api/placeholder/300/300",
        rating: 4.7,
        reviews: 67,
        category: "Accessories",
        isNew: false,
        isSale: true
    },
    {
        id: 5,
        name: "Smart Fitness Tracker",
        price: 14999,
        image: "/api/placeholder/300/300",
        rating: 4.5,
        reviews: 203,
        category: "Electronics",
        isNew: true,
        isSale: false
    },
    {
        id: 6,
        name: "Bamboo Phone Stand",
        price: 1599,
        image: "/api/placeholder/300/300",
        rating: 4.4,
        reviews: 45,
        category: "Accessories",
        isNew: false,
        isSale: false
    }
]

const categories = ["All", "Electronics", "Clothing", "Lifestyle", "Accessories"]
const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "newest", label: "Newest First" }
]

export function Catalogue() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [sortBy, setSortBy] = useState("featured")
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [showFilters, setShowFilters] = useState(false)

    // Filter and sort products
    const filteredProducts = sampleProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case "price-low":
                return a.price - b.price
            case "price-high":
                return b.price - a.price
            case "rating":
                return b.rating - a.rating
            case "newest":
                return Number(b.isNew) - Number(a.isNew)
            default:
                return 0
        }
    })

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Our Product Catalogue
                            </h1>
                            <p className="text-gray-600 mt-1">
                                Browse our collection and call +92 300 1234567 to place your order
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full sm:w-80">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div className="lg:w-64 space-y-6">
                        {/* Mobile Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="lg:hidden w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white"
                        >
                            <Filter className="h-4 w-4" />
                            Filters
                        </button>

                        {/* Filter Content */}
                        <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                            {/* Categories */}
                            <div className="bg-white p-4 rounded-lg border">
                                <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedCategory === category
                                                ? 'bg-blue-100 text-blue-700 font-medium'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="bg-white p-4 rounded-lg border">
                                <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 mr-2" />
                                        <span className="text-sm text-gray-600">Under Rs. 2,000</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 mr-2" />
                                        <span className="text-sm text-gray-600">Rs. 2,000 - Rs. 5,000</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 mr-2" />
                                        <span className="text-sm text-gray-600">Rs. 5,000 - Rs. 10,000</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded border-gray-300 mr-2" />
                                        <span className="text-sm text-gray-600">Over Rs. 10,000</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Controls Bar */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                            <p className="text-gray-600">
                                Showing {sortedProducts.length} of {sampleProducts.length} products
                            </p>

                            <div className="flex items-center gap-4">
                                {/* Sort Dropdown */}
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {sortOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>

                                {/* View Mode Toggle */}
                                <div className="flex border border-gray-300 rounded-md">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-2 ${viewMode === "grid" ? 'bg-gray-100' : ''}`}
                                    >
                                        <Grid className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-2 ${viewMode === "list" ? 'bg-gray-100' : ''}`}
                                    >
                                        <List className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid/List */}
                        <div className={`grid gap-6 ${viewMode === "grid"
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                            : "grid-cols-1"
                            }`}>
                            {sortedProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                                    <div className="relative">
                                        {/* Product Image */}
                                        <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
                                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                                <span className="text-gray-600 text-sm">Product Image</span>
                                            </div>
                                        </div>

                                        {/* Badges */}
                                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                                            {product.isNew && (
                                                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                                                    New
                                                </span>
                                            )}
                                            {product.isSale && (
                                                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                                                    Sale
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                            {product.name}
                                        </h3>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1 mb-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-3 w-3 ${i < Math.floor(product.rating)
                                                            ? 'text-yellow-400 fill-current'
                                                            : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-xs text-gray-600">
                                                {product.rating} ({product.reviews})
                                            </span>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-lg font-bold text-gray-900">
                                                Rs. {product.price.toLocaleString()}
                                            </span>
                                            {product.originalPrice && (
                                                <span className="text-sm text-gray-500 line-through">
                                                    Rs. {product.originalPrice.toLocaleString()}
                                                </span>
                                            )}
                                        </div>

                                        {/* Contact for Purchase */}
                                        <div className="text-center py-2">
                                            <p className="text-sm text-gray-600 mb-1">Interested in this product?</p>
                                            <a
                                                href="tel:+923001234567"
                                                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                                            >
                                                Call +92 300 1234567
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Load More Button */}
                        <div className="text-center mt-8">
                            <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200">
                                Load More Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

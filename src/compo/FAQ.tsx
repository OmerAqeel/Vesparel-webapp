import { useState } from "react"
import { ChevronDown, Search, MessageCircle, Phone, Mail } from "lucide-react"

interface FAQItem {
    id: number
    question: string
    answer: string
    category: string
}

const faqData: FAQItem[] = [
    {
        id: 1,
        category: "Shipping",
        question: "What are your shipping options and costs across Pakistan?",
        answer: "We offer several shipping options: Standard (3-5 business days, Rs. 200), Express (1-2 business days, Rs. 400), and Same Day Delivery in major cities (Rs. 600). Free standard shipping on orders over Rs. 5,000."
    },
    {
        id: 2,
        category: "Shipping",
        question: "Do you ship across all of Pakistan?",
        answer: "Yes, we ship to all major cities and towns across Pakistan including Karachi, Lahore, Islamabad, Peshawar and many more. Delivery times range from 2-7 business days depending on your location."
    },
    {
        id: 3,
        category: "Shipping",
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email. You can track your package on our website or the carrier's website. You'll also receive updates as your package moves through the delivery process."
    },
    {
        id: 4,
        category: "Returns",
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for most items. Products must be unused, in original packaging, and in the same condition you received them. Some items like personalized products may not be eligible for return."
    },
    {
        id: 5,
        category: "Returns",
        question: "How do I initiate a return?",
        answer: "To start a return, log into your account and go to 'Order History', select the item you want to return, and follow the instructions. You can also contact our customer service team for assistance."
    },
    {
        id: 6,
        category: "Returns",
        question: "Who pays for return shipping?",
        answer: "For defective items or our error, we'll provide a prepaid return label. For other returns, customers are responsible for return shipping costs unless the item was over $100."
    },
    {
        id: 7,
        category: "Products",
        question: "Are your products authentic?",
        answer: "Yes, all our products are 100% authentic. We work directly with manufacturers and authorized distributors to ensure the quality and authenticity of every item we sell."
    },
    {
        id: 8,
        category: "Products",
        question: "Do you offer product warranties?",
        answer: "Many of our products come with manufacturer warranties. Warranty terms vary by product and manufacturer. You can find warranty information on each product page or contact us for specific details."
    },
    {
        id: 9,
        category: "Products",
        question: "Can I get product recommendations?",
        answer: "Absolutely! Our customer service team is happy to help you find the perfect product. You can also use our product filters and reviews to help make your decision."
    },
    {
        id: 10,
        category: "Orders",
        question: "How do I get more information about a product?",
        answer: "For detailed product information, specifications, or availability, please call us at +92 300 1234567. Our team will provide you with all the details you need to make an informed decision."
    },
    {
        id: 11,
        category: "Orders",
        question: "Do you provide product demonstrations?",
        answer: "Yes, for certain products we can arrange demonstrations or provide additional photos/videos. Contact us at +92 300 1234567 to discuss your specific requirements."
    },
    {
        id: 12,
        category: "Payment",
        question: "What payment methods do you accept in Pakistan?",
        answer: "We accept all major Pakistani payment methods including JazzCash, EasyPaisa, Bank transfers, Credit/Debit cards (Visa, MasterCard), and Cash on Delivery (COD) for most locations across Pakistan."
    },
    {
        id: 13,
        category: "Payment",
        question: "Is my payment information secure?",
        answer: "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers and are PCI DSS compliant."
    },
    {
        id: 14,
        category: "Orders",
        question: "How do I place an order?",
        answer: "To place an order, browse our catalogue and call us at +92 300 1234567 with the product details you're interested in. Our team will help you complete your order over the phone."
    }
]

const categories = ["All", "Shipping", "Returns", "Products", "Orders", "Payment"]

export function FAQ() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (id: number) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        )
    }

    // Filter FAQs based on search and category
    const filteredFAQs = faqData.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Find answers to common questions about our products, shipping across Pakistan, returns, and more.
                    </p>                    {/* Search Bar */}
                    <div className="relative max-w-lg mx-auto">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search frequently asked questions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-300'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {filteredFAQs.length > 0 ? (
                        filteredFAQs.map((faq) => (
                            <div key={faq.id} className="bg-white rounded-lg border shadow-sm">
                                <button
                                    onClick={() => toggleItem(faq.id)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex-1">
                                        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1 block">
                                            {faq.category}
                                        </span>
                                        <h3 className="text-lg font-medium text-gray-900 pr-4">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`h-5 w-5 text-gray-500 transition-transform ${openItems.includes(faq.id) ? 'transform rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {openItems.includes(faq.id) && (
                                    <div className="px-6 pb-4">
                                        <div className="border-t pt-4">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <Search className="h-12 w-12 mx-auto" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                No FAQs found
                            </h3>
                            <p className="text-gray-600">
                                Try adjusting your search terms or selecting a different category.
                            </p>
                        </div>
                    )}
                </div>

                {/* Contact Section */}
                <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Still have questions?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Can't find the answer you're looking for? Our customer support team is here to help.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Live Chat */}
                        <div className="text-center">
                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <MessageCircle className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Chat with our support team in real-time
                            </p>
                            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                Start Chat
                            </button>
                        </div>

                        {/* Phone Support */}
                        <div className="text-center">
                            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Phone className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Mon-Sat, 9am-8pm PKT
                            </p>
                            <a href="tel:+923001234567" className="text-green-600 hover:text-green-700 font-medium text-sm">
                                +92 300 1234567
                            </a>
                        </div>

                        {/* Email Support */}
                        <div className="text-center">
                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Mail className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                We'll respond within 24 hours
                            </p>
                            <a href="mailto:support@vesparel.com" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                                support@vesparel.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

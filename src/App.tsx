import { useState } from "react"
import { Navbar } from "./compo/Navbar"
import { Message } from "./compo/Message"
import { HomeMainImage } from "./compo/HomeMainImage"
import { Footer } from "./compo/Footer"
import { AboutUs } from "./compo/AboutUs"
import { Catalogue } from "./compo/Catalogue"
import { FAQ } from "./compo/FAQ"

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  // Simple router function
  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutUs />
      case "catalogue":
        return <Catalogue />
      case "faq":
        return <FAQ />
      case "contact":
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
              <p className="text-gray-600">Contact page coming soon!</p>
            </div>
          </div>
        )
      default:
        return (
          <>
            <Message />
            <HomeMainImage />
          </>
        )
    }
  }

  // Handle navigation
  const handleNavigation = (page: string) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigation} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App

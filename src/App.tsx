import { Button } from "@/components/ui/button"
import { Navbar } from "./compo/Navbar"
import { Message } from "./compo/Message"
import { HomeMainImage } from "./compo/HomeMainImage"

function App() {
  return (
    <div className="">
      <Message />
      <Navbar />
      <HomeMainImage />
      {/* Add more components or content as needed */}
    </div>
  )
}

export default App

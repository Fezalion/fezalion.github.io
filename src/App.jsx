import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="relative h-auto bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 ">
      <Navbar />      
      <Home />      
      <Footer />
    </div>
  )
}

export default App

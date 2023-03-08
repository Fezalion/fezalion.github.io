import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      <Navbar />
      <div className="absolute top-0 left-0 block w-screen h-auto">
        <Home />
      </div>
      <footer className="fixed z-0 flex justify-between w-full px-5 py-5 bottom-2 text-primary-100">
        <Footer />
      </footer>
    </div>
  )
}

export default App

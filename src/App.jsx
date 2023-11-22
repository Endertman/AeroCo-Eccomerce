import './App.css'
import AppDiscount from './components/NavBar/AppDiscountBanner'
import Navbar from './components/NavBar/Navbar'
import Carousel from './components/Carrousel/Carrousel'
import Products from './components/Products/Products'



function App() {
  return (
    <>
      <AppDiscount/>
      <Navbar/>
      <Carousel/>
      <Products/>
    </>
  )
} 

export default App

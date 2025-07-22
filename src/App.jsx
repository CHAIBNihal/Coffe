import { Routes, Route } from 'react-router-dom'
import Nav from './components/NavBar/Nav'
import HeroSection from './components/HeroSection/HeroSection'
import Menu from './components/MenuCoffe/Menu'
import TestimonialSlider from './components/Testemonie/Testemonie'
import ContactUs from './components/ContactUs/ContactUs'
import Home from './Pages/Home'

function HomePage() {
  return (
    <>
      <HeroSection />
      <Menu />
      <TestimonialSlider />
      <ContactUs />
    </>
  )
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </>
  )
}

export default App

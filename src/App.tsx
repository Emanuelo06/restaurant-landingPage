import './App.css'
import Navbar from './components/Navbar'
import FirstBackground from './assets/firstBackground.jpg'
import Hero from './components/Hero'
import Dishes from './components/Dishes'
import ChefPage from './components/ChefPage'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
 
  return (
    <div>
      <section className='sm:p-3 p-1  bg-cover'
      id='hero'
      style={{ backgroundImage: `url(${FirstBackground})` }} >
         <Navbar/>
         <Hero/>
      </section>
      <Dishes/>
      <ChefPage/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App

import './App.css'
import Dashboard from './components/sections/Dashboard'
import FAQ from './components/sections/FAQ'
import Features from './components/sections/Features'
import Footer from './components/sections/Footer'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import WaitLits from './components/sections/WaitList'

function App() {

  return (
    <div className='w-full'>
      <Header />

      <Hero />

      <WaitLits />

      <Features />

      <Dashboard />

      <FAQ />

      <Footer />
    </div>
  )
}

export default App

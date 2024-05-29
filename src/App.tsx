
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
                  <Navbar />
                  <div className='min-h-[80vh]'>
                  <Home />
                  </div>
                  <Footer />
              </BrowserRouter>
    </>
  )
}

export default App

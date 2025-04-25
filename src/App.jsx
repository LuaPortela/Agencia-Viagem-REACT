import './App.css'
import Header from './assets/componentes/Header.jsx'
import Home from './assets/componentes/Home.jsx'
import Footer from './assets/componentes/Footer.jsx'
import Escocia from './assets/componentes/Escocia.jsx'
import Aruba from './assets/componentes/Aruba.jsx'
import Muralhas from './assets/componentes/Muralhas.jsx'
import GrandCanyon from './assets/componentes/GrandCanyon.jsx'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App () {


  return (
    <main>
      <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Escocia' element={<Escocia/>} />
      <Route path='/Aruba' element={<Aruba/>} />
      <Route path='/GrandCanyon' element={<GrandCanyon/>} />
      <Route path='/Muralhas' element={<Muralhas/>} />
      </Routes>
      <Footer/>
      </Router>
    </main>
  )
}

export default App

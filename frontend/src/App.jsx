import React from 'react'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import IsLoggedIn from './routes/IsLoggedIn'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <IsLoggedIn>
              <Home />
            </IsLoggedIn>
          } />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/products/:id' element={<ProductPage />} />
          <Route path='/cart' element={
            <IsLoggedIn>
              <CartPage/>
            </IsLoggedIn>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App
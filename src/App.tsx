
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import CartPage from './Pages/CartPage'
import { useState } from 'react'
import Login from './Pages/Login'
import { CartProvider } from './Context/CartContext'
import ProductDetailPage from './Pages/ProductDetail'
import WishListPage from './Pages/WishListPage'
import OrderSuccessPage from './Pages/orderSuccessPage'
import { WishListProvider } from './Context/WishListContext'

function App() {
  const [login, setLogin] = useState<any>(false)
  // const [cart, setCart] = useState<any[]>([])

  return (
    <>

      <CartProvider>
        <WishListProvider>
          <BrowserRouter>
            <Routes>
              
              <Route path='/login' element={login ? <HomePage /> : <Login setLogin={setLogin} />} />
              <Route path='/' element={<HomePage />} />
              <Route path='/productdetail/:productId' element={<ProductDetailPage login={login} />} />
              <Route path='/cart' element={login ?<CartPage />: <Login setLogin={setLogin} />} />
              <Route path='/wishlist' element={<WishListPage />} />
              <Route path='/success' element={<OrderSuccessPage />} />

            </Routes>
          </BrowserRouter>
        </WishListProvider>
      </CartProvider>
    </>
  )
}

export default App

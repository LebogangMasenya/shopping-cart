import ProductsPage from './pages/ProductPage'
import CartProvider from './hooks/provider/CartProvider'
import './App.css'

function App() {

  return (
    <CartProvider>
     <ProductsPage />
    </CartProvider>
  )
}

export default App

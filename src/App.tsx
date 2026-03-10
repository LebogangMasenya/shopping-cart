import ProductsPage from './pages/ProductPage'
import './App.css'
import {store} from "./app/store"
import { Provider } from 'react-redux'
function App() {

  return (
    <Provider store={store}>

     <ProductsPage />
     </Provider>
  )
}

export default App

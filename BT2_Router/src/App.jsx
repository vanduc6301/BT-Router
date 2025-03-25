import React from 'react'
import { BrowserRouter,Routes,Route} from "react-router";
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

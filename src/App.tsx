import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { SearchPage } from "./pages/SearchPage"
import { ProductDetails } from "./pages/ProductDetails"
// import { ProductContent } from "./component/Products/ProductContent"

function App() {
 

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage/>}></Route>
          <Route path="/product/:slug" element={<ProductDetails />} ></Route>
        </Routes>
    </BrowserRouter>
        
     
    </>
  )
}

export default App

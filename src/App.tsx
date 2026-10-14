import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { SearchPage } from "./pages/SearchPage"
import { ProductDetails } from "./pages/ProductDetails"
import { SignUpPages } from "./pages/SignupPage"
import { VerificationEmail } from "./component/LoginDetails/VerificationEmail"
import { ProductListStyle } from "./component/LoginDetails/ProductListStyle"
import { AccountSet } from "./component/LoginDetails/AllSet"
import { RegisterFormDetails } from "./component/LoginDetails/RegisterFormDetails"
import { ShoppingCart } from "./pages/ShoppingCard"
import { MainLayouts } from "./component/layouts/MainLayouts"


function App() {
 

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route element ={<MainLayouts/>} >
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/search" element={<SearchPage/>}></Route>
            <Route path="/product/:slug" element={<ProductDetails />} ></Route>
            <Route path="/shoppingcart" element={<ShoppingCart/>}></Route>
            <Route path="/login" element={<SignUpPages />}></Route>
            <Route path="/signup" element={<RegisterFormDetails />}></Route>
            <Route path="/emailverify" element={<VerificationEmail />}></Route>
            <Route path="/style" element={<ProductListStyle />}></Route>
            <Route path="/complete" element={<AccountSet />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
        
     
    </>
  )
}

export default App

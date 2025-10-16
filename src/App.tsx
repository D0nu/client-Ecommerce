import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/sign-up" element={ <SignUp /> }/>
      </Routes>
      <Footer />
      </BrowserRouter> 
    </div>
  )
}

export default App
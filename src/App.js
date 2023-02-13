import { BrowserRouter,Routes,Route } from "react-router-dom";

import './App.css'
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import User from "./pages/User";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import Aside from "./components/Aside";


function App() {

  return (
    <div id="App">
      <BrowserRouter>
      <div>
      <Header/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/user/signIn" element={<SignIn/>}/>
          </Routes>
        </div>
        <Aside/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

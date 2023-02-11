import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { children } from "react";

function App({children}) {
  return (
    <div id="wrap">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          {children}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

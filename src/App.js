import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import SignUpPage from "./pages/signPages/SignUpPage";
import SignInPage from "./pages/signPages/SignInPage";
import CartPage from "./pages/cartPage/CartPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<SignUpPage />} />
        <Route path="/entrar" element={<SignInPage />} />
        <Route path="/carrinho" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

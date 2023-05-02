import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import SignUpPage from "./pages/signPages/SignUpPage";
import SignInPage from "./pages/signPages/SignInPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<SignUpPage />} />
        <Route path="/entrar" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

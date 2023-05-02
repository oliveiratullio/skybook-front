import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import SignUpPage from "./pages/signUpPage/SignUpPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

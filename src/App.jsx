import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/cars/homepage/Homepage";
import InsuranceQuote from "./pages/cars/insurancepage/InsuranceQuote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/get-a-quote-page" element={<InsuranceQuote />} />
    </Routes>
  );
}

export default App;

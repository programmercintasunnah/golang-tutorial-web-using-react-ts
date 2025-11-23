import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InstallGolang from "./pages/InstallGolang";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/install-golang" element={<InstallGolang />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InstallGolang from "./pages/InstallGolang";
import CreateProject from "./pages/CreateProject";
import EnvDatabase from "./pages/EnvDatabase";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/install-golang" element={<InstallGolang />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/env-database" element={<EnvDatabase />} />
      </Routes>
    </BrowserRouter>
  );
}

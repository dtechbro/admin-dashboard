import { Routes, Route } from "react-router-dom";
import Home from "./home";
import NewCard from "./pages/new-card";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-card" element={<NewCard />} />
    </Routes>
  );
}

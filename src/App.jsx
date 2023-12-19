import Home from "../pages/home/home";
import View from "../pages/View/view";
import { Routes,Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </div>
  );
}

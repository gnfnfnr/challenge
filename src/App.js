import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Pay from "./Pay";
import Result from "./Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pay />} />
        <Route path="/pay" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

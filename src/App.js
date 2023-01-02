import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Pay from "./Pay";
import Result from "./Result";
import Send from "./Send";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Pay />} />
        <Route path="/pay" element={<Result />} /> */}
        <Route path="/" element={<Send />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

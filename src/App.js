import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { GlobalStyle } from "./global-style";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

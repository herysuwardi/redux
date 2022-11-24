import { Routes, Route } from "react-router-dom";

import Navs from "./components/Navs";
import Home from "./pages/Home";
import Count from "./pages/Count";

function App() {
  return (
    <>
      <Navs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Count />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Market from "../../pages/Market/Market";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/market" element={<Market />}></Route>
      </Routes>
    </>
  );
}

export default App;

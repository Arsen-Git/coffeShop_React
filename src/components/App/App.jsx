import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Market from "../../pages/Market/Market";
import Product from "../../pages/Product/Product";
import React from "react";
import { ROUTS } from "../../API";
import axios from "axios";

function App() {
  const [selectedProduct, setSelectedProduct] = React.useState({});
  const [bestsellers, setBestsellers] = React.useState([]);
  const [items, setItems] = React.useState([]);

  const onSelectProduct = (item) => {
    setSelectedProduct(item);
  };

  React.useEffect(() => {
    axios.get(ROUTS.allItems).then((res) => setItems(res.data));
    axios.get(ROUTS.bestsellers).then((res) => setBestsellers(res.data));
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home items={bestsellers} onSelectProduct={onSelectProduct} />
          }
        ></Route>
        <Route
          path="/market"
          element={<Market items={items} onSelectProduct={onSelectProduct} />}
        ></Route>
        <Route
          path="/product"
          element={<Product product={selectedProduct} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

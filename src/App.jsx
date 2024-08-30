import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Products from "./Pages/Products";
import RootLayout from "./Pages/RootLayout";
import Error from "./Pages/Error";
import ProductsDetails from "./Pages/ProductsDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<RootLayout />>
          <Route index element=<HomePage /> />
          <Route path="Products" element=<Products /> />
          <Route path="Products/:Id" element=<ProductsDetails/> />
        </Route>
        <Route path="*" element=<Error /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

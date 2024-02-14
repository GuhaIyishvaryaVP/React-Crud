import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import ProductOverview from "../pages/ProductOverview";

const appRoutes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "add-product", element: <AddProduct /> },
      {
        path: "products/edit-product/:productId",
        element: <EditProduct />,
      },
      {
        path: "products/:productId",  // declared params(parameter) here
        element: <ProductOverview />,
      },
    ],
  },
]);

export default appRoutes;

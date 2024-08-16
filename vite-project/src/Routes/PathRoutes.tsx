import { Home } from "../Home";
import CartPage from "../page/CartPage";
import CheckoutPage from "../page/CheckoutPage";
import { ProductDetail } from "../page/ProductDetail";
import { Products } from "../page/ProductPage";

// const Host = import.meta.env.VITE_HOST ?? "/";
const Host = "/";

export const PathPublicRouter = {
  home: `${Host}`,
  product: `${Host}productpage/`,
  productDetail: `${Host}productdetailpage/`,
  cart: `${Host}cartpage/`,
  checkout: `${Host}checkoutPage/`,
};

export const PublicRouter = [
  {
    id: 0,
    path: PathPublicRouter.home,
    element: <Home />,
  },
  {
    id: 1,
    path: PathPublicRouter.product,
    element: <Products />,
  },
  {
    id: 2,
    path: PathPublicRouter.productDetail,
    element: <ProductDetail />,
  },
  {
    id: 3,
    path: PathPublicRouter.cart,
    element: <CartPage />,
  },
  {
    id: 4,
    path: PathPublicRouter.checkout,
    element: <CheckoutPage />,
  },
];

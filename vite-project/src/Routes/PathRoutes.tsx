import { Home } from "../Home";
import { ProductDetail } from "../ProductDetail";
import { Products } from "../ProductPage";

// const Host = import.meta.env.VITE_HOST ?? "/";
const Host = "/";

export const PathPublicRouter = {
  home: `${Host}`,
  product: `${Host}productpage/`,
  productDetail: `${Host}productdetailpage/`,
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
];

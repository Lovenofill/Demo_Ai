import { Home } from "../Home";
import { Products } from "../ProductPage";

// const Host = import.meta.env.VITE_HOST ?? "/";
const Host = "/";

export const PathPublicRouter = {
  home: `${Host}`,
  product: `${Host}productpage/`,
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
];

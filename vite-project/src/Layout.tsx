import { Search, ShoppingCart, User } from "lucide-react";
import { PathPublicRouter } from "./Routes/PathRoutes";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import logo from "./assets/logo.svg";
import itemStore from "./stores/ItemStore";
import { observer } from "mobx-react-lite";

export const LayoutPage: React.FC<{ children: ReactNode }> = observer(
  ({ children }: unknown) => {
    return (
      <>
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <img src={`${logo}`} width="50px" />
              <span className="ml-2 text-xl font-semibold text-gray-800">
                <Link to={PathPublicRouter.home}>ร้านประหยัด</Link>
              </span>
            </div>
            <ul className="flex space-x-4">
              <li>
                <Link to={PathPublicRouter.home}>หน้าหลัก</Link>
              </li>
              <li>
                <Link to={PathPublicRouter.product}>สินค้า</Link>
              </li>
              {/* <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                BLOG
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                CONTACT
              </a>
            </li> */}
            </ul>
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-600" />
              <Link to={PathPublicRouter.cart}>
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                {itemStore.itemCount !== 0 && (
                  <div className="absolute top-2 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900">
                    {itemStore.itemCount}
                  </div>
                )}
              </Link>
              <User className="h-5 w-5 text-gray-600" />
            </div>
          </nav>
        </header>
        <main id="main" style={{ margin: 20, flex: 1 }}>
          {children}
        </main>
      </>
    );
  }
);

import { Search, ShoppingCart, User } from "lucide-react";
import { PathPublicRouter } from "./Routes/PathRoutes";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

export const LayoutPage: React.FC<{ children: ReactNode }> = ({ children }: unknown) =>{
    return(
        <>
         <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <svg
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-2 text-xl font-semibold text-gray-800">
              <Link to={PathPublicRouter.home}> EcoShop</Link>
              </span>
            </div>
            <ul className="flex space-x-4">
              <li>
              <Link to={PathPublicRouter.home}>HOME</Link>
              </li>
              <li>
                <Link to={PathPublicRouter.product}> SHOP</Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  BLOG
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-600" />
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <User className="h-5 w-5 text-gray-600" />
            </div>
          </nav>
        </header>
        <main id="main" style={{ margin: 20, flex: 1 }}>{children}</main>
        </>
    )
}
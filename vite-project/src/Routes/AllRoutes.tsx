import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRouter } from "./PathRoutes";
import { LayoutPage } from "../Layout";

export const AllRoute = () => {
  return (
    <>
      <BrowserRouter>
        <LayoutPage>
          <Routes>
            {PublicRouter.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} />
            ))}
          </Routes>
        </LayoutPage>
      </BrowserRouter>
    </>
  );
};

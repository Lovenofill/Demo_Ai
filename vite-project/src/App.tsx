import { ToastContainer } from "react-toastify";
import { AllRoute } from "./Routes/AllRoutes";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import itemStore from "./stores/ItemStore";

const App: React.FC = () => {
  useEffect(() => {
    const storedItemsString = window.localStorage.getItem("product");
    itemStore.getItem(storedItemsString ? JSON.parse(storedItemsString) : []);
  }, []);

  return (
    <>
      <AllRoute />
      <ToastContainer />
    </>
  );
};

export default App;

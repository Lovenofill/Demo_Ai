import { ToastContainer } from "react-toastify";
import { AllRoute } from "./Routes/AllRoutes";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import itemStore from "./stores/ItemStore";

const App: React.FC = () => {
  useEffect(() => {
    itemStore.getItem(JSON.parse(window.localStorage.getItem("product")) || []);
  }, []);

  return (
    <>
      <AllRoute />
      <ToastContainer />
    </>
  );
};

export default App;

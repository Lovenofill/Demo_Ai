import { ToastContainer } from "react-toastify";
import { AllRoute } from "./Routes/AllRoutes";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <>
      <AllRoute />
      <ToastContainer />
    </>
  );
};

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Компоненти
// Public Pages
// import WelcomePage from "./pages/WelcomePage/WelcomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TablePage from "./pages/TablePage/TablePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
// Private Pages
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import CabinetPage from "./pages/CabinetPage/CabinetPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<TablePage />} />
          {/* <Route index element={<WelcomePage />} /> */}
          <Route path="registration" element={<RegisterPage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="cabinet" element={<CabinetPage />} />
          <Route path="materials" element={<AddItemPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer
        stacked
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </>
  );
}

export default App;

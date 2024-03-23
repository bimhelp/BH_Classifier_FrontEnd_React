import { lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute, PublicRoute } from "./services";

// Компоненти
// Public Pages
// Завантаження всього додатку
// import WelcomePage from "./pages/WelcomePage/WelcomePage";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import LogInPage from "./pages/LogInPage/LogInPage";
// import ErrorPage from "./pages/ErrorPage/ErrorPage";
// import TablePage from "./pages/TablePage/TablePage";
// import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
// import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
// Private Pages
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import CabinetPage from "./pages/CabinetPage/CabinetPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
// Динамічне завантаження додатку
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LogInPage = lazy(() => import("./pages/LogInPage/LogInPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));
const MaterialPage = lazy(() => import("./pages/MaterialPage/MaterialPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage/ProjectsPage"));
const ServicePage = lazy(() => import("./pages/ServicePage/ServicePage"));
const ProjectDetails = lazy(() =>
  import("./components/ProjectDetails/ProjectDetails")
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MaterialPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route
            path="registration"
            element={<PublicRoute component={<RegisterPage />} />}
          />
          <Route
            path="login"
            element={<PublicRoute component={<LogInPage />} />}
          />
          <Route path="cabinet" element={<CabinetPage />} />
          <Route
            path="materials"
            element={<PrivateRoute component={<AddItemPage />} />}
          />
          <Route
            path="projects"
            element={<PrivateRoute component={<ProjectsPage />} />}
          />

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

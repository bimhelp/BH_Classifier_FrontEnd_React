import { lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute, PublicRoute } from "./services";

// Private Pages
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import CabinetPage from "./pages/CabinetPage/CabinetPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import Users from "./components/Users/Users";
import Script from "./components/Script/Script";
// Динамічне завантаження додатку
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const CompleteRegistrationPage = lazy(() =>
  import("./pages/CompleteRegistrationPage/CompleteRegistrationPage")
);
const LogInPage = lazy(() => import("./pages/LogInPage/LogInPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));
const MaterialPage = lazy(() => import("./pages/MaterialPage/MaterialPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage/ProjectsPage"));
const ServicePage = lazy(() => import("./pages/ServicePage/ServicePage"));
const ProjectDetails = lazy(() =>
  import("./components/ProjectDetails/ProjectDetails")
);
const MaterialInfoPage = lazy(() =>
  import("./pages/MaterialInfoPage/MaterialInfoPage")
);
const AdminPage = lazy(() => import("./pages/AdminPage/AdminPage"));

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
            path="complete-profile/:userId"
            element={<PublicRoute component={<CompleteRegistrationPage />} />}
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
            path="materials/:id"
            element={<PrivateRoute component={<MaterialInfoPage />} />}
          />
          <Route
            path="projects"
            element={<PrivateRoute component={<ProjectsPage />} />}
          />
          <Route
            path="admin-panel"
            element={<PrivateRoute component={<AdminPage />} />}
          >
            <Route
              path="users"
              element={<PrivateRoute component={<Users />} />}
            />
            <Route
              path="script"
              element={<PrivateRoute component={<Script />} />}
            />
          </Route>

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

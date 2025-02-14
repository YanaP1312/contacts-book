import "./App.css";
import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(
  () => import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;

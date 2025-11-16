import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Preloader from "../Preloader/Preloader";

export default function ProtectedRoute({
  children,
  anonymous = false,
  isLoading,
}) {
  const location = useLocation();
  const from = location.state?.from || "/";

  const { isLoggedIn } = useContext(CurrentUserContext);
  if (isLoading) {
    return <Preloader />;
  }

  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }

  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

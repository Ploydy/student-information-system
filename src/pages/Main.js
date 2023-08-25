import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
/* import PageNotFound from "../PageNotFound";
import { Spinner } from "react-bootstrap"; */

function Main() {
  /* const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); */
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      !localStorage.getItem("loggedInUser") &&
      !location.pathname.includes("coordinatorRegister") &&
      !location.pathname.includes("parentRegister") &&
      !location.pathname.includes("register")
    ) {
      
      navigate("login")
      
    }
  }, [location.pathname, navigate]);

 /*  if (loading) return <Spinner />;
  if (error) throw error;
  if (location.pathname.length === 0) return <PageNotFound />; */

  return (
    <>
      <main id="main">
        <Outlet />
      </main>
    </>
  );
}

export default Main;

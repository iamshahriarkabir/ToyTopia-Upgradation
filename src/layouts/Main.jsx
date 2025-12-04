import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";

const Main = () => {
  const location = useLocation();
  const [isRouting, setIsRouting] = useState(false);

  useEffect(() => {
    setIsRouting(true);
    const timeout = setTimeout(() => {
      setIsRouting(false);
    }, 150);

    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-250px)]">
        {isRouting ? <Loading /> : <Outlet />}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Main;

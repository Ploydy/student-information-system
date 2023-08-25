import React from "react";
import "./App.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import AuthContextProvider from "./context/AuthContext";

function App() {
 

  return (
    <>
      <ErrorBoundary>
        <AuthContextProvider>
          <Header />

          <Outlet />

          <Footer />
        </AuthContextProvider> 
      </ErrorBoundary>
    </>
  );
}
export default App;

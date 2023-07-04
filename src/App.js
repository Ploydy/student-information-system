import React from "react";
import "./App.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <section
          id="hero"
          className="d-flex align-items-center justify-content-center"
        >
          <div className="container position-relative"></div>
        </section>

        <main id="main">
          <Outlet />
        </main>

        <Footer />
      </ErrorBoundary>
    </>
  );
}
export default App;

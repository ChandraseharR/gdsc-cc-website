import React from "react";
import "./App.css";
import "@fontsource/poppins";
import Layout from "./pages/layout";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <HelmetProvider>
      <AnimatedCursor color="94, 237, 207" />
      <Router>
        {" "}
        <div className="App">
          <Layout />
        </div>
      </Router>
      <Helmet>
        <link
          href="https://db.onlinewebfonts.com/c/d19798a98d1f60a49dd4a443743af41b?family=Nyx"
          rel="stylesheet"
        />
      </Helmet>
    </HelmetProvider>
  );
}

export default App;

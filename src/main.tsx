import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { App } from "./App";

import "./styles/main.scss";

createRoot(document.getElementById("navbar")!).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
);

createRoot(document.getElementById("header")!).render(
  <StrictMode>
    <Header />
  </StrictMode>,
);

createRoot(document.getElementById("body")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

createRoot(document.getElementById("footer")!).render(
  <StrictMode>
    <Footer />
  </StrictMode>,
);

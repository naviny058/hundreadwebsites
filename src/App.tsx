import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import type { ReactElement } from "react";
import Fanta from "./pages/website/Fanta";
import Cobalt from "./pages/website/Cobalt";
import Lp from "./pages/website/Lp";
import Nexus from "./pages/website/Nexus";

function App() {
  interface AppRoute {
    path: string;
    element: ReactElement;
  }
  const routes: AppRoute[] = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/fanta", element: <Fanta /> },
    { path: "/cobalt", element: <Cobalt /> },
    { path: "/lp", element: <Lp /> },
    { path: "/nexus", element: <Nexus /> },
  ];
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;

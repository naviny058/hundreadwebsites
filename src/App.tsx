import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import type { ReactElement } from "react";
import Fanta from "./pages/website/Fanta";
import Cobalt from "./pages/website/Cobalt";
import Lp from "./pages/website/Lp";
import Nexus from "./pages/website/Nexus";
import Orbix from "./pages/website/Orbix";
import Dash from "./pages/website/Dashboard/Dash";
import SignalSales from "./pages/website/SignalSales";
import Lgpsm from "./pages/website/Lgpsm";
import Todo from "./pages/website/Todo";

function App() {
  interface AppRoute {
    path: string;
    element: ReactElement;
  }
  const routes: AppRoute[] = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/lgpsm", element: <Lgpsm /> },
    { path: "/fanta", element: <Fanta /> },
    { path: "/cobalt", element: <Cobalt /> },
    { path: "/lp", element: <Lp /> },
    { path: "/nexus", element: <Nexus /> },
    { path: "/orbix", element: <Orbix /> },
    { path: "/signal", element: <SignalSales /> },
    { path: "/dashboard", element: <Dash /> },
    { path: "/todo", element: <Todo /> },
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

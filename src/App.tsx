import { Route, Routes } from 'react-router-dom';
import './App.css'
import About from './pages/About';
import Home from './pages/Home';
import type { ReactElement } from 'react';
import Fanta from './pages/website/Fanta';

function App() {
  interface AppRoute {
    path: string,
    element: ReactElement
  };
  const routes: AppRoute[] = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/fanta", element: <Fanta /> },

  ];
  return (

    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  )
}

export default App

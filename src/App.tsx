import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

// Finish Router Tutorial 
// https://reactrouter.com/en/main/start/tutorial
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

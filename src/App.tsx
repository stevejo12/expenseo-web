import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';

import './App.css';
import Expenses from './components/Expenses/Expenses';

const router = createBrowserRouter([
  {
    path: "/",
    element: [<Sidebar />, <Home />]
  },
  {
    path: "/expenses",
    element: [<Sidebar />, <Expenses />]
  }
])

// Finish Router Tutorial 
// https://reactrouter.com/en/main/start/tutorial
function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

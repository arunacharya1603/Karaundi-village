import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Gallary from './pages/Gallary.jsx';
import Services from './pages/Services.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "gallary",
        element: <Gallary />
      },
      {
        path: "services",
        element: <Services />
      },

    
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
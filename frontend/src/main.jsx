import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import NewPost from './routes/NewPost.jsx';

const router = createBrowserRouter([{
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/new',
      element: <NewPost />,
    },
  ],
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
);

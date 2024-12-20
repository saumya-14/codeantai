import Signin from "./helper/Signin"

import Dashboard from "./helper/Dashboard"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signin />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css'
import HomePage from './pages/HomePage'
import PollingPage from './pages/polling';

const router = createBrowserRouter([
  {
    path : '/',
    element: (
      <>
        <HomePage/>
      </>
    )
  },
  {
    path : '/polling',
    element: (
      <>
        <PollingPage/>
      </>
    )
  },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
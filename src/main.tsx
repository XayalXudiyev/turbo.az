import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.tsx'
import ErrorPage from './pages/error-page.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>

    <RouterProvider router={router} />
  </Provider>
) 

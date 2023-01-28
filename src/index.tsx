import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './routes/main'
import MediaPage from './routes/media'
import ErrorPage from './components/error-page'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/media',
    element: <MediaPage />,
    errorElement: <ErrorPage />,
  },
])

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{backgroundColor: '#d9d9d9'}}>
      <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

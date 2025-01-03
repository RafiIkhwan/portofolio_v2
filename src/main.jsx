import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Loading from './Loading'
import './index.css'

const App = lazy(() => import('./App'))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
    {/* <Loading /> */}
  </React.StrictMode>
)

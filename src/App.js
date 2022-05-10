import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Category, Home, Login, Rules, Signup } from './Pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RequiresAuth } from './RequiresAuth'

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules-page" element={<Rules />} />
        <Route path="/signup-page" element={<Signup />} />
        <Route path="/login-page" element={<Login />} />
        <Route
          path="/category-page"
          element={
            <RequiresAuth>
              <Category />
            </RequiresAuth> 
          }
        />
      </Routes>
    </>
  )
}

export default App

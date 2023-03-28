import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Page/Home/Home";
import Login from "./Page/Login/LoginPage";


export function RequireAuth({ children }) {
    // Used to ensure the refreshToken is called once at a time
        // Used to ensure the refreshToken is called once at a time
        const userToken = localStorage.getItem('AUTH_TOKEN') // TODO Get user from local storage

        if (userToken === null) {
            return <Navigate to="/login" replace={true} />
        } else {
            return children;
    }
}

function App() {

//Navigation dans requireAuth
  return (
      //TODO ROUTER
      <div>
          <BrowserRouter>
              <Routes>
                      <Route index element={<Home />} />
                      <Route path="login" element={<Login />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}
export default App;

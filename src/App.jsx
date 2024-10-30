import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import WithAuth from "./Hoc/WithAuth";
import Profile from "./pages/Profile";

function App() {
  const AuthHome = WithAuth(Home);
  const AuthProfile = WithAuth(Profile);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Register />} />
          <Route path="/home" element={<AuthHome />} />
          <Route path="/profile" element={<AuthProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

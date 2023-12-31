
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import { useEffect} from "react";
import { useSelector } from "react-redux";
import ProtectedRoute from './components/Route/protectedRoute';
import StudentDashboard from "./components/studentDashboard"

function App() {

  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

  }, []);
  return (
     <>
     <Router>
         <Routes>
             <Route exact path="/" element={<Home />} />
             <Route
                exact
                path="/student/dashboard"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated} user={user} loading={loading}>
                     <StudentDashboard />
                  </ProtectedRoute>
                  }
                  />
            </Routes>
     </Router>
     </>
  );
}

export default App;

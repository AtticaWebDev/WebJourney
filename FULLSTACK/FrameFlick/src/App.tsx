import { Route, Routes } from "react-router-dom";
import Timeline from "./pages/Timeline";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login"; // Ajout de l'import pour la page de connexion
import { AuthProvider } from "./context/auth";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/timeline"
          element={
            <PrivateRoute>
              <Timeline />
            </PrivateRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route // Nouvel itinéraire pour la page de connexion
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;

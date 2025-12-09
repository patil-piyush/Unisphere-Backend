import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./router/ProtectedRoute";

// Pages
import Landing from "./pages/Landing";

// User
import UserLogin from "./pages/user/Login";
import Register from "./pages/user/Register";
import UserDashboard from "./pages/user/UserDashboard";

// Club
import ClubLogin from "./pages/club/Login";
import ClubDashboard from "./pages/club/ClubDashboard";

// Admin
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<Register />} />

          <Route path="/club/login" element={<ClubLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Student protected routes */}
          <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            {/* later: /user/events, /user/profile, /user/leaderboard, etc. */}
          </Route>

          {/* Club protected routes */}
          <Route element={<ProtectedRoute allowedRoles={["club"]} />}>
            <Route path="/club/dashboard" element={<ClubDashboard />} />
            {/* later: /club/events, /club/attendance, /club/members, etc. */}
          </Route>

          {/* Admin protected routes */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            {/* later: /admin/clubs, /admin/events, /admin/users, etc. */}
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

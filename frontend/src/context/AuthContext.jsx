import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // user = { id, name, role: "student" | "club" | "admin" }
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem("unisphereUser");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (err) {
        console.error("Failed to parse stored user", err);
        localStorage.removeItem("unisphereUser");
      }
    }
    setLoading(false);
  }, []);

  // Mock login for now (replace with API later)
  const login = async ({ email, password, role }) => {
    // TODO: call backend here
    const fakeUser = {
      id: "1",
      name: "Demo User",
      email,
      role, // "student" | "club" | "admin"
    };

    setUser(fakeUser);
    localStorage.setItem("unisphereUser", JSON.stringify(fakeUser));
    return fakeUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("unisphereUser");
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

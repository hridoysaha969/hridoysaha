"use client";
import { useAuth } from "#/contexts/AuthContext";
import { redirect } from "next/navigation";
function PrivateRoute({ children, redirectTo }) {
  // return currentUser ? children : redirect(redirectTo);
  return children;
}

export default PrivateRoute;

"use client";
const { useState, useEffect } = require("react");

const useAuth = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function fetchToken() {
      const res = await fetch("/api/get-user-token"); // Call your API
      if (res.ok) {
        const data = await res.json();
        setToken(data.token);
      }
    }

    fetchToken();
  }, []);

  useEffect(() => {
    if (token) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [token]);

  return isLoggedin;
};

export default useAuth;

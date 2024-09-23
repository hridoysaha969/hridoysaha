"use client";
import Cookies from "js-cookie";
const { useState, useEffect } = require("react");

const useAuth = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const token = Cookies.get("_hs_User_access_token");
  useEffect(() => {
    console.log(token);
    if (token) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [token]);

  return isLoggedin;
};

export default useAuth;

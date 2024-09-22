"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { jwtVerify } from "jose";

function useAuth() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const token = Cookies.get("_hs_User_access_token");
  }, []);

  return <div>useAuth</div>;
}

export default useAuth;

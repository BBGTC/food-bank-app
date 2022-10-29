import React, { useState, useEffect } from "react";

export type UseAuth = {
  isAuthenticated : boolean,
  setIsAuthenticated : React.Dispatch<React.SetStateAction<boolean>>
};

export const useAuth = (newAuthValue: boolean): UseAuth => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(newAuthValue);
  }, [newAuthValue]);

  return {isAuthenticated, setIsAuthenticated};
};
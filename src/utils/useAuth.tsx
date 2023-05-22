import { useEffect, useContext, useState } from "react";
import { useUser, User } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();
  useEffect(() => {
    const storedUser = getItem("user");
    if (storedUser) {
            const parsedUser = JSON.parse(storedUser) as User; // Assuming User is the correct type
      addUser(parsedUser);
      console.log(storedUser)
      console.log(parsedUser)
              
    }
  }, []);

  const setUser = (user: User) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, setUser, logout };
};



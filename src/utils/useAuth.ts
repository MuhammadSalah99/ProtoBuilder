import { useEffect, useContext } from "react";
import { useUser, User } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
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


import { createContext } from "react";
import { User } from "../utils/useUser";

interface AuthContext {
  user: User | null;
  setUser: (user2: User | null) => void;
  logout: () => void
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
    logout: () => {}
});


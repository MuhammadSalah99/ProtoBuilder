import { useContext , useState} from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export interface User {
    id: number;
    name: string;
    email: string;
    authToken: string;
    role: string;
}

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);
    const { setItem } = useLocalStorage();
    const addUser = (user: User | null) => {
        setUser(user);
        setItem("user", JSON.stringify(user));
    };

    const logout = () => {
        setUser(null);
        setItem("user", "");
    };

    return { user, addUser, logout };
};



import { useEffect,  useState } from "react";
import { useUser, User } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
    const { user, addUser, logout } = useUser();
    const { getItem } = useLocalStorage();
    const [userDet, setUserDet ] = useState<User>()
    useEffect(() => {
        const storedUser = getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser) as User; // Assuming User is the correct type
            addUser(parsedUser);
            setUserDet(parsedUser)
            console.log(storedUser)
            console.log(userDet)
        }
    }, []);

    const setUser = (user: User | null) => {
        addUser(user);
    };

    const _logout = () => {
        logout();
    };

    return { user, setUser, _logout };
};



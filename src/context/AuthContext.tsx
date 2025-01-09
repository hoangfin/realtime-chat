import { createContext, PropsWithChildren, useContext, useState } from "react";
import { UserInfo } from "firebase/auth";

type AuthContextProps = {
	user: UserInfo | null;
	login: (user: UserInfo) => void;
	logout: () => void;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
	const [user, setUser] = useState<UserInfo | null>(null);

	const login = (user: UserInfo) => setUser(user);
	const logout = () => setUser(null);

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth(): AuthContextProps | undefined {
	const context = useContext(AuthContext);
	return context;
}

import { Context, createContext, ReactNode, useContext, useState } from "react";

type User = {
	id: number;
	name: string;
	email: string;
};

type AuthContextProps = {
	user: User | null;
	login: (user: User) => void;
	logout: () => void;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);

	const login = (user: User) => setUser(user);
	const logout = () => setUser(null);

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth: () => AuthContextProps | undefined = () => {
	const context = useContext(AuthContext);
	return context;
}
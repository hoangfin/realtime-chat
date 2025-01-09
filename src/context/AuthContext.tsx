import { createContext, PropsWithChildren, useContext, useState } from "react";
import { auth } from "@src/lib/firebase";
import {
	createUserWithEmailAndPassword,
	User,
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth";

type AuthContextProps = {
	user: User | null;
	loading: boolean;
	register: (email: string, password: string) => Promise<User>;
	login: (email: string, password: string) => Promise<User>;
	logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const register = async (email: string, password: string) => {
		setLoading(true);
		try {
			const { user } = await createUserWithEmailAndPassword(auth, email, password);
			setUser(user);
			return user;
		} catch (error) {
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const login = async (email: string, password: string) => {
		setLoading(true);

		try {
			const { user } = await signInWithEmailAndPassword(auth, email, password);
			setUser(user);
			return user;
		} catch (error) {
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const logout = async () => {
		setLoading(true);
		await signOut(auth);
		setLoading(false);
	};

	return (
		<AuthContext.Provider value={{ user, loading, register, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth(): AuthContextProps | undefined {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("Failed to create context for useAuth hook");
	}

	return context;
}

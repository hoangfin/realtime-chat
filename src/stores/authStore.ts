import { create } from "zustand";
import { auth, createUser, getUser } from "@src/services/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { User } from "@src/types";

type AuthState = {
	user: User | null;
	setUser: (user: User | null) => void;
	login: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	register: (username: string, email: string, password: string) => Promise<void>;
	isLoggingIn: boolean;
	isLoggingOut: boolean;
	isRegistering: boolean;
	setLoggingIn: (value: boolean) => void;
	setLoggingOut: (value: boolean) => void;
	setRegistering: (value: boolean) => void;
};

export const useAuth = create<AuthState>((set) => {
	const login = async (email: string, password: string) => {
		set(() => ({ isLoggingIn: true }));

		try {
			const { user: firebaseUser } = await signInWithEmailAndPassword(auth, email, password);
			const user = await getUser(firebaseUser.uid);
			set(() => ({ user, isLoggingIn: false }));
		} catch (error) {
			set(() => ({ isLoggingIn: false }));
			throw error;
		}
	};

	const logout = async () => {
		set(() => ({ isLoggingOut: true }));
		await signOut(auth);
		set(() => ({ isLoggingOut: false }));
	};

	const register = async (username: string, email: string, password: string) => {
		set(() => ({ isRegistering: true }));

		try {
			const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
			const user = await createUser(username, firebaseUser.email!, firebaseUser.uid);
			set(() => ({ user, isRegistering: false }));
		} catch (error) {
			set(() => ({ isRegistering: false }));
			throw error;
		}
	};

	return {
		user: null,
		setUser: (user: User | null) => set({ user }),
		login,
		logout,
		register,
		isLoggingIn: false,
		isLoggingOut: false,
		isRegistering: false,
		setLoggingIn: (value: boolean) => set({ isLoggingIn: value }),
		setLoggingOut: (value: boolean) => set({ isLoggingOut: value }),
		setRegistering: (value: boolean) => set({ isRegistering: value })
	};
});

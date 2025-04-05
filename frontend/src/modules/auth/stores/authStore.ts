import { create } from "zustand";
import { auth, createUser, getUser } from "@app/common/services/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { User } from "@app/types";

export type AuthState = {
	user: User | null,
	setUser: (user: User | null) => void,
	login: (email: string, password: string) => Promise<void>,
	logout: () => Promise<void>,
	register: (username: string, email: string, password: string) => Promise<void>,
	isLoggingIn: boolean,
	isLoggingOut: boolean,
	isRegistering: boolean,
	setLoggingIn: (value: boolean) => void,
	setLoggingOut: (value: boolean) => void,
	setRegistering: (value: boolean) => void,
	loginError: Error | null,
	registerError: Error | null,
	setLoginError: (error: Error | null) => void,
	setRegisterError: (error: Error | null) => void
};

export const useAuth = create<AuthState>((set) => {
	const login = async (email: string, password: string) => {
		set(() => ({ isLoggingIn: true }));

		try {
			const { user: firebaseUser } = await signInWithEmailAndPassword(auth, email, password);
			const user = await getUser(firebaseUser.uid);
			set(() => ({ user, isLoggingIn: false }));
		} catch (error) {
			const err = new Error((error as { message: string }).message);
			set(() => ({ isLoggingIn: false, loginError: err }));
			throw err;
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
			const err = new Error((error as { message: string }).message);
			set(() => ({ isRegistering: false, registerError: err }));
			throw err;
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
		setRegistering: (value: boolean) => set({ isRegistering: value }),
		loginError: null,
		registerError: null,
		setLoginError: (error: Error | null) => set({ loginError: error }),
		setRegisterError: (error: Error | null) => set({ registerError: error }),
	};
});

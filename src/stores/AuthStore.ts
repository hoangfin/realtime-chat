import { create } from "zustand";
import { auth } from "@src/lib/firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth";

type User = {
	username: string;
    email: string;
    id: string;
    avatarURL: string | null;
	// lastSeen: Date
};

type AuthStore = {
	user: User | null;
	register: (email: string, password: string) => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	isRegistering: boolean;
	isLoggingIn: boolean;
	isLoggingOut: boolean;
};

export const authStore = create<AuthStore>((set) => {
	const user = null;

	const register = async (email: string, password: string) => {
		set((authStore) => ({ ...authStore, isRegistering: true }), true);

		try {
			const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);

			const user: User = {
				username: firebaseUser.displayName!,
				email: firebaseUser.email!,
				id: firebaseUser.uid,
				avatarURL: firebaseUser.photoURL
				// lastSeen: firebaseUser.metadata.lastSignInTime
			};
			set((authStore) => ({ ...authStore, user, isRegistering: false }), true);
		} catch (error) {
			set((authStore) => ({ ...authStore, isRegistering: false }), true);
			throw error;
		}
	};

	const login = async (email: string, password: string) => {
		set((authStore) => ({ ...authStore, isLoggingIn: true }), true);

		try {
			const { user: firebaseUser } = await signInWithEmailAndPassword(auth, email, password);

			const user: User = {
				username: firebaseUser.displayName!,
				email: firebaseUser.email!,
				id: firebaseUser.uid,
				avatarURL: firebaseUser.photoURL
				// lastSeen: firebaseUser.metadata.lastSignInTime
			};
			set((authStore) => ({ ...authStore, user, isLoggingIn: false }), true);
		} catch (error) {
			set((authStore) => ({ ...authStore, isLoggingIn: false }), true);
			throw error;
		}
	};

	const logout = async () => {
		set((authStore) => ({ ...authStore, isLoggingOut: true }), true);
		await signOut(auth);
		set((authStore) => ({ ...authStore, isLoggingOut: false }), true);
	};

	return {
		user,
		register,
		login,
		logout,
		isRegistering: false,
		isLoggingIn: false,
		isLoggingOut: false
	};
});

export function useAuth() {
	return authStore(shallow)
}

import { onAuthStateChanged } from "firebase/auth";
import { auth, getUser } from "@src/services/firebase";
import { useAuth } from "@src/stores";
import type { User } from "@src/types";

export const authLoader = (): Promise<User | null> => new Promise((resolve, reject) => {
	useAuth.getState().setLoggingIn(true);

	const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
		try {
			const user = authUser ? await getUser(authUser.uid) : null;
			useAuth.getState().setUser(user);
			resolve(user);
		} catch (err) {
			let error = err;

			if (!(err instanceof Error)) {
				error = new Error(
					(error as { message: string }).message
					|| "Unknown error occurred"
				);
			}

			reject(error);
		} finally {
			unsubscribe();
			useAuth.getState().setLoggingIn(false);
		}
	});
});

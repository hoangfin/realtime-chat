import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { HomePage, LoginPage, RegisterPage } from "@src/components/pages";
import { auth, getUser } from "@src/services/firebase";
import { useAuth } from "@src/stores";
import type { User } from "@src/types";

const authLoader = (): Promise<User | null> => new Promise((resolve, reject) => {
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

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route loader={authLoader}>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="*" />
		</Route>
	),
	{ basename: "/" }
);

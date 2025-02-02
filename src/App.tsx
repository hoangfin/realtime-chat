import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from "react-router-dom";

import { HomePage, LoginPage, RegisterPage } from "@src/components/pages";
import { authLoader } from "@src/loaders";

const router = createBrowserRouter(
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

export default function App() {
	return (
		<RouterProvider router={router} />
	);
};

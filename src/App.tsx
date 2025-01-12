import { Container, createTheme, SxProps, ThemeProvider } from "@mui/material";
import { AuthPage } from "@src/components/pages";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth, getUser } from "./services/firebase";
import { useAuth } from "./stores/AuthStore";

const theme = createTheme({
	palette: { mode: "dark" }
});

const containerSx: SxProps = {
	width: "80vw",
	minHeight: "90vh",
	margin: "5vh auto 5vh auto",
	padding: 0,
	display: "flex",
	backgroundColor: "rgba(17, 25, 40, 0.75)",
	backdropFilter: "blur(19px) saturate(180%)",
	border: "1px solid rgba(255, 255, 255, 0.125)",
	borderRadius: "12px"
};

useAuth.getInitialState().isLoggingIn = true;

export default function App() {
	const isLoggingIn = useAuth((state) => state.isLoggingIn);
	const setIsLoggingIn = useAuth((state) => state.setIsLoggingIn);
	const setUser = useAuth((state) => state.setUser);

	console.log(`isLoggingIn = ${isLoggingIn}`);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
			if (authUser) {
				try {
					const user = await getUser(authUser.uid);
					setUser(user);
				} catch (error) {

				}
			}
			console.log("setIsLoggingIn()");
			setIsLoggingIn(false);
		});

		return () => {
			unsubscribe();
		};
	}, [onAuthStateChanged, getUser, setUser, setIsLoggingIn]);

	if (isLoggingIn) {
		return <h1>...Loading</h1>;
	}

	return (
		<ThemeProvider theme={theme}>
			<Container sx={containerSx}>
				<AuthPage />
			</Container>
		</ThemeProvider>
	);
};

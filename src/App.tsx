import { Container, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme();

export default function App() {

	return (
		<ThemeProvider theme={theme}>
			<Container></Container>
		</ThemeProvider>
	);
};

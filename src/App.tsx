import { Container, createTheme, SxProps, ThemeProvider } from "@mui/material";
import { AuthPage } from "@src/components/pages";

const theme = createTheme();

const containerSx: SxProps = {
	width: "80vw",
	minHeight: "90vh",
	margin: "5vh auto 5vh auto",
	padding: "0px",
	display: "flex",
	backgroundColor: "rgba(17, 25, 40, 0.75)",
	backdropFilter: "blur(19px) saturate(180%)",
	border: "1px solid rgba(255, 255, 255, 0.125)",
	borderRadius: "12px"
};

export default function App() {

	return (
		<ThemeProvider theme={theme}>
			<Container sx={containerSx}>
				<AuthPage />
			</Container>
		</ThemeProvider>
	);
};

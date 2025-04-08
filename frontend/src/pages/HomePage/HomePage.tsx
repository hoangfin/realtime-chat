import { Container, Stack, Typography } from "@mui/material";
import { NavBar } from "./NavBar";

export function HomePage(): JSX.Element {
	return (
		<Container maxWidth="lg">
			<NavBar component="header" />
			<Stack component="main" direction="row" >
				<div>
					<Typography component="h1" variant="h3">
						Empower Connections with VietChat
					</Typography>
					<Typography>
						<strong>Real-time</strong> communication, providing both visual connection and
						immediate answers to customers inquiries
					</Typography>
					{/* <Button component={RouterLink} to="/login" variant="contained">Start Now</Button> */}
				</div>
			</Stack>
		</Container>
	);
};

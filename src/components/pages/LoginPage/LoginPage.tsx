import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FormEventHandler } from "react";
import { AnimatedBorder } from "./AnimatedBorder";

export function LoginPage(): JSX.Element {
	const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<Stack component="main" height="100vh" direction="row" justifyContent="center" alignItems="center">
			<AnimatedBorder width={450} height={360}>
				<Box borderRadius="8px" sx={{ backgroundColor: "#1c1c1c"}}>
					<Typography component="h1" variant="h5" textAlign="center">Welcome back</Typography>
					<Stack component="form" onSubmit={handleSubmit} spacing={3}>
						<TextField type="email" label="Email" size="small" />
						<TextField type="password" label="Password" size="small" />

						<Button type="submit" size="small" variant="contained">
							Sign in
						</Button>
					</Stack>

				</Box>
			</AnimatedBorder>
		</Stack>
	);
}
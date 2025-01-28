import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FormEventHandler } from "react";

export function LoginPage(): JSX.Element {
	const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<Box>
			<Typography component="h2" variant="h5" marginBottom={2}>Sign in</Typography>
			<Stack component="form" onSubmit={handleSubmit} spacing={3}>
				<TextField type="email" label="Email" size="small" required />
				<TextField type="password" label="Password" size="small" required />

				<Button type="submit" variant="contained">
					Sign in
				</Button>
			</Stack>
		</Box>
	);
}
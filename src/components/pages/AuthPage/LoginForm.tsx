import { Button, Stack, StackProps, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";

export function LoginForm(props: StackProps): JSX.Element {

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<div>
			<Typography component="h2" variant="h5" marginBottom={2}>Welcome back</Typography>
			<Stack component="form" onSubmit={handleSubmit} spacing={3} {...props}>
				<TextField type="email" label="Email" size="small" required />
				<TextField type="password" label="Password" size="small" required />
				<Button type="submit" variant="contained">
					sign in
				</Button>
			</Stack>
		</div>
	);
}

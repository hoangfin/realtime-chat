import { LoadingButton } from "@mui/lab";
import { Stack, StackProps, TextField, Typography } from "@mui/material";
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
				<TextField type="email" placeholder="Email" required />
				<TextField type="password" placeholder="Password" required />
				<LoadingButton type="submit" variant="contained">
					Sign In
				</LoadingButton>
			</Stack>
		</div>
	);
}

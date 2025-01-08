import { LoadingButton } from "@mui/lab";
import { Stack, StackProps, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";

export function RegisterForm(props: StackProps): JSX.Element {

	const handleRegister = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const { username, email, password } = Object.fromEntries(formData);

		try {

		} catch (error) {

		}
	};

	return (
		<div>
			<Typography component="h2" variant="h5" marginBottom={2}>Register</Typography>
			<Stack component="form" onSubmit={handleRegister} spacing={3} {...props}>
				<input type="file" id="avatar" />
				<TextField type="text" placeholder="Username" name="username" />
				<TextField type="email" placeholder="Email" name="email" required />
				<TextField type="password" placeholder="Password" name="password" required />
				<LoadingButton type="submit" variant="contained">
					Sign Up
				</LoadingButton>
			</Stack>
		</div>
	);
}

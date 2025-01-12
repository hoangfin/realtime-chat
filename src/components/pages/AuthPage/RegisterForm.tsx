import { LoadingButton } from "@mui/lab";
import { Stack, StackProps, TextField, Typography } from "@mui/material";
import { useAuth } from "@src/stores/AuthStore";
import { FormEvent } from "react";

export function RegisterForm(props: StackProps): JSX.Element {
	const register = useAuth((state) => state.register);
	const isRegistering = useAuth((state) => state.isRegistering);

	const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const { username, email, password } = Object.fromEntries(formData);

		try {
			await register(username as string, email as string, password as string);
		} catch (error) {
			console.log(error);
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
				<LoadingButton type="submit" loading={isRegistering} variant="contained">
					Sign Up
				</LoadingButton>
			</Stack>
		</div>
	);
}

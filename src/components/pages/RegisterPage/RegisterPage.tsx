import { Button, Stack, StackProps, styled, TextField, Typography } from "@mui/material";
import { useAuth } from "@src/stores";
import { FormEvent } from "react";

const HiddenInput = styled("input")({
	position: "absolute",
	bottom: 0,
	left: 0,
	width: 1,
	height: 1,
	overflow: "hidden",
	clipPath: "inset(50%)",
	whiteSpace: "nowrap"
});

export function RegisterPage(props: StackProps): JSX.Element {
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
				<Button
					component="label"
					role={undefined}
					variant="contained"
					tabIndex={-1}
				>
					upload avatar
					<HiddenInput type="file" />
				</Button>
				<TextField type="text" name="username" />
				<TextField type="email" name="email" required />
				<TextField type="password" placeholder="Password" name="password" required />
				<Button type="submit" loading={isRegistering} variant="contained">
					Sign Up
				</Button>
			</Stack>
		</div>
	);
}

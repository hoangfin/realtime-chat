import { Button, Stack, StackProps, styled, SxProps, TextField, TextFieldProps, Typography } from "@mui/material";
import { useAuth } from "@src/stores";
import { FormEvent } from "react";
import { UploadButton } from "./UploadButton";



const textFieldProps: TextFieldProps = {
	size: "small",
	sx: {
		"& fieldset": { borderRadius: 5 }
	}
};

export function RegisterPage(props: StackProps): JSX.Element {
	const register = useAuth((state) => state.register);
	const isRegistering = useAuth((state) => state.isRegistering);

	const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		const { username, email, password } = Object.fromEntries(formData) as {
			username: string,
			email: string,
			password: string
		};

		try {
			await register(username, email, password);

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main>
			<Typography component="h1" variant="h5" marginBottom={2}>Create an account</Typography>
			<Stack component="form" onSubmit={handleRegister} spacing={3} {...props}>
				<UploadButton />
				<TextField type="text" name="username" label="Username" {...textFieldProps} />
				<TextField type="email" name="email" label="Email" {...textFieldProps} />
				<TextField type="password" name="password" label="Password" {...textFieldProps} />
				<Button type="submit" loading={isRegistering} variant="contained" size="small">
					Submit
				</Button>
			</Stack>
		</main>
	);
};

import { type ChangeEventHandler, type FormEventHandler, useState } from "react";
import { Alert, Button, Dialog, Stack, TextField, Typography } from "@mui/material";
import { AnimatedBorder } from "./AnimatedBorder";
import { validate, type ValidationError } from "./validate";
import { useAuth } from "@src/stores";

export function LoginPage(): JSX.Element {
	const [error, setError] = useState<ValidationError>({});
	const login = useAuth((state) => state.login);
	const isLoggingIn = useAuth((state) => state.isLoggingIn);
	const loginError = useAuth((state) => state.loginError);
	const setLoginError = useAuth((state) => state.setLoginError);

	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		const inputName = event.currentTarget.getAttribute("name");

		if (inputName === "email" && error.email) {
			setError(error.password ? { password: error.password } : {});
		}

		if (inputName === "password" && error.password) {
			setError(error.email ? { email: error.email } : {});
		}
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const { email, password } = Object.fromEntries(formData) as { email: string, password: string };
		const error = validate(email, password);

		if (Object.keys(error).length > 0) {
			setError(error);
			return;
		}

		try {
			await login(email, password);
		} catch (error) {

		}
	};

	return (
		<>
			<Stack component="main" height="100vh" direction="row" justifyContent="center" alignItems="center">
				<AnimatedBorder>
					<Stack direction="column" spacing={3} padding={4} borderRadius="8px" sx={{ backgroundColor: "#1c1c1c" }}>
						<Typography component="h1" variant="h5" textAlign="center">Welcome back</Typography>
						<Stack component="form" onSubmit={handleSubmit} spacing={3}>
							<TextField
								name="email"
								label="Email"
								size="small"
								error={!!error.email}
								helperText={error.email ? error.email : ""}
								onChange={handleChange}
							/>
							<TextField
								type="password"
								name="password"
								label="Password"
								size="small"
								error={!!error.password}
								helperText={error.password ? error.password : ""}
								onChange={handleChange}
							/>
							<Button
								type="submit"
								loading={isLoggingIn}
								size="small"
								variant="contained"
							>
								Sign in
							</Button>
						</Stack>
					</Stack>
				</AnimatedBorder>
			</Stack>
			<Dialog open={!!loginError} onClose={() => setLoginError(null)}>
				<Alert severity="error" onClose={() => setLoginError(null)}>
					{loginError?.message}
				</Alert>
			</Dialog>
		</>
	);
};

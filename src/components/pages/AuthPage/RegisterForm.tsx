import { LoadingButton } from "@mui/lab";
import { Stack, StackProps, TextField, Typography } from "@mui/material";

export function RegisterForm(props: StackProps): JSX.Element {
	return (
		<div>
			<Typography component="h2" variant="h5" marginBottom={2}>Register</Typography>
			<Stack component="form" spacing={3} {...props}>
				<TextField type="text" placeholder="Username" />
				<TextField type="email" placeholder="Email" required />
				<TextField type="password" placeholder="Password" required />
				<LoadingButton type="submit" variant="contained">
					Sign Up
				</LoadingButton>
			</Stack>
		</div>
	);
}

import { LoadingButton } from "@mui/lab";
import { Stack, StackProps, TextField, Typography } from "@mui/material";

export function LoginForm(props: StackProps): JSX.Element {
	return (
		<Stack component="form" spacing={3} {...props}>
			<Typography>Welcome back</Typography>
			<TextField type="email" />
			<TextField type="password" />
			<LoadingButton variant="contained">
				Sign In
			</LoadingButton>
		</Stack>
	);
}

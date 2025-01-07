import { Box, Stack } from "@mui/material";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export function AuthPage(): JSX.Element {
	return (
		<Stack width="100%" direction={{ xs: "column", md: "row" }} alignItems="center">
			<Stack flex={1} justifyContent="center" alignItems="center">
				<LoginForm />
			</Stack>
			
			<Box
				aria-hidden="true"
				bgcolor="divider"
				width={{ xs: "80%", md: "1px" }}
				height={{ xs: "1px", md: "80%" }}
			/>

			<Stack flex={1} justifyContent="center" alignItems="center">
				<RegisterForm />
			</Stack>
		</Stack>
	);
}

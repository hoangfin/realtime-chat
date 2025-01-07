import { Divider, Stack } from "@mui/material";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export function AuthPage(): JSX.Element {
	return (
		<Stack width="100%" direction={{ sm: "column", md: "row" }} alignItems="center">
			<Stack flex={1} justifyContent="center" alignItems="center">
				<LoginForm />
			</Stack>
			<Divider
				// orientation={{ sm: "horizontal", md: "vertical" }}
				aria-hidden="true"
				sx={{
					md: { width: "80%" },
					backgroundColor: "#dddddd35"
				}}
			/>
			<Stack flex={1} justifyContent="center" alignItems="center">
				<RegisterForm />
			</Stack>
		</Stack>
	);
}

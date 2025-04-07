// const containerSx: SxProps = {
// 	width: "80vw",
// 	minHeight: "90vh",
// 	margin: "5vh auto 5vh auto",
// 	padding: 0,
// 	display: "flex",
// 	backgroundColor: "rgba(17, 25, 40, 0.75)",
// 	backdropFilter: "blur(19px) saturate(180%)",
// 	border: "1px solid rgba(255, 255, 255, 0.125)",
// 	borderRadius: "12px"
// };

import { Button, Link, Stack, Typography } from "@mui/material";
import { SideMenu } from "./SideMenu";
import { Chat } from "./Chat";
import { AccountCenter } from "./AccountCenter";
import { Header } from "./Header";
import { Link as RouterLink } from "react-router-dom";

export function HomePage(): JSX.Element {
	return (
		<>
			<Header />
			<Stack
				component="main"
				// width="95vw"
				// height="95vh"
				direction="row"
			>
				<div>
					<Typography component="h1" variant="h3">
						Empower Connections with VietChat
					</Typography>
					<Typography>
						<strong>Real-time</strong> communication, providing both visual connection and
						immediate answers to customers inquiries
					</Typography>
					<Button component={RouterLink} to="/login" variant="contained">Start Now</Button>
				</div>
				{/* <SideMenu />
				<Chat />
				<AccountCenter /> */}
			</Stack>
		</>
	);
};

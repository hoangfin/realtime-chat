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

import { Stack } from "@mui/material";
import { SideMenu } from "./SideMenu";
import { Chat } from "./Chat";
import { AccountCenter } from "./AccountCenter";

export function HomePage(): JSX.Element {
	return (
		<Stack component="main">
			<SideMenu />
			<Chat />
			<AccountCenter />
		</Stack>
	);
};

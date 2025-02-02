import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { CallOutlined, MoreHoriz, VideoCallOutlined } from "@mui/icons-material";

export function ActionBar(): JSX.Element {
	return (
		<Stack direction="row" alignItems="center" paddingX={2} paddingY={1} columnGap={8}>
			<Stack direction="row" alignItems="center" columnGap={2}>
				<Avatar alt="J">J</Avatar>
				<Typography>John Doe</Typography>
			</Stack>

			<Stack direction="row" alignItems="center">
				<IconButton size="small">
					<MoreHoriz />
				</IconButton>
				<IconButton size="small">
					<CallOutlined />
				</IconButton>
				<IconButton size="small">
					<VideoCallOutlined />
				</IconButton>
			</Stack>
		</Stack>
	);
};

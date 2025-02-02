import {
	Avatar,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText
} from "@mui/material";

export function ContactList(): JSX.Element {
	return (
		<List>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemAvatar>
						<Avatar src="" />
					</ListItemAvatar>
					<ListItemText primary="Juda Copilot"></ListItemText>
				</ListItemButton>
			</ListItem>
			<Divider component="li" />
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemAvatar>
						<Avatar src="" />
					</ListItemAvatar>
					<ListItemText primary="Juda Copilot"></ListItemText>
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemAvatar>
						<Avatar src="" />
					</ListItemAvatar>
					<ListItemText primary="Juda Copilot"></ListItemText>
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemAvatar>
						<Avatar src="" />
					</ListItemAvatar>
					<ListItemText primary="Juda Copilot"></ListItemText>
				</ListItemButton>
			</ListItem>
		</List>
	);
};

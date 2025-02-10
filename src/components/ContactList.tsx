import {
	Avatar,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	ListProps
} from "@mui/material";

type ContactListProps = ListProps & {
	// contacts: Contact[]
};

export function ContactList(props: ContactListProps): JSX.Element {
	return (
		<List {...props}>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemAvatar>
						<Avatar src="" />
					</ListItemAvatar>
					<ListItemText primary="Juda Copilot" secondary="Wow it is amazing"></ListItemText>
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

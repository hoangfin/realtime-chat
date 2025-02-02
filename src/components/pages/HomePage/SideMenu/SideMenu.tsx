import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { ActionBar } from "./ActionBar";
import { ContactList } from "./ContactList";
import { SearchBar } from "./SearchBar";

export function SideMenu(): JSX.Element {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<SwipeableDrawer
			variant="permanent"
			anchor="left"
			open={open}
			swipeAreaWidth={56}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
		>
			<ActionBar />
			<SearchBar />
			<ContactList />
		</SwipeableDrawer>
	);
};

import { Stack } from "@mui/material";
import { ActionBar } from "./ActionBar";
import { ContactList } from "@src/components";
import { SearchBar } from "./SearchBar";

export function SideMenu(): JSX.Element {

	return (
		<Stack sx={(theme) => ({ borderRight: `1px solid ${theme.palette.divider}` })}>
			<ActionBar />
			<SearchBar />
			<ContactList />
		</Stack>
	);
};

import {
	type LinkProps as MuiLinkProps,
	type StackProps,
	Link as MuiLink,
	Stack
} from "@mui/material";

import {
	type LinkProps as RouterLinkProps,
	Link as RouterLink
} from "react-router-dom";

import { HomeOutlined, Logo } from "@app/assets/icons";

type LinkProps = Omit<MuiLinkProps, "href"> & RouterLinkProps;

const Link = (props: LinkProps): JSX.Element => {
	return (
		<MuiLink
			component={RouterLink}
			display="flex"
			justifyContent="center"
			alignItems="center"
			textAlign="center"
			{...props}
		>
		</MuiLink>
	);
}

export function NavBar(props: StackProps): JSX.Element {
	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			whiteSpace="nowrap"
			paddingY={2}
			{...props}
		>
			<Link to="/">
				<Logo sx={{ display: "block" }}/>
			</Link>

			<Stack component="nav" direction="row" bgcolor="#DBDBDB" borderRadius={2}>
				<Link to="/"><HomeOutlined /></Link>
				<Link to="/about">About</Link>
				<Link to="/features">Features</Link>
				<Link to="/contact">Contact</Link>
			</Stack>

			<Link
				to="/login"
				sx={{
					borderRadius: "10px"
				}}
			>
				Sign In
			</Link>
		</Stack>
	);
};

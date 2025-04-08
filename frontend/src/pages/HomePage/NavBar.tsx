import { Link, Stack, StackProps, type SxProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { HomeOutlined, Logo } from "@app/assets/icons";

const LinkSxProps: SxProps = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	paddingX: 1.5,
	paddingY: 1,
	textAlign: "center",
};

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
			<Link component={RouterLink} to="/">
				<Logo sx={{ display: "block" }}/>
			</Link>

			<Stack component="nav" direction="row" bgcolor="#DBDBDB" borderRadius={2}>
				<Link component={RouterLink} to="/" sx={LinkSxProps}>
					<HomeOutlined />
				</Link>
				<Link component={RouterLink} to="/about" sx={LinkSxProps}>About</Link>
				<Link component={RouterLink} to="/features" sx={LinkSxProps}>Features</Link>
				<Link component={RouterLink} to="/contact" sx={LinkSxProps}>Contact</Link>
			</Stack>

			<Link
				component={RouterLink}
				to="/login"
				sx={{
					...LinkSxProps,
					borderRadius: "10px"
				}}
			>
				Sign In
			</Link>
		</Stack>
	);
};

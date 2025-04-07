import { HomeOutlined } from "@app/assets/icons";
import { Link, Stack, SxProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const LinkSxProps: SxProps = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	paddingX: 1.5,
	paddingY: 1,
	bgcolor: "#f8f8f8",
	textAlign: "center",
};

export function Header(): JSX.Element {
	return (
		<Stack
			component="header"
			direction="row"
			justifyContent="space-between"
			whiteSpace="nowrap"
			padding={2}
		>
			<Stack component="nav" direction="row">
				<Link component={RouterLink} to="/" sx={{ ...LinkSxProps, borderRadius: "10px 0 0 10px"}}>
					<HomeOutlined />
				</Link>
				<Link component={RouterLink} to="/about" sx={LinkSxProps}>About</Link>
				<Link component={RouterLink} to="/features" sx={LinkSxProps}>Features</Link>
				<Link component={RouterLink} to="/contact" sx={{ ...LinkSxProps, borderRadius: "0 10px 10px 0"}}>Contact</Link>
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

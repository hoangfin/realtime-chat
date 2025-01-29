import { Box, BoxProps, keyframes, styled } from "@mui/material";

const rotate = keyframes(`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`);

const Root = styled(Box)({
	position: "relative",
	padding: "4px",
	display: "flex",
	flexDirection: "column",
	columnGap: 3,
	borderRadius: "8px",
	overflow: "hidden",
	// "&::before": {
	// 	content: "''",
	// 	position: "absolute",
	// 	top: "-50%",
	// 	left: "-50%",
	// 	width: "100%",
	// 	height: "100%",
	// 	background: "linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff)",
	// 	zIndex: -1,
	// 	transformOrigin: "bottom right",
	// 	animation: `${rotate} 6s linear infinite`
	// },
	// "&::after": {
	// 	content: "''",
	// 	position: "absolute",
	// 	top: "-50%",
	// 	left: "-50%",
	// 	width: "100%",
	// 	height: "100%",
	// 	background: "linear-gradient(0deg, transparent, transparent, #ff2770, #ff2770, #ff2770)",
	// 	zIndex: -1,
	// 	transformOrigin: "bottom right",
	// 	animation: `${rotate} 6s linear infinite`,
	// 	animationDelay: "-3s"
	// }
});

const Fan = styled(Box)({
	position: "absolute",
	top: "-50%",
	left: "-50%",
	width: "100%",
	height: "100%",
	background: "linear-gradient(0deg, transparent, transparent, #ff2770, #ff2770, #ff2770)",
	zIndex: 1,
	transformOrigin: "bottom right",
	animation: `${rotate} 6s linear infinite`,
});

export const AnimatedBorder = (props: BoxProps): JSX.Element => {
	const { children, ...rest } = props;

	return (
		<Root {...rest}>
			<Fan sx={{ background: "linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff)" }} />
			<Fan sx={{ background: "linear-gradient(0deg, transparent, transparent, #ff2770, #ff2770, #ff2770)", animationDelay: "-1.5s" }}  />
			<Fan sx={{ background: "linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff)", animationDelay: "-3s" }}  />
			<Fan sx={{ background: "linear-gradient(0deg, transparent, transparent, #ff2770, #ff2770, #ff2770))", animationDelay: "-4.5s" }} />
			<Box position="relative" zIndex={2}>{children}</Box>
		</Root>
	);
}
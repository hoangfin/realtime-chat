import { createTheme } from "@mui/material";

export const theme = createTheme({
	typography: {
		fontFamily: "Poppins",
		h1: { fontWeight: 900, fontSize: "5rem", lineHeight: "1" },
		h2: { fontWeight: 900, fontSize: "3rem", lineHeight: "1.2" },
		h3: { fontWeight: 400, fontSize: "3rem", lineHeight: "1.2" },
		h4: { fontWeight: 600, fontSize: "1.5rem", lineHeight: "1.2" },
		h5: { fontWeight: 300, fontSize: "1.25rem", lineHeight: "1.2" },
		h6: { fontWeight: 300, fontSize: "1rem", lineHeight: "1.2" }
	},

	components: {
		MuiLink: {
			styleOverrides: {
				root: {
					color: "inherit",
					textDecoration: "none"
				}
			}
		},

		MuiButton: {
			styleOverrides: {
				root: {
					fontWeight: 600,
					fontSize: "1.15rem",
					textTransform: "none"
				}
			}
		}
	},
});

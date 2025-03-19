import { Button, styled } from "@mui/material";
import { upload } from "@src/services/firebase";
import { ChangeEventHandler, useState } from "react";

const HiddenInput = styled("input")({
	position: "absolute",
	bottom: 0,
	left: 0,
	width: 1,
	height: 1,
	overflow: "hidden",
	clipPath: "inset(50%)",
	whiteSpace: "nowrap"
});

export function UploadButton(): JSX.Element {
	const [uploading, setUploading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	const uploadAvatar: ChangeEventHandler<HTMLInputElement> = async (event) => {
		const file = event.currentTarget.files?.item(0);

		if (file) {
			setUploading(true);
			try {
				await upload({ name: file.name, data: file });
			} catch (error) {
				setError(error as Error);
			} finally {
				setUploading(false);
			}
		}
	};

	return (
		<Button
			component="label"
			role={undefined}
			variant="contained"
			tabIndex={-1}
		>
			upload avatar
			<HiddenInput type="file" onChange={uploadAvatar} />
		</Button>
	);
};

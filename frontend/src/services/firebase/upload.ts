import { ref, uploadBytesResumable, getDownloadURL, UploadMetadata } from "firebase/storage";
import { storage } from "./config";

export type UploadFile = {
	name: string,
	data: Blob | Uint8Array | ArrayBuffer,
	metadata?: UploadMetadata
};

export const upload = (file: UploadFile): Promise<string> => new Promise((resolve, reject) => {
	const storageRef = ref(storage, "images/" + file.name);
	const uploadTask = uploadBytesResumable(storageRef, file.data, file.metadata);

	const unsubscribe = uploadTask.on(
		"state_changed",

		(snapshot) => {
			// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log('Upload is ' + progress + '% done');
			switch (snapshot.state) {
				case 'paused':
					console.log('Upload is paused');
					break;
				case 'running':
					console.log('Upload is running');
					break;
			}
		},

		(error) => {
			unsubscribe();
			reject(new Error(error.message));
		},

		() => {
			unsubscribe();
			getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
				resolve(downloadURL);
			});
		}
	);
});

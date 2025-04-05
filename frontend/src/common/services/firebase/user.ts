import { User } from "@app/types";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./config";

export const createUser = async (username: string, email: string, id: string): Promise<User> => {
	const user: User = { username, email, id, blocked: [] };

	await setDoc(doc(db, "users", id), { ...user });
	// await setDoc(doc(db, "chats", id), );
	return user;
}

export const getUser = async (id: string): Promise<User> => {
	const docRef = doc(db, "users", id);
	const docSnapshot = await getDoc(docRef);

	if (!docSnapshot.exists()) {
		throw new Error(`User with ID ${id} does not exist.`);
	}

	return docSnapshot.data() as User;
};
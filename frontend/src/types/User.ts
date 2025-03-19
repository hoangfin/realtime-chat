export type User = {
	username: string;
    email: string;
    id: string;
	blocked: string[];
    avatarURL?: string | null;
	// lastSeen: Date
};
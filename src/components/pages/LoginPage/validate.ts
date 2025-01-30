export type ValidationError = {
	email?: string,
	password?: string
};

export const validate = (email: string, password: string): ValidationError => {
	const error: ValidationError = {};

	if (!email.trim()) {
		error.email = "Email is required";
	} else if (!/\S+@\S+\.\S+/.test(email)) {
		error.email = "Invalid email format";
	}

	if (!password.trim()) {
		error.password = "Password is required";
	} else if (password.length < 6) {
		error.password = "Password must be at least 6 characters";
	}

	return error;
};

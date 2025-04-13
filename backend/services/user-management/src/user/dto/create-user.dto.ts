import { IsEmail, IsOptional, IsString, IsUrl, Length, Matches, MinLength } from "class-validator";

export class CreateUserDto {
	@IsEmail()
	email!: string;

	@Length(3, 50)
	@Matches(/^[a-zA-Z0-9_]+$/, {
		message: "Username can only contain letters, numbers and underscores"
	})
	username!: string;

	@IsOptional()
	@Length(1, 100)
	name?: string;

	@MinLength(8)
	password!: string;

	@IsOptional()
	@IsUrl()
	avatarUrl?: string;
}

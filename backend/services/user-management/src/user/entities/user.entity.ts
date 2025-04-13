import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ tableName: "users" })
export class User {
	@PrimaryKey({ type: "uuid", defaultRaw: "gen_random_uuid()" })
	id!: string;

	@Property({ type: "string", nullable: false, unique: true })
    email!: string;

	@Property({ type: "boolean", nullable: false, default: false, name: "email_verified" })
    emailVerified: boolean = false;

	@Property({ type: "string", nullable: false, length: 50, unique: true })
    username!: string;

	@Property({ type: "string", nullable: true, length: 100 })
    name?: string;

	@Property({ type: "string", nullable: false, length: 255, name: "password_hash" })
    passwordHash!: string;

	@Property({ type: "text", nullable: true, name: "avatar_url" })
    avatarUrl?: string;

	@Property({ type: "boolean", nullable: false, default: true, name: "is_active" })
    isActive: boolean = true;

	@Property({ type: "timestamptz", nullable: true, defaultRaw: "NOW()", name: "last_login" })
    lastLogin?: Date;

	@Property({ type: "timestamptz", nullable: false, defaultRaw: "NOW()", name: "created_at" })
    createdAt!: Date;

	@Property({
		type: "timestamptz",
		nullable: false,
		defaultRaw: "NOW()",
		onUpdate: () => new Date(),
		name: "updated_at"
	})
    updatedAt!: Date;
}

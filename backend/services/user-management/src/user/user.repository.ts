import { EntityManager, RequiredEntityData } from "@mikro-orm/postgresql";
import { User } from "./entities/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
	constructor(private readonly em: EntityManager) {}

	async createUser(userData: RequiredEntityData<User>): Promise<User> {
		const user = this.em.create(User, userData);
		await this.em.persistAndFlush(user);
		return user;
	}
}
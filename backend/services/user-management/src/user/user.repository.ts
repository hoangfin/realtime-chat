import { type EntityData, type RequiredEntityData, EntityManager } from "@mikro-orm/postgresql";
import { User } from "./entities/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
	constructor(private readonly em: EntityManager) { }

	async createUser(userData: RequiredEntityData<User>): Promise<User> {
		const user = this.em.create(User, userData);
		await this.em.persistAndFlush(user);
		return user;
	}

	async findAll(): Promise<User[]> {
		return this.em.findAll(User);
	}

	async findOne(id: string): Promise<User | null> {
		return this.em.findOne(User, { id })
	}

	async update(id: string, userData: EntityData<User>): Promise<User> {
		const user = await this.em.findOneOrFail(User, { id });
		this.em.assign(user, userData);
		await this.em.persistAndFlush(user);
		return user;
	}

	async remove(id: string): Promise<void> {
		const user = await this.em.findOneOrFail(User, { id });
		return this.em.removeAndFlush(user);
	}
}
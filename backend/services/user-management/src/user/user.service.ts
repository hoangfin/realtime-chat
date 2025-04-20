import { Injectable } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { User } from "./entities/user.entity";
import { UserRepository } from "./user.repository";
import { RequiredEntityData } from "@mikro-orm/core";

@Injectable()
export class UserService {
	constructor(private readonly repo: UserRepository) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		// validate createUserDto

		const { password, ...rest } = createUserDto;
		const userData: RequiredEntityData<User> = {
			...rest,
			passwordHash: "Hello"
		};
		console.log(userData);
		const user = await this.repo.createUser(userData);
		return user;
	}

	findAll() {
		return `This action returns all user`;
	}

	findOne(id: number) {
		return `This action returns a #${id} user`;
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}

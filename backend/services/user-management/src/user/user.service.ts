import { Injectable } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { User } from "./entities/user.entity";
import { UserRepository } from "./user.repository";
import type { EntityData, RequiredEntityData } from "@mikro-orm/core";

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		// validate createUserDto

		const { password, ...rest } = createUserDto;
		const userData: RequiredEntityData<User> = {
			...rest,
			passwordHash: "Hello"
		};
		console.log(userData);
		const user = await this.userRepository.createUser(userData);
		return user;
	}

	async findAll(): Promise<User[]> {
		return this.userRepository.findAll();
	}

	async findOne(id: string): Promise<User> {
		return this.userRepository.findOne(id);
	}

	async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
		if (updateUserDto.password) {

		}
		const userData: EntityData<User> = {

		};

		return this.userRepository.update(id, updateUserDto);
	}

	async remove(id: string): Promise<void> {
		return this.userRepository.remove(id);
	}
}

import {
	Body,
	Controller,
	DefaultValuePipe,
	Delete,
	Get,
	HttpCode,
	Param,
	ParseIntPipe,
	ParseUUIDPipe,
	Patch,
	Post,
	Query
} from "@nestjs/common";
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Controller("users")
@ApiTags("Users")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	@HttpCode(201)
	@ApiOperation({ summary: "Create an user" })
	@ApiResponse({ status: 201, description: "User successfully created" })
	async create(@Body() createUserDto: CreateUserDto): Promise<User> {
		return this.userService.create(createUserDto);
	}

	@Get()
	@ApiOperation({ summary: "Get all users" })
	@ApiQuery({ name: "page", required: false, description: "Page number (default: 1)" })
	@ApiQuery({ name: "limit", required: false, description: "Number of users per page (default: 20)" })
	@ApiOkResponse({ description: "A paginated list of users along with metadata" })
	async findAll(
		@Query("page", new DefaultValuePipe(1), new ParseIntPipe()) page: number,
		@Query("limit", new DefaultValuePipe(20), new ParseIntPipe()) limit: number,
	): Promise<User[]> {
		return this.userService.findAll();
	}

	@Get(":id")
	@ApiOperation({ summary: "Get an user by ID" })
	@ApiOkResponse({ description: "User found", type: User })
	async findOne(@Param("id", new ParseUUIDPipe({ version: "4" })) id: string): Promise<User> {
		return this.userService.findOne(id);
	}

	@Patch(":id")
	@ApiOperation({ summary: "Update an user by ID" })
	@ApiParam({ name: "id", type: String, description: "UUID of the user", required: true })
	@ApiBody({ type: UpdateUserDto, required: true })
	@ApiOkResponse({ description: "User successfully updated", type: User })
	async update(
		@Param("id", new ParseUUIDPipe({ version: "4" })) id: string,
		@Body() updateUserDto: UpdateUserDto
	): Promise<User> {
		return this.userService.update(id, updateUserDto);
	}

	@Delete(":id")
	@HttpCode(204)
	@ApiOperation({ summary: "Remove a user by ID" })
	@ApiParam({ name: "id", type: String, description: "UUID of the user", required: true })
	@ApiResponse({ status: 204, description: "User successfully removed" })
	async remove(@Param("id", new ParseUUIDPipe({ version: "4" })) id: string): Promise<void> {
		return this.userService.remove(id);
	}
}

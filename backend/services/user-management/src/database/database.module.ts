import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { ConfigService } from "@nestjs/config";

@Module({
	imports: [
		MikroOrmModule.forRootAsync({
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				driver: PostgreSqlDriver,
				host: configService.getOrThrow<string>("POSTGRES_HOST"),
				port: configService.getOrThrow<number>("POSTGRES_PORT"),
				dbName: configService.getOrThrow<string>("POSTGRES_DB"),
				user: configService.getOrThrow<string>("POSTGRES_USER"),
				password: configService.getOrThrow<string>("POSTGRES_PASSWORD"),
				entities: ["dist/**/*.entity.js"],
				entitiesTs: ["src/**/*.entity.ts"],
				debug: true,
			}),
		}),
	],
})
export class DatabaseModule {}

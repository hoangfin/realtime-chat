import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

@Module({
	imports: [
		MikroOrmModule.forRootAsync({
			inject: [ConfigService],

			useFactory: (configService: ConfigService) => ({
				driver: PostgreSqlDriver,
				host: configService.getOrThrow("POSTGRES_HOST"),
				port: configService.getOrThrow("POSTGRES_PORT"),
				user: configService.getOrThrow("POSTGRES_USER"),
				password: configService.getOrThrow("POSTGRES_PASSWORD"),
				dbName: configService.getOrThrow("POSTGRES_DB"),
				entities: [''],
      			entitiesTs: [''],
				// synchronize: configService.getOrThrow("POSTGRES_SYNCHRONIZE"),
			}),
		}),
	],
})
export class DatabaseModule {}

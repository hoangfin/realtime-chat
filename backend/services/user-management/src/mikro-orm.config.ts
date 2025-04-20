import { Migrator } from "@mikro-orm/migrations";
import { defineConfig } from "@mikro-orm/postgresql";
import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";

config();

const configService = new ConfigService();

export const baseConfig = defineConfig({
	host: configService.getOrThrow<string>("POSTGRES_HOST"),
	port: configService.getOrThrow<number>("POSTGRES_PORT"),
	dbName: configService.getOrThrow<string>("POSTGRES_DB"),
	user: configService.getOrThrow<string>("POSTGRES_USER"),
	password: configService.getOrThrow<string>("POSTGRES_PASSWORD"),
	entities: ["dist/**/*.entity.js"],
	entitiesTs: ["src/**/*.entity.ts"]
});

export default defineConfig({
	...baseConfig,
	migrations: {
		path: "dist/migrations",
		pathTs: "src/migrations",
		glob: "!(*.d).{js,ts}",
		transactional: true,
		disableForeignKeys: true,
		allOrNothing: true,
		emit: "ts",
	},
	extensions: [Migrator]
});

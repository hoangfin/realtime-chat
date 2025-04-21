import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());

	const config = new DocumentBuilder()
        .setTitle("Users API")
        .setDescription("API documentation for users")
        .setVersion("1.0")
        .addTag("Users")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("users/documentation", app, document);

	await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

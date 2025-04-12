import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { ProfileModule } from "./profile/profile.module";
import { RoleModule } from "./role/role.module";
import { NotificationModule } from "./notification/notification.module";
import { SessionModule } from './session/session.module';
import { PasswordRecoveryModule } from './password-recovery/password-recovery.module';
import { ValidationModule } from './validation/validation.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		DatabaseModule,
		UserModule,
		AuthModule,
		ProfileModule,
		RoleModule,
		NotificationModule,
		SessionModule,
		PasswordRecoveryModule,
		ValidationModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

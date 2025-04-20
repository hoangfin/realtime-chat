import { Migration } from '@mikro-orm/migrations';

export class Migration20250420112722 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "users" ("id" uuid not null default gen_random_uuid(), "email" varchar(255) not null, "email_verified" boolean not null default false, "username" varchar(50) not null, "name" varchar(100) null, "password_hash" varchar(255) not null, "avatar_url" text null, "is_active" boolean not null default true, "last_login" timestamptz null default now(), "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), constraint "users_pkey" primary key ("id"));`);
    this.addSql(`alter table "users" add constraint "users_email_unique" unique ("email");`);
    this.addSql(`alter table "users" add constraint "users_username_unique" unique ("username");`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "users" cascade;`);
  }

}

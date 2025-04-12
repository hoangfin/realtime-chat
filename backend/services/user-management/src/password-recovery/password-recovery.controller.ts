import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PasswordRecoveryService } from './password-recovery.service';
import { CreatePasswordRecoveryDto } from './dto/create-password-recovery.dto';
import { UpdatePasswordRecoveryDto } from './dto/update-password-recovery.dto';

@Controller('password-recovery')
export class PasswordRecoveryController {
  constructor(private readonly passwordRecoveryService: PasswordRecoveryService) {}

  @Post()
  create(@Body() createPasswordRecoveryDto: CreatePasswordRecoveryDto) {
    return this.passwordRecoveryService.create(createPasswordRecoveryDto);
  }

  @Get()
  findAll() {
    return this.passwordRecoveryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passwordRecoveryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePasswordRecoveryDto: UpdatePasswordRecoveryDto) {
    return this.passwordRecoveryService.update(+id, updatePasswordRecoveryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passwordRecoveryService.remove(+id);
  }
}

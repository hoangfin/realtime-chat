import { Injectable } from '@nestjs/common';
import { CreatePasswordRecoveryDto } from './dto/create-password-recovery.dto';
import { UpdatePasswordRecoveryDto } from './dto/update-password-recovery.dto';

@Injectable()
export class PasswordRecoveryService {
  create(createPasswordRecoveryDto: CreatePasswordRecoveryDto) {
    return 'This action adds a new passwordRecovery';
  }

  findAll() {
    return `This action returns all passwordRecovery`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passwordRecovery`;
  }

  update(id: number, updatePasswordRecoveryDto: UpdatePasswordRecoveryDto) {
    return `This action updates a #${id} passwordRecovery`;
  }

  remove(id: number) {
    return `This action removes a #${id} passwordRecovery`;
  }
}

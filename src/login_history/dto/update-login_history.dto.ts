import { PartialType } from '@nestjs/swagger';
import { CreateLoginHistoryDto } from './create-login_history.dto';

export class UpdateLoginHistoryDto extends PartialType(CreateLoginHistoryDto) {}

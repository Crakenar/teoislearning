import { PartialType } from '@nestjs/mapped-types/dist';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
//define properties one by one or reuse CreateUserDto
// OmitType, PArtalType, IntersectionType etc...
//export class UpdateCatDto extends IntersectionType(
//   CreateCatDto,
//   AdditionalCatInfo,
// ) {}

import {IsEmail, IsNotEmpty} from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}

export class AdditionalUserInfos {
    name: string;
    lastname: string;
    age: number;
}

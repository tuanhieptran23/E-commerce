import {  IsNotEmpty,IsEmail } from "class-validator";

 export class LoginUserDTO{
   @IsNotEmpty()
   @IsEmail()
    useremail: string;

    @IsNotEmpty()
    password: string;
 }

import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUpdateTodoDto {
    @IsString()
    @IsNotEmpty()
    @Length(3,10, {
        message: 'Le nom du todo doit être entre 3 et 10 caractères'
    })
    name: string;

    @IsString()
    @Length(6,255)
    description: string;
}

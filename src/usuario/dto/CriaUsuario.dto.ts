import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class CriaUsuarioDto {
  @IsNotEmpty({ message: 'Nome obrigatório' })
  nome: string;

  @IsEmail(undefined, { message: 'E-mail informado é inválido' })
  @EmailEhUnico({ message: 'E-mail já cadastrado' })
  email: string;
  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  senha: string;
}

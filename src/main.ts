import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // transforma os dados recebidos em objetos
      whitelist: true, // remove campos que não estão no DTO
      forbidNonWhitelisted: true, // retorna um erro se um campo não está no DTO
    }),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true }); // permite a injeção de dependências no class-validator
  await app.listen(3000);
}
bootstrap();

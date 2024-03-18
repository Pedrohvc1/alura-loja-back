import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { DbConfigService } from './config/db.config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsuarioModule,
    // ProdutoModule,

    ConfigModule.forRoot({
      isGlobal: true,
    }), // faz com que o módulo seja global, através da lib @nestjs/config

    TypeOrmModule.forRootAsync({
      useClass: DbConfigService,
      inject: [DbConfigService],
    }), // add o config do banco de dados
  ],
})
export class AppModule {}

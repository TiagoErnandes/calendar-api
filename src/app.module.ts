import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';


@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'calendar',
    autoLoadModels: true,
    synchronize: true,
  }), UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

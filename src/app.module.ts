import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: [".local.env"]
  }),

  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({uri: configService.get("MONGO_URI")}),

    inject: [ConfigService]
  }),

  BookModule,

  UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

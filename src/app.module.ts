import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: [".local.env"]
  }),

  // MongooseModule.forRootAsync({
  //   imports: [ConfigModule],
  //   useFactory: (configService: ConfigService) => ({uri: configService.get("MONGO_URI")}),

  //   inject: [ConfigService]
  // }),
  

  MongooseModule.forRoot(process.env.MONGO_URI),

  BookModule,

  AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

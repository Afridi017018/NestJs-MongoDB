import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { User, UserSchema } from './shema/user.schema';

@Module({
    imports:[
        PassportModule.register({defaultStrategy: "jwt"}),
        JwtModule.register({
            secret: "jsadjsadsakdj",
            signOptions: { expiresIn: '60s' },
          }),

          MongooseModule.forFeature([{name: "User", schema: UserSchema}])
    ],
    
    controllers:[AuthController],
    providers:[AuthService]

})
export class AuthModule {}

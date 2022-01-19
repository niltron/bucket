import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserResolver } from './resolvers/user.esolver';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserResolver],
})
export class AppModule {}

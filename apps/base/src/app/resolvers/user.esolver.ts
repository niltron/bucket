import { Query } from '@nestjs/common';
import { Resolver, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { User } from '../../common/generated';
import { PrismaService } from '../services/prisma.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  me(@Args('id', { type: () => Int }) id: string) {
    return this.prisma.client.user.findFirst({ where: { id } });
  }

  @ResolveField()
  siblings(@Parent() { id }: User) {
    return this.prisma.client.user.findMany({ where: { id } });
  }
}

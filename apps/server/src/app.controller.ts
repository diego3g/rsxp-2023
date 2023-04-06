import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

var x = 2

const obj: { name: string } = {
  age: 12
}

console.log(obj.age)

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getUsers() {
    const users = await this.prisma.user.findMany()

    return {
      data: users,
    }
  }
}

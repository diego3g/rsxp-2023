import {
  Controller,
  Post,
  Req,
  UseGuards,
  HttpException,
  HttpStatus,
  HttpCode,
  Delete,
  Get,
} from '@nestjs/common'
import { RequireAuthProp, users } from '@clerk/clerk-sdk-node'
import { Request } from 'express'

import { PrismaService } from './database/prisma.service'
import { ClerkGuard } from './clerk/clerk.guard'
import { SymplaService } from './sympla/sympla.service'

@Controller()
export class AppController {
  constructor(private prisma: PrismaService, private sympla: SymplaService) {}

  @Get('/tickets/link')
  @UseGuards(ClerkGuard)
  async getLinkedTicket(@Req() req: RequireAuthProp<Request>) {
    const { userId } = req.auth

    const ticket = await this.prisma.ticketLink.findUnique({
      where: {
        clerkUserId: userId,
      },
    })

    return { ticket }
  }

  @Post('/tickets/link')
  @HttpCode(201)
  @UseGuards(ClerkGuard)
  async linkTicket(@Req() req: RequireAuthProp<Request>) {
    const { userId } = req.auth
    const { ticketNumber } = req.body

    const ticketAlreadyInUse = await this.prisma.ticketLink.findUnique({
      where: {
        symplaTicketNumber: ticketNumber,
      },
    })

    if (ticketAlreadyInUse && ticketAlreadyInUse.clerkUserId === userId) {
      return
    }

    if (ticketAlreadyInUse) {
      throw new HttpException(
        'Esse ticket já foi utilizado por outro participante.',
        HttpStatus.CONFLICT,
      )
    }

    const userAlreadyLinked = await this.prisma.ticketLink.findUnique({
      where: {
        clerkUserId: userId,
      },
    })

    if (userAlreadyLinked) {
      throw new HttpException(
        'Você já vinculou um ingresso.',
        HttpStatus.CONFLICT,
      )
    }

    try {
      await this.sympla.getParticipantByTicketNumber(ticketNumber)
    } catch (err) {
      throw new HttpException(
        'Número do ticket inválido.',
        HttpStatus.BAD_REQUEST,
      )
    }

    await this.prisma.ticketLink.create({
      data: {
        clerkUserId: userId,
        symplaTicketNumber: ticketNumber,
      },
    })
  }

  @Delete('/tickets/link')
  @HttpCode(204)
  @UseGuards(ClerkGuard)
  async unlinkTicket(@Req() req: RequireAuthProp<Request>) {
    const { userId } = req.auth

    const userTicket = await this.prisma.ticketLink.findUnique({
      where: {
        clerkUserId: userId,
      },
    })

    if (!userTicket) {
      throw new HttpException(
        'Você não possui nenhum ingresso vinculado.',
        HttpStatus.I_AM_A_TEAPOT,
      )
    }

    await this.prisma.ticketLink.delete({
      where: {
        clerkUserId: userId,
      },
    })
  }

  @Get('/credential')
  @UseGuards(ClerkGuard)
  async getCredential(@Req() req: RequireAuthProp<Request>) {
    const { userId } = req.auth

    const { ticketNumber } = await this.prisma.ticketLink.findUnique({
      where: {
        clerkUserId: userId,
      },
    })

    const user = await users.getUser(userId)

    // TODO: Return QRCode data and bio from github

    return {
      ticketNumber,
      user: {
        avatarUrl: user.profileImageUrl,
        name: `${user.firstName} ${user.lastName}`,
      },
    }
  }
}

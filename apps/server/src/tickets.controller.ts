import {
  nestControllerContract,
  NestControllerInterface,
  NestRequestShapes,
  NestResponseShapes,
  TsRest,
  TsRestRequest,
} from '@ts-rest/nest'

import { Controller } from '@nestjs/common'
import { contract } from '@rsxp/contracts'
import { PrismaService } from './database/prisma.service'

const controllerContract = nestControllerContract(contract)

type RequestShapes = NestRequestShapes<typeof controllerContract>
type ResponseShapes = NestResponseShapes<typeof controllerContract>

@Controller()
export class TicketsController
  implements NestControllerInterface<typeof controllerContract>
{
  constructor(private prisma: PrismaService) {}

  @TsRest(controllerContract.linkTicket)
  async linkTicket(
    @TsRestRequest() { body }: RequestShapes['linkTicket'],
  ): Promise<ResponseShapes['linkTicket']> {
    const ticket = await this.prisma.ticket.create({
      data: {
        symplaTicketNumber: 'AAAA-AA-AAAA',
        userId: 'some-user-id',
      },
    })

    return { status: 201, body: { ticket } }
  }

  @TsRest(controllerContract.myTicket)
  async myTicket(): Promise<ResponseShapes['myTicket']> {
    const ticket = await this.prisma.ticket.findFirst()

    return { status: 200, body: { ticket } }
  }

  @TsRest(controllerContract.unlinkTicket)
  async unlinkTicket(): Promise<ResponseShapes['unlinkTicket']> {
    await this.prisma.ticket.deleteMany()

    return { status: 204, body: null }
  }
}

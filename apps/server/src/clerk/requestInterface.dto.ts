import { Response } from 'express'

export interface Session {
  id: string
  clientId: string
  userId: string
  status: string
  lastActiveAt: number
  expireAt: number
  abandonAt: number
  createdAt: number
  updatedAt: number
}

export interface RequestWithUser extends Response {
  user: {
    id: string
    sessionIds: string[]
    sessions: Session[]
    signInId: any
    signUpId: any
    lastActiveSessionId: string 
    createdAt: number
    updatedAt: number
  }
}

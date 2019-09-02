import { ISession } from 'heroic/app/interface/redux'

export type IGuard = (session: ISession) => boolean

export const Guards: Record<string, IGuard> = {
  All: () => true,
  Guest: session => !session.active,
  Player: session => session.active,
}

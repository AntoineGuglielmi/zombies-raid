import { BaseCard } from './BaseCard'

export class CorridorCard extends BaseCard {
  private _doors: [0 | 1, 0 | 1]
  private _stairs: boolean

  constructor({
    id,
    picked,
    onSet,
    doors,
    stairs,
  }: {
    id: number
    picked: boolean
    onSet: boolean
    doors: [0 | 1, 0 | 1]
    stairs: boolean
  }) {
    super({ id, picked, onSet })
    this._doors = doors
    this._stairs = stairs
  }
}

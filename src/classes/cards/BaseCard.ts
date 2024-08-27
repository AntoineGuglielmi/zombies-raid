export class BaseCard {
  private _id: number
  private _picked: boolean
  private _onSet: boolean

  constructor({
    id,
    picked,
    onSet,
  }: {
    id: number
    picked: boolean
    onSet: boolean
  }) {
    this._id = id
    this._picked = picked
    this._onSet = onSet
  }
}

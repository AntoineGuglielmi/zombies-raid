export type TypeRoomCard = {
  locked?: boolean
  trapped?: boolean
  croissant: TypeRoomDiceFace
  coffee: TypeRoomDiceFace
  lemon: TypeRoomDiceFace
  sourCandy: TypeRoomDiceFace
  ammo: TypeRoomDiceFace
  id: number
}

export type TypeRoomDiceFace = Array<number>
export type TypeRoomCardToken =
  | 'coffee'
  | 'croissant'
  | 'lemon'
  | 'sourCandy'
  | 'ammo'

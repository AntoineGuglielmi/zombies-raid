import { TypeRoomCard } from './TypeRoomCard'

export type TypeRoomCardBlueprint = {
  locked?: TypeRoomCard['locked']
  trapped?: TypeRoomCard['trapped']
  croissant?: TypeRoomCard['croissant']
  coffee?: TypeRoomCard['coffee']
  lemon?: TypeRoomCard['lemon']
  sourCandy?: TypeRoomCard['sourCandy']
  ammo?: TypeRoomCard['ammo']
  hm: number
}

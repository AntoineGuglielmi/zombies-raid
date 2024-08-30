import {
  TypeDoors,
  TypeHM,
  TypeIntersection,
  TypeStairs,
  TypeTurn,
  TypeTypeId,
} from './TypeCorridorCard'

export type TypeCorridorCardBlueprint = {
  doors: TypeDoors
  hm: TypeHM
  stairs: TypeStairs
  intersection: TypeIntersection
  turn: TypeTurn
  typeId: TypeTypeId
}

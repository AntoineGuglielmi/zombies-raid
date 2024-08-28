import {
  TypeDoors,
  TypeHM,
  TypeIntersection,
  TypeStairs,
  TypeTurn,
} from './TypeCorridorCard'

export type TypeCorridorCardBlueprint = {
  doors: TypeDoors
  hm: TypeHM
  stairs: TypeStairs
  intersection: TypeIntersection
  turn: TypeTurn
}

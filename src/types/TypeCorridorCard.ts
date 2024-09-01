export type TypeCorridorCard = {
  doors: TypeDoors
  stairs: TypeStairs
  id: TypeId
  intersection: TypeIntersection
  turn: TypeTurn
  typeId: TypeTypeId
}

export type TypeDoors = 0 | 1 | 2 | 'left' | 'right' | 'top'
export type TypeStairs = boolean
export type TypeId = number
export type TypeHM = number // How many
export type TypeIntersection = false | 'T' | 'X'
export type TypeTurn = boolean
export type TypeTypeId =
  | 'turn-door-right'
  | 'turn-door-left'
  | 'turn-no-door'
  | 'intersection-x'
  | 'intersection-t-door'
  | 'intersection-t-no-door'
  | 'straight-no-door'
  | 'straight-1-door'
  | 'straight-2-doors'
  | 'stairs'

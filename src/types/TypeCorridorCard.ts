export type TypeCorridorCard = {
  doors: TypeDoors
  stairs: TypeStairs
  id: TypeId
  intersection: TypeIntersection
  turn: TypeTurn
}

export type TypeDoors = 0 | 1 | 2 | 'left' | 'right' | 'top'
export type TypeStairs = boolean
export type TypeId = number
export type TypeHM = number // How many
export type TypeIntersection = false | 'T' | 'X'
export type TypeTurn = boolean

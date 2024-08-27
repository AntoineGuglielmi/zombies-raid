export type TypeCorridorCard = {
  start: boolean
  doors: [0 | 1, 0 | 1]
  stairs: boolean
  face: 'up' | 'down'
  id: number
}

import { TypeCorridorCard } from '@/types'
import { TypeCorridorCardBlueprint } from '@/types/TypeCorridorCardBlueprint'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PickState {
  corridorCards: Array<any>
  roomCards: Array<any>
}

const pickCorridorBlueprint: Array<TypeCorridorCardBlueprint> = [
  {
    doors: [0, 0],
    hm: 18,
    stairs: false,
  },
  {
    doors: [0, 1],
    hm: 6,
    stairs: false,
  },
  {
    doors: [1, 1],
    hm: 4,
    stairs: false,
  },
]

const computedCorridorCards = pickCorridorBlueprint.reduce(
  (acc: Array<TypeCorridorCard>, { doors, hm, stairs }) => {
    const cards = []
    for (let i = 0; i < hm; i++) {
      const card: TypeCorridorCard = {
        doors,
        stairs,
        face: 'down',
        start: false,
      }
      cards.push(card)
    }
    return [...acc, ...cards]
  },
  [],
)

for (let i = 0; i < 10; i++) {
  computedCorridorCards.sort(() => Math.random() - 0.5)
}

const corridorCardsLength = computedCorridorCards.length
const corridorCardsLengthHalf = Math.floor(corridorCardsLength / 2)

const corridorCardsWithStairsCard = [
  ...computedCorridorCards.slice(0, corridorCardsLengthHalf),
  ...[
    {
      doors: 0,
      stairs: true,
      face: 'down',
      start: false,
    },
    ...computedCorridorCards.slice(corridorCardsLengthHalf),
  ].sort(() => Math.random() - 0.5),
]

export const usePick = create(
  persist<PickState>(
    (set) => ({
      corridorCards: corridorCardsWithStairsCard,
      roomCards: [],
    }),
    {
      name: 'pick-store',
      getStorage: () => ({
        setItem: (...args) => window.localStorage.setItem(...args),
        removeItem: (...args) => window.localStorage.removeItem(...args),
        getItem: async (...args) =>
          new Promise((resolve) => {
            if (typeof window === 'undefined') {
              resolve(null)
            } else {
              setTimeout(() => {
                resolve(window.localStorage.getItem(...args))
              }, 0)
            }
          }),
      }),
    },
  ),
)

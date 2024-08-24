import { TypeCorridorCard } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CorridorCardsState {
  pick: Array<any>
  onSet: Array<any>
}

// 10, 25, 50

const pickWithoutStairsCard: Array<TypeCorridorCard> = [
  {
    doors: 0,
    hm: 6,
    stairs: false,
  },
  {
    doors: 1,
    hm: 5,
    stairs: false,
  },
  {
    doors: 2,
    hm: 5,
    stairs: false,
  },
]
  .reduce((acc: Array<TypeCorridorCard>, { doors, hm: length, stairs }) => {
    const cards = Array.from({ length }, () => ({
      doors,
      stairs,
      face: 'down',
    }))
    return [...acc, ...cards]
  }, [])
  .sort(() => Math.random() - 0.5)
  .sort(() => Math.random() - 0.5)

const pickLength = pickWithoutStairsCard.length
const pickLengthHalf = Math.floor(pickLength / 2)

const pickWithStairsCard = [
  ...pickWithoutStairsCard.slice(0, pickLengthHalf),
  ...[
    {
      doors: 0,
      stairs: true,
      face: 'down',
    },
    ...pickWithoutStairsCard.slice(pickLengthHalf),
  ].sort(() => Math.random() - 0.5),
]

export const useCorridorCards = create(
  persist<CorridorCardsState>(
    (set) => ({
      pick: pickWithStairsCard,
      onSet: [],
    }),
    {
      name: 'corridor-cards-store',
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

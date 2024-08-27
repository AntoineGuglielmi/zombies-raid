import { TypeCorridorCard, TypeStartCard } from '@/types'
import { randomId } from '@/utils'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BoardState {
  onSet: Array<TypeCorridorCard>
  addToBoard: (card: TypeCorridorCard) => void
}

const onSetCards: Array<TypeCorridorCard> = [
  {
    start: true,
    doors: [0, 0],
    stairs: false,
    face: 'up',
    id: 0,
  },
  {
    doors: [0, 0],
    stairs: false,
    face: 'up',
    start: false,
    id: randomId(),
  },
  {
    doors: [0, 0],
    stairs: false,
    face: 'up',
    start: false,
    id: randomId(),
  },
]

export const useBoard = create(
  persist<BoardState>(
    (set) => ({
      onSet: onSetCards,
      addToBoard: (card: TypeCorridorCard) =>
        set((state) => ({
          onSet: [...state.onSet, card],
        })),
    }),
    {
      name: 'board-store',
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

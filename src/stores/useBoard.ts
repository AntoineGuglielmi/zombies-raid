import { TypeCorridorCard, TypeStartCard } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BoardState {
  onSet: Array<TypeCorridorCard>
}

export const useBoard = create(
  persist<BoardState>(
    (set) => ({
      onSet: [
        {
          start: true,
          doors: [0, 0],
          stairs: false,
          face: 'up',
        },
        {
          doors: [0, 0],
          stairs: false,
          face: 'up',
          start: false,
        },
        {
          doors: [0, 0],
          stairs: false,
          face: 'up',
          start: false,
        },
      ],
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

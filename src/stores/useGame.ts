import { EnumDifficulty } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface GameState {
  difficulty: EnumDifficulty
}

export const useCorridorCards = create(
  persist<GameState>(
    (set) => ({
      difficulty: EnumDifficulty.EASY,
    }),
    {
      name: 'game-store',
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

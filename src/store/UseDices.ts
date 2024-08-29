import { TypeRoomCard, TypeRoomCardBlueprint } from '@/types'
import { TypeDice } from '@/types/TypeDice'
import { randomId } from '@/utils'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface DicesState {
  coffeeDice: TypeDice
  croissantDice: TypeDice
  lemonDice: TypeDice
  sourCandyDice: TypeDice
  ammoDice: TypeDice
  slowZombieDice: TypeDice
  fastZombieDice: TypeDice
  sniperZombieDice: TypeDice
  drawnedCoffee: number
  drawnedCroissant: number
  drawnedLemon: number
  drawnedSourCandy: number
  drawnedAmmo: number
  drawnedSlowZombie: number
  drawnedFastZombie: number
  drawnedSniperZombie: number
  drawResources: () => void
  drawZombies: () => void
}

export const UseDices = create(
  persist<DicesState>(
    (set, get) => ({
      coffeeDice: {
        faces: [1, 2, 3, 4, 5, 6],
      },
      croissantDice: {
        faces: [1, 2, 3, 4, 5, 6],
      },
      lemonDice: {
        faces: [1, 2, 3, 4, 5, 6],
      },
      sourCandyDice: {
        faces: [1, 2, 3, 4, 5, 6],
      },
      ammoDice: {
        faces: [1, 2, 3, 4, 5, 6],
      },
      slowZombieDice: {
        faces: [2, 2, 2, 3, 3, 4],
      },
      fastZombieDice: {
        faces: [0, 1, 1, 1, 2, 2],
      },
      sniperZombieDice: {
        faces: [0, 0, 1, 1, 2, 2],
      },
      drawnedCoffee: 1,
      drawnedCroissant: 1,
      drawnedLemon: 1,
      drawnedSourCandy: 1,
      drawnedAmmo: 1,
      drawnedSlowZombie: 2,
      drawnedFastZombie: 0,
      drawnedSniperZombie: 0,
      drawResources: () => {
        set((state) => ({
          drawnedCoffee:
            state.coffeeDice.faces[
              Math.floor(Math.random() * state.coffeeDice.faces.length)
            ],
          drawnedCroissant:
            state.croissantDice.faces[
              Math.floor(Math.random() * state.croissantDice.faces.length)
            ],
          drawnedLemon:
            state.lemonDice.faces[
              Math.floor(Math.random() * state.lemonDice.faces.length)
            ],
          drawnedSourCandy:
            state.sourCandyDice.faces[
              Math.floor(Math.random() * state.sourCandyDice.faces.length)
            ],
          drawnedAmmo:
            state.ammoDice.faces[
              Math.floor(Math.random() * state.ammoDice.faces.length)
            ],
        }))
      },
      drawZombies: () => {
        set((state) => ({
          drawnedSlowZombie:
            state.slowZombieDice.faces[
              Math.floor(Math.random() * state.slowZombieDice.faces.length)
            ],
          drawnedFastZombie:
            state.fastZombieDice.faces[
              Math.floor(Math.random() * state.fastZombieDice.faces.length)
            ],
          drawnedSniperZombie:
            state.sniperZombieDice.faces[
              Math.floor(Math.random() * state.sniperZombieDice.faces.length)
            ],
        }))
      },
    }),
    {
      name: 'dices-store',
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

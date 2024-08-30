import { TypeRoomCard, TypeRoomCardBlueprint } from '@/types'
import { randomId } from '@/utils'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface RoomCardsState {
  roomCards: Array<TypeRoomCard>
  pickedRoomCard: TypeRoomCard | null
  pickRoomCard: () => void
  movePickedCardToBoard: () => void
}

const SHUFFLE = 10

// Corridor cards
const pickRoomBlueprint: Array<TypeRoomCardBlueprint> = [
  {
    locked: false,
    trapped: false,
    ammo: [5, 6],
    coffee: [5, 6],
    croissant: [4, 5, 6],
    lemon: [5, 6],
    sourCandy: [4, 5, 6],
    hm: 7,
  },
  {
    locked: false,
    trapped: false,
    ammo: [4, 5, 6],
    coffee: [6],
    croissant: [5, 6],
    lemon: [6],
    sourCandy: [5, 6],
    hm: 3,
  },
  {
    locked: false,
    trapped: false,
    ammo: [6],
    coffee: [6],
    croissant: [5, 6],
    lemon: [6],
    sourCandy: [6],
    hm: 3,
  },
  {
    locked: true,
    trapped: false,
    ammo: [5, 6],
    coffee: [5, 6],
    croissant: [4, 5, 6],
    lemon: [5, 6],
    sourCandy: [4, 5, 6],
    hm: 5,
  },
  {
    locked: false,
    trapped: true,
    ammo: [5, 6],
    coffee: [5, 6],
    croissant: [4, 5, 6],
    lemon: [5, 6],
    sourCandy: [4, 5, 6],
    hm: 5,
  },
  {
    locked: true,
    trapped: true,
    ammo: [3, 4, 5, 6],
    coffee: [4, 5, 6],
    croissant: [4, 5, 6],
    lemon: [5, 6],
    sourCandy: [5, 6],
    hm: 1,
  },
]

const roomCards = pickRoomBlueprint.reduce(
  (
    acc: Array<TypeRoomCard>,
    { hm, ammo, coffee, croissant, lemon, locked, sourCandy, trapped },
  ) => {
    const cards = []
    for (let i = 0; i < hm; i++) {
      const card: TypeRoomCard = {
        ammo,
        coffee,
        croissant,
        lemon,
        locked,
        sourCandy,
        trapped,
        id: randomId(),
      }
      cards.push(card)
    }
    return [...acc, ...cards]
  },
  [],
)

for (let i = 0; i < SHUFFLE; i++) {
  roomCards.sort(() => Math.random() - 0.5)
}

export const UseRoomCards = create(
  persist<RoomCardsState>(
    (set, get) => ({
      roomCards,
      pickedRoomCard: null,
      pickRoomCard: () => {
        if (get().pickedRoomCard !== null) {
          return
        }
        const { roomCards } = get()
        const pickedRoomCard = roomCards.shift()
        set({ roomCards, pickedRoomCard })
      },
      movePickedCardToBoard: () => {
        set({ pickedRoomCard: null })
      },
    }),
    {
      name: 'room-cards-store',
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

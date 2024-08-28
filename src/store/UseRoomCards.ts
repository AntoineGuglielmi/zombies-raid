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
    ammo: 2,
    coffee: 2,
    croissant: 3,
    lemon: 2,
    sourCandy: 3,
    hm: 7,
  },
  {
    locked: false,
    trapped: false,
    ammo: 3,
    coffee: 1,
    croissant: 2,
    lemon: 1,
    sourCandy: 2,
    hm: 3,
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

console.log({
  roomCardsFromStore: roomCards,
})

for (let i = 0; i < SHUFFLE; i++) {
  roomCards.sort(() => Math.random() - 0.5)
}

export const UseRoomCards = create(
  persist<RoomCardsState>(
    (set, get) => ({
      roomCards,
      pickedRoomCard: null,
      pickRoomCard: () => {
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

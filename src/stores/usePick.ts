import { TypeCorridorCard, TypeRoomCard, TypeRoomCardBlueprint } from '@/types'
import { TypeCorridorCardBlueprint } from '@/types/TypeCorridorCardBlueprint'
import { randomId } from '@/utils'
import { get } from 'http'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PickState {
  corridorCards: Array<TypeCorridorCard>
  roomCards: Array<TypeRoomCard>
  pickedRoomCard: TypeRoomCard | null
  dealInitialCorridorCards: () => Array<TypeCorridorCard>
  pickARoomCard: () => void
}

// Corridor cards
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
        id: randomId(),
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
      doors: [0, 0],
      stairs: true,
      face: 'down',
      start: false,
      id: randomId(),
    } as TypeCorridorCard,
    ...computedCorridorCards.slice(corridorCardsLengthHalf),
  ].sort(() => Math.random() - 0.5),
]

// Room cards
const pickRoomBlueprint: Array<TypeRoomCardBlueprint> = [
  {
    locked: true,
    trapped: false,
    hm: 4,
    ammo: 5,
    coffee: 5,
    croissant: 5,
    lemon: 5,
    sourCandy: 5,
  },
  {
    locked: false,
    trapped: true,
    hm: 4,
    ammo: 5,
    coffee: 5,
    croissant: 5,
    lemon: 5,
    sourCandy: 5,
  },
  {
    locked: false,
    trapped: false,
    hm: 4,
    ammo: 5,
    coffee: 5,
    croissant: 5,
    lemon: 5,
    sourCandy: 5,
  },
]

const computedRoomCards = pickRoomBlueprint.reduce(
  (
    acc: Array<TypeRoomCard>,
    { ammo, coffee, croissant, lemon, locked, sourCandy, trapped, hm },
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
      }
      cards.push(card)
    }
    return [...acc, ...cards]
  },
  [],
)

for (let i = 0; i < 10; i++) {
  computedRoomCards.sort(() => Math.random() - 0.5)
}

export const UsePick = create(
  persist<PickState>(
    (set, get) => ({
      corridorCards: corridorCardsWithStairsCard,
      roomCards: computedRoomCards,
      pickedRoomCard: null,
      dealInitialCorridorCards: () => {
        const cardsToDeal: Array<TypeCorridorCard> = []
        for (let i = 0; i < 3; i++) {
          cardsToDeal.push(get().corridorCards.shift() as TypeCorridorCard)
        }
        return cardsToDeal
      },
      pickARoomCard: () => {
        if (get().pickARoomCard !== null) {
          return
        }
        const card = get().roomCards.shift()
        set({ pickedRoomCard: card })
      },
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

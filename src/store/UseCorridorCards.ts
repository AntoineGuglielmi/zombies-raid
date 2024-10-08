import { TypeCorridorCard, TypeRoomCard, TypeRoomCardBlueprint } from '@/types'
import { TypeCorridorCardBlueprint } from '@/types/TypeCorridorCardBlueprint'
import { randomId } from '@/utils'
import { get } from 'http'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CorridorCardsState {
  corridorCards: Array<TypeCorridorCard>
  pickedCorridorCard: TypeCorridorCard | null
  pickCorridorCard: () => void
  putCorridorCardInHand: () => void
}

const HOW_MANY_SIMPLE_CORRIDOR_CARDS = 24
const CORRIDOR_CARDS_AT_START = 2
const ADD_CORRIDOR_CARDS_AT_START = false
const PERCENTAGE_CARDS_BEFORE_STAIRS = 0.5
const SHUFFLE_WITHOUT_STAIRS = 10
const SHUFFLE_WITH_STAIRS = 10

// Corridor cards
const pickCorridorBlueprint: Array<TypeCorridorCardBlueprint> = [
  {
    doors: 0,
    hm: HOW_MANY_SIMPLE_CORRIDOR_CARDS - CORRIDOR_CARDS_AT_START,
    stairs: false,
    intersection: false,
    turn: false,
    typeId: 'straight-no-door',
  },
  {
    doors: 1,
    hm: 6,
    stairs: false,
    intersection: false,
    turn: false,
    typeId: 'straight-1-door',
  },
  {
    doors: 2,
    hm: 4,
    stairs: false,
    intersection: false,
    turn: false,
    typeId: 'straight-2-doors',
  },
  {
    doors: 'top',
    hm: 2,
    stairs: false,
    intersection: 'T',
    turn: false,
    typeId: 'intersection-t-door',
  },
  {
    doors: 0,
    hm: 2,
    stairs: false,
    intersection: 'T',
    turn: false,
    typeId: 'intersection-t-no-door',
  },
  {
    doors: 0,
    hm: 4,
    stairs: false,
    intersection: 'X',
    turn: false,
    typeId: 'intersection-x',
  },
  {
    doors: 0,
    hm: 6,
    stairs: false,
    intersection: false,
    turn: true,
    typeId: 'turn-no-door',
  },
  {
    doors: 'left',
    hm: 6,
    stairs: false,
    intersection: false,
    turn: true,
    typeId: 'turn-door-left',
  },
  {
    doors: 'right',
    hm: 6,
    stairs: false,
    intersection: false,
    turn: true,
    typeId: 'turn-door-right',
  },
]

const computedCorridorCards = pickCorridorBlueprint.reduce(
  (
    acc: Array<TypeCorridorCard>,
    { doors, hm, stairs, intersection, turn, typeId },
  ) => {
    const cards = []
    for (let i = 0; i < hm; i++) {
      const card: TypeCorridorCard = {
        doors,
        stairs,
        id: randomId(),
        intersection,
        turn,
        typeId,
      }
      cards.push(card)
    }
    return [...acc, ...cards]
  },
  [],
)

for (let i = 0; i < SHUFFLE_WITHOUT_STAIRS; i++) {
  computedCorridorCards.sort(() => Math.random() - 0.5)
}

const corridorCardsLength = computedCorridorCards.length
const corridorCardsBeforeStairs = Math.floor(
  corridorCardsLength * PERCENTAGE_CARDS_BEFORE_STAIRS,
)

const corridorCardsWithoutStairs = computedCorridorCards.slice(
  0,
  corridorCardsBeforeStairs,
)

const stairsCard: TypeCorridorCard = {
  doors: 0,
  stairs: true,
  id: randomId(),
  intersection: false,
  turn: false,
  typeId: 'stairs',
}

const corridorCardsWithStairs = [
  stairsCard,
  ...computedCorridorCards.slice(corridorCardsBeforeStairs),
]

for (let i = 0; i < SHUFFLE_WITH_STAIRS; i++) {
  corridorCardsWithStairs.sort(() => Math.random() - 0.5)
}

const corridorCards = [
  ...corridorCardsWithoutStairs,
  ...corridorCardsWithStairs,
]

const simpleCorridorCard: TypeCorridorCard = {
  doors: 0,
  stairs: false,
  id: randomId(),
  intersection: false,
  turn: false,
  typeId: 'straight-no-door',
}

if (ADD_CORRIDOR_CARDS_AT_START) {
  for (let i = 0; i < CORRIDOR_CARDS_AT_START; i++) {
    corridorCards.unshift(simpleCorridorCard)
  }
}

export const UseCorridorCards = create(
  persist<CorridorCardsState>(
    (set, get) => ({
      corridorCards,
      pickedCorridorCard: null,
      pickCorridorCard: () => {
        // if (get().pickedCorridorCard !== null) {
        //   return
        // }
        const { corridorCards } = get()
        const pickedCorridorCard = corridorCards.shift()
        set({ corridorCards, pickedCorridorCard })
      },
      putCorridorCardInHand: () => {
        set({ pickedCorridorCard: null })
      },
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

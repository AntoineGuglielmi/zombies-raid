import { TypeCorridorCard, TypePlayer } from '@/types'
import { use } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { UsePick } from './usePick'
import { useBoard } from './useBoard'

interface PlayersState {
  players: Array<TypePlayer>
  currentPlayer: number
  getCurrentPlayer: () => TypePlayer
  setCurrentPlayer: (id: number) => void
  addCard: () => void
  rotateCard: (id: number) => void
  movePlayer: (id: number) => void
  placeCardOnBoard: (id: number) => void
  decrementActions: () => void
}

const players: Array<TypePlayer> = [
  {
    id: 0,
    name: 'Furtif',
    color: 'red',
    cardId: 0,
    cards: [],
    actions: 5,
  },
  {
    id: 1,
    name: 'Militaire',
    color: 'blue',
    cardId: 0,
    cards: [],
    actions: 5,
  },
  {
    id: 2,
    name: 'Costaud',
    color: 'green',
    cardId: 0,
    cards: [],
    actions: 5,
  },
  {
    id: 3,
    name: 'Scienifique',
    color: 'yellow',
    cardId: 0,
    cards: [],
    actions: 5,
  },
]
const pick = UsePick.getState()
const addToBoard = useBoard.getState().addToBoard

export const usePlayers = create(
  persist<PlayersState>(
    (set, get) => ({
      players: players.map((player) => {
        player.cards = pick.dealInitialCorridorCards()
        return player
      }),
      currentPlayer: 0,
      getCurrentPlayer: () => get().players[get().currentPlayer],
      setCurrentPlayer: (id: number) => set({ currentPlayer: id }),
      addCard: () => {
        const currentPlayer = get().getCurrentPlayer()
        const pick = UsePick.getState()
        const pickCorridorCards = pick.corridorCards
        const card = pickCorridorCards.shift()
        const players = get().players.map((player) => {
          if (player.id === currentPlayer.id) {
            player.cards.push(card)
          }
          return player
        })
        set({ players })
      },
      rotateCard: (id: number) => {
        const currentPlayer = get().getCurrentPlayer()
        const players = get().players.map((player) => {
          if (player.id === currentPlayer.id) {
            player.cards.find((card) => card.id === id).doors.reverse()
          }
          return player
        })
        set({ players })
      },
      movePlayer: (id: number) => {
        const players = get().players.map((player) => {
          if (player.id === get().currentPlayer) {
            player.cardId = id
            get().decrementActions()
          }
          return player
        })
        set({ players })
      },
      placeCardOnBoard: (id: number) => {
        const players = get().players.map((player) => {
          if (player.id === get().currentPlayer) {
            const card = player.cards.splice(
              player.cards.findIndex((card) => card.id === id),
              1,
            )[0]
            addToBoard(card)
          }
          return player
        })
        set({ players })
      },
      decrementActions: () => {
        const players = get().players.map((player) => {
          if (player.id === get().currentPlayer) {
            player.actions -= 1
            if (player.actions === 0) {
              const nextPlayer = get().currentPlayer + 1
              set({ currentPlayer: nextPlayer === 4 ? 0 : nextPlayer })
            }
          }
          return player
        })
        set({ players })
      },
    }),
    {
      name: 'players-store',
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

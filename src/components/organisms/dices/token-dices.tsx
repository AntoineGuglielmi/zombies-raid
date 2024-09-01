import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { UseDices, UseRoomCards } from '@/store'
import Dice from '@/components/atoms/dice/dice'
import DiceAndLabel from '@/components/molecules/dice-and-label/dice-and-label'
import One from '@/components/atoms/dice/one'
import { useEffect, useState } from 'react'
import Two from '@/components/atoms/dice/two'
import Three from '@/components/atoms/dice/three'
import Four from '@/components/atoms/dice/four'
import Five from '@/components/atoms/dice/five'
import Six from '@/components/atoms/dice/six'
import { TypeRoomCardToken, TypeRoomDiceFace } from '@/types'

type TokenDicesProps = {
  className?: string
  children?: React.ReactNode
}

const TokenDicesVariants = cva('TokenDices grid grid-cols-2 gap-8', {
  variants: {},
  defaultVariants: {},
})

export default function TokenDices({ className, children }: TokenDicesProps) {
  const {
    drawnedAmmo,
    drawnedCoffee,
    drawnedCroissant,
    drawnedLemon,
    drawResources,
    drawnedSourCandy,
  } = UseDices()

  const dicesList = [
    {
      token: 'coffee',
      face: drawnedCoffee,
      label: 'Café',
    },
    {
      token: 'croissant',
      face: drawnedCroissant,
      label: 'Croissant',
    },
    {
      token: 'lemon',
      face: drawnedLemon,
      label: 'Citron',
    },
    {
      token: 'sourCandy',
      face: drawnedSourCandy,
      label: 'Bonbon acidulé',
    },
    {
      token: 'ammo',
      face: drawnedAmmo,
      label: 'Munitions',
    },
  ]

  const isWon = (
    token: string,
    face: number,
  ): 'stealthy' | 'other' | 'lost' => {
    const { pickedRoomCard } = UseRoomCards()
    if (pickedRoomCard === null) {
      return 'lost'
    }
    const facesToHave: TypeRoomDiceFace =
      pickedRoomCard[token as TypeRoomCardToken]
    const facesToHaveStealthy: TypeRoomDiceFace = [
      facesToHave[0] - 1,
      ...facesToHave,
    ]
    if (facesToHave.includes(face)) {
      return 'other'
    }
    if (facesToHaveStealthy.includes(face)) {
      return 'stealthy'
    }
    return 'lost'
  }

  return (
    <div className={cn(TokenDicesVariants({ className }))}>
      <div className="flex flex-col gap-4">
        {dicesList.map(({ token, face, label }) => {
          return (
            <DiceAndLabel key={token}>
              <p>{label}</p>
              <Dice
                variant={isWon(token, face)}
                faceNumber={face}
                size="normal"
              />
            </DiceAndLabel>
          )
        })}
      </div>
      <button
        onClick={drawResources}
        className="bg-button-bg self-center text-button-text py-2 px-4 rounded-button w-[175px]"
      >
        Lancer
        <br />
        les dés &quot;ressources&quot;
      </button>
    </div>
  )
}

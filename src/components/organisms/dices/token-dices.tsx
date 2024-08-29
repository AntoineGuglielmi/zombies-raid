import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { UseDices } from '@/store'
import Dice from '@/components/atoms/dice/dice'
import DiceAndLabel from '@/components/molecules/dice-and-label/dice-and-label'
import One from '@/components/atoms/dice/one'
import { useEffect, useState } from 'react'
import Two from '@/components/atoms/dice/two'
import Three from '@/components/atoms/dice/three'
import Four from '@/components/atoms/dice/four'
import Five from '@/components/atoms/dice/five'
import Six from '@/components/atoms/dice/six'

type TokenDicesProps = {
  className?: string
  children?: React.ReactNode
}

const TokenDicesVariants = cva('TokenDices flex justify-center gap-8', {
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

  const diceFace = (faceNumber: number) => {
    switch (faceNumber) {
      case 1:
        return <One />
      case 2:
        return <Two />
      case 3:
        return <Three />
      case 4:
        return <Four />
      case 5:
        return <Five />
      case 6:
        return <Six />
      default:
        return faceNumber
    }
  }

  return (
    <div className={cn(TokenDicesVariants({ className }))}>
      <div className="flex flex-col gap-4">
        <DiceAndLabel>
          <p>Munitions</p>
          <Dice>{diceFace(drawnedAmmo)}</Dice>
        </DiceAndLabel>
        <DiceAndLabel>
          <p>Café</p>
          <Dice>{diceFace(drawnedCoffee)}</Dice>
        </DiceAndLabel>
        <DiceAndLabel>
          <p>Croissant</p>
          <Dice>{diceFace(drawnedCroissant)}</Dice>
        </DiceAndLabel>
        <DiceAndLabel>
          <p>Citron</p>
          <Dice>{diceFace(drawnedLemon)}</Dice>
        </DiceAndLabel>
        <DiceAndLabel>
          <p>Bonbon acidulé</p>
          <Dice>{diceFace(drawnedSourCandy)}</Dice>
        </DiceAndLabel>
      </div>
      <button
        onClick={drawResources}
        className="bg-button-bg self-center text-button-text py-2 px-4 rounded-button"
      >
        Lancer
        <br />
        les dés &quot;ressources&quot;
      </button>
    </div>
  )
}

import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { UseDices } from '@/store'
import DiceAndLabel from '@/components/molecules/dice-and-label/dice-and-label'
import Dice from '@/components/atoms/dice/dice'
import One from '@/components/atoms/dice/one'
import Two from '@/components/atoms/dice/two'
import Three from '@/components/atoms/dice/three'
import Four from '@/components/atoms/dice/four'
import Five from '@/components/atoms/dice/five'
import Six from '@/components/atoms/dice/six'

type ZombieDicesProps = {
  className?: string
  children?: React.ReactNode
}

const ZombieDicesVariants = cva(
  'ZombieDices flex justify-center items-center gap-8',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function ZombieDices({ className, children }: ZombieDicesProps) {
  const {
    drawnedFastZombie,
    drawnedSlowZombie,
    drawnedSniperZombie,
    drawZombies,
  } = UseDices()

  const diceFace = (faceNumber: number) => {
    switch (faceNumber) {
      case 0:
        return null
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
    <div className={cn(ZombieDicesVariants({ className }))}>
      <div className="flex flex-col gap-4">
        <DiceAndLabel>
          <p>Zombie lent</p>
          <Dice>{diceFace(drawnedSlowZombie)}</Dice>
        </DiceAndLabel>
        <DiceAndLabel>
          <p>Zombie rapide</p>
          <Dice>{diceFace(drawnedFastZombie)}</Dice>
        </DiceAndLabel>
        <DiceAndLabel>
          <p>Zombie sniper</p>
          <Dice>{diceFace(drawnedSniperZombie)}</Dice>
        </DiceAndLabel>
      </div>
      <button
        onClick={drawZombies}
        className="bg-button-bg self-center text-button-text py-2 px-4 rounded-button"
      >
        Lancer
        <br />
        les dés &quot;zombies&quot;
      </button>
    </div>
  )
}

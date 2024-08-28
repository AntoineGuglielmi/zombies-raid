import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { UseCorridorCards, UseRoomCards } from '@/store'
import CorridorCard from '@/components/atoms/card/corridor-card'

type PickCorridorProps = {
  className?: string
  children?: React.ReactNode
}

const PickCorridorVariants = cva(
  'PickCorridor bg-body-bg rounded-pick p-4 flex justify-around items-center relative',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function PickCorridor({
  className,
  children,
}: PickCorridorProps) {
  const {
    corridorCards,
    pickCorridorCard,
    pickedCorridorCard,
    putCorridorCardInHand,
  } = UseCorridorCards()

  return (
    <div className={cn(PickCorridorVariants({ className }))}>
      <div className="PickCorridor__state absolute top-4 left-4">
        Cartes restantes : {corridorCards.length}
      </div>
      <CorridorCard onClick={pickCorridorCard}>
        Piocher une carte couloir
      </CorridorCard>
      <CorridorCard
        {...(pickedCorridorCard ? { card: pickedCorridorCard } : {})}
        onClick={putCorridorCardInHand}
      >
        ...
      </CorridorCard>
    </div>
  )
}

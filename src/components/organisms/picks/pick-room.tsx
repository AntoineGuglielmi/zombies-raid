import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { UseRoomCards } from '@/store'
import RoomCard from '@/components/atoms/card/room-card'

type PickRoomProps = {
  className?: string
  children?: React.ReactNode
}

const PickRoomVariants = cva(
  'PickRoom bg-body-bg rounded-pick p-4 pt-14 flex max-sm:flex-col gap-4 justify-around items-center relative',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function PickRoom({ className, children }: PickRoomProps) {
  const { pickedRoomCard, roomCards, movePickedCardToBoard, pickRoomCard } =
    UseRoomCards()

  return (
    <div className={cn(PickRoomVariants({ className }))}>
      <div className="PickRoom__state absolute top-4 left-4">
        Cartes restantes : {roomCards.length}
      </div>
      <RoomCard onClick={pickRoomCard}>Piocher une carte couloir</RoomCard>
      <RoomCard
        {...(pickedRoomCard ? { card: pickedRoomCard } : {})}
        onClick={movePickedCardToBoard}
      >
        ...
      </RoomCard>
    </div>
  )
}

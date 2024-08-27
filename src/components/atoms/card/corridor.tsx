import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Card from './card'
import { TypeCorridorCard } from '@/types'
import { usePlayers } from '@/stores/usePlayers'
import { useBoard } from '@/stores/useBoard'

type CorridorProps = {
  className?: string
  variant?: 'onSet' | 'pick'
  children?: React.ReactNode
  doors?: TypeCorridorCard['doors']
  stairs?: TypeCorridorCard['stairs']
  face?: TypeCorridorCard['face']
  id?: TypeCorridorCard['id']
  start?: TypeCorridorCard['start']
  onClick?: () => void
  onRightClick?: () => void
}

const CorridorVariants = cva('Card--Corridor text-card-text relative', {
  variants: {
    variant: {
      onSet: 'w-[200px] h-[200px]',
      pick: 'w-[100px] h-[100px]',
    },
  },
  defaultVariants: {
    variant: 'onSet',
  },
})

export default function Corridor({
  className,
  variant,
  children,
  doors,
  face,
  stairs,
  id,
  start,
  // onClick,
  onRightClick,
}: CorridorProps) {
  const { getCurrentPlayer, movePlayer, placeCardOnBoard } = usePlayers()
  const { onSet } = useBoard()
  const Door = ({ position }: { position: 'top' | 'bottom' }) => {
    return (
      <div
        className={`absolute ${
          position === 'top' ? 'top-[5%]' : 'bottom-[5%]'
        } left-1/2 transform -translate-x-1/2 w-[75%] h-2 bg-card-door`}
      />
    )
  }

  const onClick = () => {
    if (variant === 'onSet') {
      const playerCurrentCardId = getCurrentPlayer().cardId
      const thisCardIndex = onSet.findIndex((card) => card.id === id)
      const previousOnSetCard = onSet[thisCardIndex - 1]
      const nextOnSetCard = onSet[thisCardIndex + 1]
      if (
        id &&
        (previousOnSetCard.id === playerCurrentCardId ||
          nextOnSetCard.id === playerCurrentCardId)
      ) {
        movePlayer(id)
      }
    }

    if (id && variant === 'pick') {
      placeCardOnBoard(id)
    }
  }

  return (
    <Card
      variant={variant}
      className={cn(CorridorVariants({ variant, className }))}
      // {...(onClick && { onClick })}
      onClick={onClick}
      {...(onRightClick && { onRightClick })}
      id={id}
    >
      {children}
      {doors && doors[0] === 1 && Door({ position: 'top' })}
      {doors && doors[1] === 1 && Door({ position: 'bottom' })}
    </Card>
  )
}

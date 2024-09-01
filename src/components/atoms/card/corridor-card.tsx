import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { TypeCorridorCard } from '@/types'
import dynamic from 'next/dynamic'

type CorridorCardProps = {
  className?: string
  children?: React.ReactNode
  card?: TypeCorridorCard
  onClick?: () => void
}

const CorridorCardVariants = cva(
  'CorridorCard bg-card-bg h-[175px] w-[175px] p-2 flex flex-col items-center justify-center text-center rounded-card cursor-pointer',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function CorridorCard({
  className,
  children,
  card,
  onClick,
}: CorridorCardProps) {
  const computedDoors = () => {
    switch (card?.doors) {
      case 'left':
        return 'gauche'
      case 'right':
        return 'droite'
      case 'top':
        return 'haut'
      default:
        return card?.doors
    }
  }

  console.log({
    cardFromCarridorCard: card,
  })

  const computedDoorsLabel = () => {
    switch (card?.doors) {
      case 2:
        return 'Portes'
      default:
        return 'Porte'
    }
  }

  const CardSVG = dynamic(() => import(`../rooms/${card?.typeId}`), {
    ssr: false,
  })

  return (
    <div
      className={cn(CorridorCardVariants({ className }))}
      {...(onClick ? { onClick } : {})}
    >
      {card ? (
        <>
          {/* {card.stairs ? (
            <p>Les escaliers ! On est sauvé !</p>
          ) : (
            <>
              <p>
                {computedDoorsLabel()} : {computedDoors()}
              </p>
              <p>Intersection : {card.intersection || 'Non'}</p>
              <p>Virage : {card.turn ? 'Oui' : 'Non'}</p>
            </>
          )} */}
          <CardSVG />
        </>
      ) : (
        children
      )}
    </div>
  )
}

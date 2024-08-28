import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { TypeRoomCard } from '@/types'

type RoomCardProps = {
  className?: string
  children?: React.ReactNode
  card?: TypeRoomCard
  onClick?: () => void
}

const RoomCardVariants = cva(
  'RoomCard bg-card-bg h-[250px] w-[250px] p-4 flex flex-col items-center justify-center text-center rounded-card',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function RoomCard({
  className,
  children,
  card,
  onClick,
}: RoomCardProps) {
  return (
    <div
      className={cn(RoomCardVariants({ className }))}
      {...(onClick ? { onClick } : {})}
    >
      {card ? (
        <>
          <p>Verrouillée : {card.locked ? 'Oui' : 'Non'}</p>
          <p>Piégée : {card.trapped ? 'Oui' : 'Non'}</p>
          <p>Café : {card.coffee}</p>
          <p>Croissant : {card.croissant}</p>
          <p>Citron : {card.lemon}</p>
          <p>Bonbon acidulé : {card.sourCandy}</p>
          <p>Munitions : {card.ammo}</p>
        </>
      ) : (
        children
      )}
    </div>
  )
}

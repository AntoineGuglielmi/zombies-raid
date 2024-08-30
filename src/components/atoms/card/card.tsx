import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { usePlayers } from '@/stores/usePlayers'

type CardProps = {
  className?: string
  variant?: 'pick' | 'onSet'
  onClick?: () => void
  onRightClick?: () => void
  children?: React.ReactNode
  id?: number
}

const CardVariants = cva(
  'Card rounded-card bg-card-bg border-card-border relative',
  {
    variants: {
      // size: {
      //   corridor: 'w-[200px] h-[200px]',
      //   start: 'w-[200px] h-[300px]',
      //   room: 'w-[300px] h-[300px]',
      // },
      variant: {
        pick: 'border-card shadow-[0_0_0.25rem_0_rgba(0,0,0,0.25)]',
        onSet: 'border-[10px]',
      },
    },
    defaultVariants: {
      // size: 'corridor',
      variant: 'onSet',
    },
  },
)

export default function Card({
  className,
  onClick,
  onRightClick,
  variant,
  children,
  id,
}: CardProps) {
  const { players } = usePlayers()

  return (
    <div
      className={cn(CardVariants({ /*size,*/ variant, className }))}
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault()
        onRightClick && onRightClick()
      }}
    >
      {children}
      {
        <div className="Card__Players absolute top-0 left-0 flex flex-col gap-1">
          {players.map((player, i) => {
            return player.cardId === id ? (
              <span key={i}>{player.name}</span>
            ) : null
          })}
        </div>
      }
    </div>
  )
}

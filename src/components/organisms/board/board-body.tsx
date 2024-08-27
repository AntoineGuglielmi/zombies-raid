import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { useBoard } from '@/stores/useBoard'
import Start from '@/components/atoms/card/start'
import Corridor from '@/components/atoms/card/corridor'

type BoardBodyProps = {
  className?: string
  children?: React.ReactNode
}

const BoardBodyVariants = cva('BoardBody flex gap-4 items-center p-4', {
  variants: {},
  defaultVariants: {},
})

export default function BoardBody({ className, children }: BoardBodyProps) {
  // const onSetCards = useBoard((state) => state.onSet)
  const { onSet: onSetCards } = useBoard()
  return (
    <div
      id="cards"
      className={cn(BoardBodyVariants({ className }))}
    >
      {onSetCards.map((card, i) => {
        return card.start ? (
          <Start
            key={i}
            {...card}
          />
        ) : (
          <Corridor
            key={i}
            {...card}
            variant="onSet"
          />
        )
      })}
    </div>
  )
}

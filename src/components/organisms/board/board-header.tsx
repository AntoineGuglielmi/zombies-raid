import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Corridor from '@/components/atoms/card/corridor'

type BoardHeaderProps = {
  className?: string
  children?: React.ReactNode
}

const BoardHeaderVariants = cva(
  'BoardHeader flex flex-col gap-4 p-4 border-b border-b-card-border',
  {
    variants: {},
    defaultVariants: {},
  },
)

const rotation = (i: number) => {
  switch (i) {
    case 0:
      return 'rotate-[-5deg]'
    case 1:
      return 'rotate-[-7deg]'
    case 2:
      return 'rotate-[4deg]'
    default:
      return ''
  }
}

export default function BoardHeader({ className, children }: BoardHeaderProps) {
  return (
    <header className={cn(BoardHeaderVariants({ className }))}>
      <p>Joueur en cours : XXX</p>

      <p>Actions : X</p>

      <div
        id="pick"
        className="relative h-[125px] w-[125px]"
      >
        {[0, 1, 2].map((_, i) => {
          return (
            <Corridor
              key={i}
              className={`text-center flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${rotation(
                i,
              )} ${i === 0 ? 'z-10 cursor-pointer' : ''}`}
              variant="pick"
            >
              Carte
              <br />
              couloir
            </Corridor>
          )
        })}
      </div>
    </header>
  )
}

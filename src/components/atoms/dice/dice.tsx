import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import One from './one'
import Two from './two'
import Three from './three'
import Four from './four'
import Five from './five'
import Six from './six'

type DiceProps = {
  className?: string
  children?: React.ReactNode
  variant?: 'stealthy' | 'lost' | 'other'
  size?: 'normal' | 'small'
  faceNumber?: number
}

const DiceVariants = cva('Dice bg-dice-bg relative', {
  variants: {
    variant: {
      stealthy: 'ring-[6px] ring-dice-ring-color-stealthy',
      other: 'ring-[3px] ring-dice-ring-color-other',
      lost: '',
    },
    size: {
      normal: 'h-[75px] w-[75px] rounded-dice ',
      small: 'h-[23px] w-[23px] rounded-[2px]',
    },
  },
  defaultVariants: {
    variant: 'lost',
    size: 'normal',
  },
})

export default function Dice({
  className,
  children,
  variant,
  size,
  faceNumber,
}: DiceProps) {
  const diceFace = (faceNumber: number) => {
    switch (faceNumber) {
      case 0:
        return null
      case 1:
        return <One size={size} />
      case 2:
        return <Two size={size} />
      case 3:
        return <Three size={size} />
      case 4:
        return <Four size={size} />
      case 5:
        return <Five size={size} />
      case 6:
        return <Six size={size} />
      default:
        return faceNumber
    }
  }

  return (
    <div className={cn(DiceVariants({ variant, className, size }))}>
      {faceNumber ? diceFace(faceNumber) : children}
    </div>
  )
}

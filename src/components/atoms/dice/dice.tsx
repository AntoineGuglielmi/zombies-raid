import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type DiceProps = {
  className?: string
  children?: React.ReactNode
}

const DiceVariants = cva(
  'Dice h-[75px] w-[75px] bg-dice-bg rounded-dice relative',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function Dice({ className, children }: DiceProps) {
  return <div className={cn(DiceVariants({ className }))}>{children}</div>
}

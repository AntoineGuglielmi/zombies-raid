import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type DiceSlowProps = {
  className?: string
  children?: React.ReactNode
}

const DiceSlowVariants = cva('DiceSlow', {
  variants: {},
  defaultVariants: {},
})

export default function DiceSlow({ className, children }: DiceSlowProps) {
  return <div className={cn(DiceSlowVariants({ className }))}>DiceSlow</div>
}

import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type DiceSniperProps = {
  className?: string
  children?: React.ReactNode
}

const DiceSniperVariants = cva('DiceSniper', {
  variants: {},
  defaultVariants: {},
})

export default function DiceSniper({ className, children }: DiceSniperProps) {
  return <div className={cn(DiceSniperVariants({ className }))}>DiceSniper</div>
}

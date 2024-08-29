import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type DiceAndLabelProps = {
  className?: string
  children?: React.ReactNode
}

const DiceAndLabelVariants = cva(
  'DiceAndLabel grid grid-cols-[1fr_auto] gap-4 text-right items-center justify-between',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function DiceAndLabel({
  className,
  children,
}: DiceAndLabelProps) {
  return (
    <div className={cn(DiceAndLabelVariants({ className }))}>{children}</div>
  )
}

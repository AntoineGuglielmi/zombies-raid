import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type ChipProps = {
  className?: string
  children?: React.ReactNode
}

const ChipVariants = cva(
  'Chip h-chip-size w-chip-size rounded-full bg-chip-bg absolute transform',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function Chip({ className, children }: ChipProps) {
  return <div className={cn(ChipVariants({ className }))} />
}

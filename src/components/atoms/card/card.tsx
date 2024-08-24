import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type CardProps = {
  className?: string
  variant?: 'pick' | 'onSet'
  // size?: 'corridor' | 'start' | 'room'
  children?: React.ReactNode
}

const CardVariants = cva('Card rounded-card bg-card-bg border-card-border', {
  variants: {
    // size: {
    //   corridor: 'w-[200px] h-[200px]',
    //   start: 'w-[200px] h-[300px]',
    //   room: 'w-[300px] h-[300px]',
    // },
    variant: {
      pick: 'border-[6px] shadow-[0_0_0.25rem_0_rgba(0,0,0,0.15)]',
      onSet: 'border-[10px]',
    },
  },
  defaultVariants: {
    // size: 'corridor',
    variant: 'onSet',
  },
})

export default function Card({
  className,
  // size,
  variant,
  children,
}: CardProps) {
  return (
    <div className={cn(CardVariants({ /*size,*/ variant, className }))}>
      {children}
    </div>
  )
}

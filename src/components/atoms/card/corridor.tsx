import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Card from './card'

type CorridorProps = {
  className?: string
  variant?: 'onSet' | 'pick'
  children?: React.ReactNode
}

const CorridorVariants = cva('Card--Corridor text-card-text', {
  variants: {
    variant: {
      onSet: 'w-[200px] h-[200px]',
      pick: 'w-[100px] h-[100px]',
    },
  },
  defaultVariants: {
    variant: 'onSet',
  },
})

export default function Corridor({
  className,
  variant,
  children,
}: CorridorProps) {
  return (
    <Card
      variant={variant}
      className={cn(CorridorVariants({ variant, className }))}
    >
      {children}
    </Card>
  )
}

import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Card from './card'

type RoomProps = {
  className?: string
  variant?: 'pick' | 'onSet'
  children?: React.ReactNode
  id?: number
  lemon?: number
  coffee?: number
  croissant?: number
  ammo?: number
  sourCandy?: number
  locked?: boolean
  trapped?: boolean
}

const RoomVariants = cva('Room', {
  variants: {
    variant: {
      pick: 'w-[125px] h-[125px]',
      onSet: 'w-[300px] h-[300px]',
    },
  },
  defaultVariants: {
    variant: 'onSet',
  },
})

export default function Room({
  className,
  variant,
  children,
  id,
  ammo,
  coffee,
  croissant,
  lemon,
  locked,
  sourCandy,
  trapped,
}: RoomProps) {
  return (
    <Card
      variant={variant}
      className={cn(RoomVariants({ variant, className }))}
      id={id}
    >
      {children}
    </Card>
  )
}

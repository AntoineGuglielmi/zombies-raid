import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Card from './card'

type StartProps = {
  className?: string
  variant?: 'default' | 'other'
  size?: 'default' | 'medium'
  children?: React.ReactNode
}

const StartVariants = cva(
  'Card--Start w-[200px] h-[300px] flex items-center justify-center text-card-text',
  {
    variants: {
      variant: {
        default: '',
        other: '',
      },
      size: {
        default: '',
        medium: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export default function Start({
  className,
  variant,
  size,
  children,
}: StartProps) {
  return (
    <Card
      variant="onSet"
      className={cn(StartVariants({ variant, size, className }))}
    >
      Carte départ
    </Card>
  )
}

import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import TokenDices from './token-dices'
import ZombieDices from './zombie-dices'

type DicesProps = {
  className?: string
  children?: React.ReactNode
}

const DicesVariants = cva(
  'Dices bg-body-bg rounded-dices p-4 flex flex-col justify-around relative',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function Dices({ className, children }: DicesProps) {
  return (
    <div className={cn(DicesVariants({ className }))}>
      <TokenDices />
      <ZombieDices />
    </div>
  )
}

import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type TokenDicesProps = {
  className?: string
  children?: React.ReactNode
}

const TokenDicesVariants = cva('TokenDices', {
  variants: {},
  defaultVariants: {},
})

export default function TokenDices({ className, children }: TokenDicesProps) {
  return <div className={cn(TokenDicesVariants({ className }))}>TokenDices</div>
}

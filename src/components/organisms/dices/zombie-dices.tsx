import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type ZombieDicesProps = {
  className?: string
  children?: React.ReactNode
}

const ZombieDicesVariants = cva('ZombieDices', {
  variants: {},
  defaultVariants: {},
})

export default function ZombieDices({ className, children }: ZombieDicesProps) {
  return (
    <div className={cn(ZombieDicesVariants({ className }))}>ZombieDices</div>
  )
}

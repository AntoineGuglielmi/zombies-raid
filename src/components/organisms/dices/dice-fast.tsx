import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type DiceFastProps = {
  className?: string
  children?: React.ReactNode
}

const DiceFastVariants = cva('DiceFast', {
  variants: {},
  defaultVariants: {},
})

export default function DiceFast({ className, children }: DiceFastProps) {
  return <div className={cn(DiceFastVariants({ className }))}>DiceFast</div>
}

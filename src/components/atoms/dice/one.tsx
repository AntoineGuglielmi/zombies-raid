import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Chip from './chip'

type OneProps = {
  className?: string
  children?: React.ReactNode
  size?: 'normal' | 'small'
}

export default function One({ className, children, size }: OneProps) {
  return (
    <>
      <Chip className="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
    </>
  )
}

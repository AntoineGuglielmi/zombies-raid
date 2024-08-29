import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Chip from './chip'

type OneProps = {
  className?: string
  children?: React.ReactNode
}

export default function One({ className, children }: OneProps) {
  return (
    <>
      <Chip className="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
    </>
  )
}

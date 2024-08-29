import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Chip from './chip'
import One from './one'
import Two from './two'
import Four from './four'
import Five from './five'

type SixProps = {
  className?: string
  children?: React.ReactNode
}

export default function Six({ className, children }: SixProps) {
  return (
    <>
      <Four />
      <Chip className="top-1/2 left-dice-chip translate-y-[-50%]" />
      <Chip className="top-1/2 right-dice-chip translate-y-[-50%]" />
    </>
  )
}

import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Chip from './chip'
import One from './one'
import Two from './two'

type FourProps = {
  className?: string
  children?: React.ReactNode
}

export default function Four({ className, children }: FourProps) {
  return (
    <>
      <Two />
      <Chip className="top-dice-chip left-dice-chip" />
      <Chip className="bottom-dice-chip right-dice-chip" />
    </>
  )
}

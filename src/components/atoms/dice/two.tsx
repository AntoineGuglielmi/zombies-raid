import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Chip from './chip'

type TwoProps = {
  className?: string
  children?: React.ReactNode
}

export default function Two({ className, children }: TwoProps) {
  return (
    <>
      <Chip className="top-dice-chip right-dice-chip" />
      <Chip className="bottom-dice-chip left-dice-chip" />
    </>
  )
}

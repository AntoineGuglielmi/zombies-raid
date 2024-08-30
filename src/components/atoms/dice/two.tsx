import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Chip from './chip'

type TwoProps = {
  className?: string
  children?: React.ReactNode
  size?: 'normal' | 'small'
}

export default function Two({ className, children, size }: TwoProps) {
  return (
    <>
      <Chip className="top-dice-chip right-dice-chip" />
      <Chip className="bottom-dice-chip left-dice-chip" />
    </>
  )
}

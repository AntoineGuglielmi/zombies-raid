import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Chip from './chip'
import One from './one'
import Two from './two'

type ThreeProps = {
  className?: string
  children?: React.ReactNode
  size?: 'normal' | 'small'
}

export default function Three({ className, children, size }: ThreeProps) {
  return (
    <>
      <One />
      <Two />
    </>
  )
}

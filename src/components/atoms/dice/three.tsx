import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Chip from './chip'
import One from './one'
import Two from './two'

type ThreeProps = {
  className?: string
  children?: React.ReactNode
}

export default function Three({ className, children }: ThreeProps) {
  return (
    <>
      <One />
      <Two />
    </>
  )
}

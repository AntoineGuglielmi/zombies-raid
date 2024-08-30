import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Chip from './chip'
import One from './one'
import Two from './two'
import Four from './four'

type FiveProps = {
  className?: string
  children?: React.ReactNode
  size?: 'normal' | 'small'
}

export default function Five({ className, children, size }: FiveProps) {
  return (
    <>
      <One />
      <Four />
    </>
  )
}

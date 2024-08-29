import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Chip from './chip'
import One from './one'
import Two from './two'
import Four from './four'

type FiveProps = {
  className?: string
  children?: React.ReactNode
}

export default function Five({ className, children }: FiveProps) {
  return (
    <>
      <One />
      <Four />
    </>
  )
}

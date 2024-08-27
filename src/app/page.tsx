'use client'

import Corridor from '@/components/atoms/card/corridor'
import Start from '@/components/atoms/card/start'
import { useBoard } from '@/stores/useBoard'
import { useCorridorCards } from '@/stores/useCorridorCards'
import { UsePick } from '@/stores/usePick'
import { usePlayers } from '@/stores/usePlayers'
import dynamic from 'next/dynamic'
import { Suspense, useEffect } from 'react'

const BoardHeader = dynamic(
  () => import('@/components/organisms/board/board-header'),
  {
    ssr: false,
  },
)
const BoardBody = dynamic(
  () => import('@/components/organisms/board/board-body'),
  {
    ssr: false,
  },
)

export default function Home() {
  return (
    <div
      id="board"
      className="grid grid-rows-[auto,1fr] h-screen"
    >
      <BoardHeader />
      <BoardBody />
    </div>
  )
}

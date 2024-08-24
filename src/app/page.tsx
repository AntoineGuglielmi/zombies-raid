'use client'

import Corridor from '@/components/atoms/card/corridor'
import Start from '@/components/atoms/card/start'
import BoardBody from '@/components/organisms/board/board-body'
import BoardHeader from '@/components/organisms/board/board-header'
import { useBoard } from '@/stores/useBoard'
import { useCorridorCards } from '@/stores/useCorridorCards'
import { usePick } from '@/stores/usePick'

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

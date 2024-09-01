'use client'

import dynamic from 'next/dynamic'

const Dices = dynamic(() => import('@/components/organisms/dices/dices'), {
  ssr: false,
})
const PickCorridor = dynamic(
  () => import('@/components/organisms/picks/pick-corridor'),
  {
    ssr: false,
  },
)
const PickRoom = dynamic(
  () => import('@/components/organisms/picks/pick-room'),
  {
    ssr: false,
  },
)

type V2PageProps = {
  params: {}
}

export default function V2Page({ params: {} }: V2PageProps) {
  return (
    <main className="bg-[white] min-h-screen grid grid-cols-1 xl:grid-cols-2 gap-4 p-4">
      <div className="grid grid-rows-[auto_auto] gap-4">
        <PickCorridor />
        <PickRoom />
      </div>
      <Dices />
    </main>
  )
}

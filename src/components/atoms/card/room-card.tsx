import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { TypeRoomCard, TypeRoomDiceFace } from '@/types'
import Dice from '../dice/dice'
import Room from '../rooms/room'
import React from 'react'

type RoomCardProps = {
  className?: string
  children?: React.ReactNode
  card?: TypeRoomCard
  onClick?: () => void
}

const RoomCardVariants = cva(
  'RoomCard bg-card-bg h-[260px] w-[260px] p-2 flex flex-col gap-1 items-center justify-center text-center rounded-card cursor-pointer relative overflow-hidden',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function RoomCard({
  className,
  children,
  card,
  onClick,
}: RoomCardProps) {
  const tokenInfos = [
    {
      name: 'Café',
      faces: card?.coffee,
    },
    {
      name: 'Croissant',
      faces: card?.croissant,
    },
    {
      name: 'Citron',
      faces: card?.lemon,
    },
    {
      name: 'Bonbon acidulé',
      faces: card?.sourCandy,
    },
    {
      name: 'Munitions',
      faces: card?.ammo,
    },
  ]

  const computedTokenFaces = (faces?: TypeRoomDiceFace) => {
    if (!faces) {
      return []
    }
    return [faces[0] - 1, ...faces]
  }

  return (
    <div
      className={cn(RoomCardVariants({ className }))}
      {...(onClick ? { onClick } : {})}
    >
      {card ? (
        <>
          <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-full py-1 text-body-bg font-[700]">
            <p>Verrouillée : {card.locked ? 'Oui' : 'Non'}</p>
            <p>Piégée : {card.trapped ? 'Oui' : 'Non'}</p>
            <div className="grid grid-cols-[1fr_1fr] text-right gap-x-2 gap-y-1">
              {tokenInfos.map((tokenInfo, i) => {
                return (
                  <React.Fragment key={i}>
                    <p>{tokenInfo.name}</p>
                    <div className="flex gap-1">
                      {computedTokenFaces(tokenInfo.faces).map((face, i) => {
                        return (
                          <Dice
                            size="small"
                            key={face}
                            faceNumber={face}
                            className={
                              i === 0 ? 'bg-[#204629]' : 'bg-[#000000]'
                            }
                          />
                        )
                      })}
                    </div>
                  </React.Fragment>
                )
              })}
            </div>
          </div>

          <Room className="" />
        </>
      ) : (
        children
      )}
    </div>
  )
}

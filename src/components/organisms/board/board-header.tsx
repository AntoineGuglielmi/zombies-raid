import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Corridor from '@/components/atoms/card/corridor'
import { UsePick } from '@/stores/usePick'
import { usePlayers } from '@/stores/usePlayers'
import Room from '@/components/atoms/card/room'
import { useBoard } from '@/stores/useBoard'

type BoardHeaderProps = {
  className?: string
  children?: React.ReactNode
}

const BoardHeaderVariants = cva(
  'BoardHeader flex gap-4 p-4 border-b border-b-card-border',
  {
    variants: {},
    defaultVariants: {},
  },
)

const rotation = (i: number) => {
  switch (i) {
    case 0:
      return 'rotate-[-5deg]'
    case 1:
      return 'rotate-[-7deg]'
    case 2:
      return 'rotate-[4deg]'
    default:
      return ''
  }
}

export default function BoardHeader({ className, children }: BoardHeaderProps) {
  const pickCards = UsePick((state) => state.corridorCards)
  const { pickARoomCard: pickARoomCardFromStore, pickedRoomCard } = UsePick()
  const { onSet } = useBoard()
  // const currentPlayer = usePlayers((state) => state.getCurrentPlayer())
  const { getCurrentPlayer } = usePlayers()
  const addCardToCurrentPlayer = usePlayers((state) => state.addCard)
  const rotateCard = usePlayers((state) => state.rotateCard)

  const pickACard = () => {
    addCardToCurrentPlayer()
  }

  const onClick = () => {}

  const pickARoomCard = () => {
    pickARoomCardFromStore()
  }

  const currentPlayerCard = onSet.find(
    (card) => card.id === getCurrentPlayer().cardId,
  )

  return (
    <header className={cn(BoardHeaderVariants({ className }))}>
      <div>
        <div
          id="pick_corridor_cards"
          className="relative h-[125px] w-[125px]"
          onClick={pickACard}
        >
          {[0, 1, 2].map((_, i) => {
            return (
              <Corridor
                key={i}
                className={`text-center flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${rotation(
                  i,
                )}`}
                variant="pick"
              >
                Cartes
                <br />
                couloir
              </Corridor>
            )
          })}
        </div>
        <div
          id="pick_room_cards"
          className="relative h-[150px] w-[150px]"
          onClick={pickARoomCard}
        >
          {[0, 1, 2].map((_, i) => {
            return (
              <Room
                key={i}
                className={`text-center flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${rotation(
                  i,
                )}`}
                variant="pick"
              >
                Cartes
                <br />
                pièce
              </Room>
            )
          })}
        </div>
      </div>

      <div
        id="currentPlayer"
        className="flex flex-col gap-2"
      >
        <p>Joueur en cours : {getCurrentPlayer().name}</p>
        <p>Actions restantes : {getCurrentPlayer().actions}</p>
        <div
          id="currentPlayerCards"
          className="flex gap-2"
        >
          {getCurrentPlayer().cards.map((card, i) => {
            return (
              <Corridor
                key={i}
                className="text-center flex items-center justify-center"
                variant="pick"
                {...card}
                onClick={onClick}
                onRightClick={() => rotateCard(card.id)}
              />
            )
          })}
        </div>
        <div
          id="pickedRoomCard"
          className="flex gap-4"
        >
          {pickedRoomCard && (
            <Room
              className="text-center flex items-center justify-center"
              variant="pick"
              {...pickedRoomCard}
            >
              <div className="text-[0.75rem]">
                <p>Café : {pickedRoomCard.coffee}</p>
                <p>Croissant : {pickedRoomCard.croissant}</p>
                <p>Citron : {pickedRoomCard.lemon}</p>
                <p>Bonbon acidulé : {pickedRoomCard.sourCandy}</p>
                <p>Munition : {pickedRoomCard.ammo}</p>
              </div>
            </Room>
          )}
          {currentPlayerCard?.doors.toString() === [0, 1].toString() ||
          currentPlayerCard?.doors.toString() === [1, 0].toString() ? (
            <button>Placer</button>
          ) : (
            <div>
              <button>Placer en haut</button>
              <button>Placer en bas</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

type ReglesPageProps = {
  params: {}
}

const Strong = ({ children }: { children: React.ReactNode }) => {
  return <strong className="font-[700]">{children}</strong>
}

const Attention = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 bg-[#ff181860] rounded-[0.25rem] p-2 my-2">
      <p className="font-[700] underline text-[#ff2727]">Attention</p>{' '}
      <p>{children}</p>
    </div>
  )
}

const Info = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 bg-[#1861ff60] rounded-[0.25rem] p-2 my-2">
      <p className="font-[700] underline text-[#273dff]">Info</p>{' '}
      <p>{children}</p>
    </div>
  )
}

export default function ReglesPage({ params: {} }: ReglesPageProps) {
  return (
    <main className="ReglesPage flex flex-col gap-8 p-4">
      <p className="text-[1.25rem]">
        Vous vous retrouvez dans un groupe de survivants en pleine apocalypse
        zombie. Vous êtes parvenus à entrer dans un hôpital et êtes en
        sécurité... <Strong>pour l’instant</Strong>.
        <br />
        Votre salut : atteindre le toit de l’hôpital et vous échapper à bord
        d&apos;un hélicoptère. Vous devrez pour cela parcourir les deux étages
        du bâtiment et fouiller les diverses pièces à la recherche de
        ressources.
        <br />
        Mais faites vite. Les portes ne tiendront pas très longtemps...
      </p>

      <div>
        <p>2 types de cartes :</p>
        <ul className="ul-base">
          <li>
            <p>
              Cartes couloir (sans porte, avec porte(s), bifurcation,
              croisement, escaliers)
            </p>
          </li>
          <li>
            <p>
              Cartes pièces, dans lesquelles vous trouverez des ressources :
              café, croissant, bonbon acidulé, citron et munition
            </p>
          </li>
        </ul>
        3 types de pieces :
        <ul className="ul-base">
          <li>
            <p>Pièces piégées</p>
          </li>
          <li>
            <p>Pièces verrouillées (que vous pourrez ouvrir)</p>
          </li>
          <li>
            <p>Pièces ordinaires (ni piégées ni verrouillées)</p>
          </li>
        </ul>
      </div>

      <div>
        <p>
          Votre groupe de survivant est composé de 5 types de personnages
          différents :
        </p>
        <ul className="ul-base">
          <li>
            <p>
              <Strong>Le furtif</Strong>
            </p>
            <p>
              Le furtif est le seul à pouvoir fouiller les pièces piégés et il a
              plus de chance de trouver des ressources que les autres types de
              personnages.
            </p>
          </li>
          <li>
            <p>
              <Strong>Le costaud</Strong>
            </p>
            <p>
              Le costaud est le seul à pouvoir attaquer les zombies au corps à
              corps. Il est également le seul à pouvoir ouvrir les pièces
              verouillées : il est donc le seul à pouvoir les fouiller en
              premier. Après qu&apos;une pièce verrouillée ait été fouillée par
              le costaud, tout les personnages peuvent la fouiller.
            </p>
            <Attention>
              attaquer un zombie au corps à corps coûte 1 action
            </Attention>
          </li>
          <li>
            <p>
              <Strong>Le scientifique</Strong>
            </p>
            <p>
              Le scientifique est le seul à pouvoir confectionner des objets à
              partir des ressources amassées :
            </p>
            <ul className="ul-base">
              <li>
                <p>Point de vie : 1 café + 2 croissants</p>
              </li>
              <li>
                <p>Bombe : 1 citron + 2 bonbons acidulés</p>
              </li>
            </ul>
            <Info>
              afin de pouvoir confectionner ces objets, le scientifique doit
              être en possession des ressources nécessaires. Il faut donc que
              lui et ces compagnons se retrouvent sur la même case pour
              récupérer les ressources.
            </Info>
            <Info>
              le scientifique peut distribuer les objets confectionnés à ses
              compagnons à condition qu&apos;il les ait rejoints sur leurs
              cases.
            </Info>
          </li>

          <li>
            <p>
              <Strong>Le militaire</Strong>
            </p>
            <p>
              Le militaire est le seul à pouvoir utiliser les munitions amassées
              par les autres joueurs et les bombes confectionnées par le
              scientifique.
            </p>
            <Info>
              afin de pouvoir utiliser les munitions, le militaire doit au
              préalable les avoir récupérer auprès de ces compagnons en se
              retrouvant sur la même case.
            </Info>
            <Info>
              le militaire tue 1 zombie avec 1 munition avec une portée de 3
              cases en ligne droite.
            </Info>
            <Info>
              le militaire tue tous les zombies dans un rayon de 3 cases en
              ligne droite et diagonale avec 1 bombe avec une portée de 5 cases
              .
            </Info>
          </li>

          <li>
            <p>
              <Strong>Le blessé</Strong>
            </p>
            <p>
              Le blessé est le seul personnage non joueur et ne fouille donc pas
              les pièces. Il peut se voir distribuer des points de vies par les
              autres personnages.
            </p>
            <Info>
              le blessé est le seul espoir dans la confection d&apos;un vaccin
              contre le virus zombie, et est donc le personnage à protéger à
              tous prix. Mais de part ses blessures, ses déplacements sont
              limités, et il ralentit considérablement le groupe.
            </Info>
          </li>
        </ul>
      </div>

      <div>
        <p>
          Durant un tour de jeu, les 5 personnages (et les zombies) évoluent à
          tour de rôle. Le furtif commence le tour.
        </p>
        <ul className="ul-base">
          <li>
            <p>
              <strong className="font-[700]">Le personnage joueur :</strong>
            </p>
            <p>
              Au début de son tour, un joueur pioche autant de cartes couloir
              nécessaires pour en avoir 3 dans sa main.
            </p>
            <p>
              Au cours de son tour, le joueur peut réaliser jusqu&apos;à 5
              actions qui peuvent être :
            </p>
            <ul className="ul-base">
              <li>
                <p>Se déplacer de 1 case couloir</p>
              </li>
              <li>
                <p>
                  Entrer dans une pièce à laquelle il peut accéder et la
                  fouiller
                </p>
              </li>
              <li>
                <p>Sortir d&apos;une pièce</p>
              </li>
              <li>
                <p>
                  Donner une ou plusieurs ressources ou objets à 1 autre joueur
                  (1 action par joueur avec lequel il interagit)
                </p>
              </li>
              <li>
                <p>
                  Attaquer un zombie au corps à corps s&apos;il se trouve sur la
                  même case couloir (uniquement pour le costaud)
                </p>
              </li>
              <li>
                <p>
                  Utiliser 1 munition pour attaquer un zombie à distance
                  (uniquement pour le militaire)
                </p>
              </li>
              <li>
                <p>
                  Utiliser 1 bombe pour attaquer plusieurs zombies (uniquement
                  pour le militaire)
                </p>
              </li>
            </ul>
            <Attention>
              afin de pouvoir accéder à une pièce, le joueur doit être sur une
              carte couloir pourvue d&apos;une porte menant à la pièce.
            </Attention>
            <Attention>
              le joueur ne peut fouiller une pièce qu&apos;une seule fois par
              tour.
            </Attention>
            <Info>
              le joueur peut entrer dans une pièce dans laquelle se trouve déjà
              un autre joueur.
            </Info>
            <Attention>
              une pièce est inaccessible si un zombie se trouve sur la carte
              couloir qui y mène.
            </Attention>
          </li>

          <li>
            <p>
              <strong className="font-[700]">Le blessé :</strong>
            </p>
            <p>
              Le blessé avance de 1 case couloir par tour. S&apos;il se trouve
              sur la même case couloir qu&apos;un de ses compagnons, il peut
              récupérer un point de vie et le consommer.
            </p>
          </li>

          <li>
            <p>
              <strong className="font-[700]">Les zombies :</strong>
            </p>
            <p>
              Au début du 6ème tour, les portes de l&apos;hôpital cèdent et les
              zombies envahissent les lieux. Au début de chaque tour, et avant
              que les joueurs ne jouent, les dés zombies sont lancés pour
              déterminer le nombre et le type de zombies qui entrent.
            </p>
            <p>
              En fin de tour, après que tous les personnages aient joué, les
              zombies encore debout se déplacent ensuite comme suit :
              <ul className="ul-base">
                <li>
                  <p>
                    <Strong>Le zombie lent</Strong>
                  </p>
                  <p>
                    Le zombie lent se déplace de 2 cases. S&apos;il rencontre
                    une case couloir occupée par un ou plusieurs joueurs, il
                    stoppe sa course et attaque le joueur ayant le plus de point
                    de vie, lui faisant perdre 1 point de vie.
                  </p>
                </li>

                <li>
                  <p>
                    <Strong>Le zombie rapide</Strong>
                  </p>
                  <p>
                    Le zombie rapide se déplace de 3 cases à chaque fois et
                    emporte avec lui le zombie lent le plus proche des joueurs
                    qu&apos;il dépasse lors de son déplacement. Comme le zombie
                    lent, s&apos;il rencontre une case couloir occupée par un ou
                    plusieurs joueurs, il stoppe sa course et attaque le joueur
                    ayant le plus de point de vie, lui faisant perdre 1 point de
                    vie.
                  </p>
                </li>

                <li>
                  <p>
                    <Strong>Le zombie sniper</Strong>
                  </p>
                  <p>
                    Le zombie sniper se déplace de 2 cases à chaque fois et
                    crache un jet de bave acide sur une portée de 3 cases,
                    enlevant 1 point de vie à chaque joueur touché.
                  </p>
                </li>
              </ul>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}

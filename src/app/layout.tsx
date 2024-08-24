import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Zombie raid',
  description: `Vous vous retrouvez dans un groupe de survivants en pleine apocalypse zombie.
		Vous êtes parvenus à entrer dans un hôpital et êtes en sécurité... pour l’instant.
		Votre salut : atteindre le toit de l’hôpital et vous échapper à bord d'un hélicoptère.
		Vous devrez pour cela parcourir les deux étages du bâtiment et fouiller les diverses pièces à la recherche de ressources.
		Mais faites vite. Les portes ne tiendront plus très longtemps...`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} bg-body-bg text-board-text`}>
        {children}
      </body>
    </html>
  )
}

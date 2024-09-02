'use client'

import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { redirect } from 'next/navigation'

type RemoveClientSideDataProps = {
  className?: string
  children?: React.ReactNode
}

const RemoveClientSideDataVariants = cva(
  'RemoveClientSideData bg-body-bg text-board-text p-4 rounded-button',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function RemoveClientSideData({
  className,
  children,
}: RemoveClientSideDataProps) {
  const reset = () => {
    sessionStorage.clear()

    localStorage.clear()

    // caches.keys().then((keys) => {
    //   keys.forEach((key) => caches.delete(key))
    // })

    // indexedDB.databases().then((dbs) => {
    //   dbs.forEach((db) => {
    //     if (db.name) {
    //       indexedDB.deleteDatabase(db.name)
    //     }
    //   })
    // })

    // document.cookie = document.cookie
    //   .split(';')
    //   .reduce((newCookie1, keyVal) => {
    //     var pair = keyVal.trim().split('=')
    //     if (pair[0]) {
    //       if (pair[0] !== 'path' && pair[0] !== 'expires') {
    //         newCookie1 += pair[0] + '=;'
    //       }
    //     }
    //     return newCookie1
    //   }, 'expires=Thu, 01 Jan 1970 00:00:00 UTC; path:/;')

    return redirect('/v2')
  }

  return (
    <button
      onClick={reset}
      className={cn(RemoveClientSideDataVariants({ className }))}
    >
      Reset
    </button>
  )
}

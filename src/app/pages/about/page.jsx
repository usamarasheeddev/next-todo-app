import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      about page
      <Link href='/pages/home'>Home</Link>
      <Link href='/'>Landing</Link>
    </div>
  )
}

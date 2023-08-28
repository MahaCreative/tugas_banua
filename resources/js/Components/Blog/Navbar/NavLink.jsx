import React from 'react'
import { Link } from '@inertiajs/react'
import clsx from 'clsx'

export default function NavLink({children, routeLink, active}) {
    return (
      <>
        <Link as='div' href={routeLink} className={clsx(
          active ? " shadow-gray-400/30" : "",
          'font-fira font-extralight text-xs md:text-md lg:textlg text-white p-2 rounded-md shadow-sm hover:text-gray-200 hover:bg-slate-400/30 transition-all duration-300 ease hover:cursor-pointer')}>{children}</Link>
      </>
  )
}

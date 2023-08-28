import { Link } from '@inertiajs/react'
import React from 'react'
import NavLink from './NavLink'
// import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
      <div className='hidden md:flex fixed top-0 left-0 w-full min-h-5 z-10 bg-slate-950/30 backdrop-blur-sm justify-between items-center border-b border-slate-100/20 border-dashed'>
          <div className='px-16 py-4 relative'>
              <Link as='div' className='text-white font-bold font-fira text-2xl leading-snug -tracking-wide PX-8'>MAHACREATIVE</Link>
          </div>
          <div className='flex gap-3 relative px-16 py-4 items-center'>
              <NavLink active={true}>Home</NavLink>
              <NavLink >About Me</NavLink>
              <NavLink >Article</NavLink>
              <NavLink >Contact Me</NavLink>
              <NavLink >Screen Cast</NavLink>
          </div>
    </div>
  )
}




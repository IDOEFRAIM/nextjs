'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const layout = ({
    children,
}:{children:React.ReactNode}) => {

  const pathname = usePathname()

  const navLinks = [
    {name:'login',href:'/login'},
    {name:'register',href:'/register'},
        {name:'forget Password',href:'/forgotPassword'}

  ]
  return (
    <div>
      <div className="grid grid-cols-3 my-8">
                {
          navLinks.map((link)=> {
            const isActive =
              link.href === pathname || 
              (pathname.startsWith(link.href) &&  link.href !="/")
            return (
              <Link className={isActive ? 'text-2xl text-sky-400 text-center':
                'text-2xl text-gray-500 text-center'} href={link.href} 
              key={link.name}>{link.name} </Link>
            )
          })
        }
      </div>

      {children}
    </div>
  )
}

export default layout

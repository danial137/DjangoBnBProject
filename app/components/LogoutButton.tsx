'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import MenuLink from './navbar/MenuLink'
import { resetAuthCookie } from '../lib/action'

const LogoutButton: React.FC = () => {
    const router = useRouter()

    const submitLogout = async () => {
        
        resetAuthCookie()

        router.push('/')

    }
  return (
      <MenuLink label='Log out' onClick={submitLogout} />
          
  )
}

export default LogoutButton
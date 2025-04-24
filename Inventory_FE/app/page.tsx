'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/login')
  }, [])

  return (
    <div className=' h-full flex justify-center items-center'>
      <div className=' flex text-4xl font-serif'>Welcome to IOEPC Inventory</div>
    </div>
  )
}

export default Page
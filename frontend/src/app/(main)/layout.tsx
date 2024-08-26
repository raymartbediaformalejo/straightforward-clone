import React from 'react'

import Announcement from '@/components/announcement'
import Footer from '@/components/footer'
import Header from '@/components/header'

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Announcement/>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout
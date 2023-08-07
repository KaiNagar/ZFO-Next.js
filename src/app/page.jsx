'use client'
import { Home } from './pages/Home'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import RootLayout from './layout'

const HomePage = () => {
  return (
    <>
      <RootLayout>
      
        <header>
          <AppHeader />
        </header>
        <main>
          <Home />
        </main>
        <footer>
          <AppFooter />
        </footer>
      </RootLayout>
    </>
  )
}

export default HomePage

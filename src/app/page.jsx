'use client'
import './assets/styles/style.scss';
import { Home } from './pages/Home'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'

const HomePage = () => {
  return (
    <>
      <AppHeader />
      <Home />
      <AppFooter />
    </>
  )
}

export default HomePage

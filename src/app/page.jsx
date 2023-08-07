'use client'
import './assets/styles/style.scss'
import { Home } from './pages/Home'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import Head from 'next/head'

const HomePage = () => {
  return (
    <>
      <Head>
        {/* title */}
        <title>ZenFuze Outreach</title>

        {/* description */}
        <meta
          name='description'
          content='ZenFuze Outreach - We take care of your business'
        />

        {/* viewport */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/* Open Graph Tags */}
        <meta property='og:title' content='ZenFuze Outreach' />
        <meta
          property='og:description'
          content='We take care of your business'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/db9bey3ot/image/upload/v1691151934/ZenFuze_Outreach_Logo_250x250_likjkq.png'
        />
        <meta property='og:url' content='https://zenfuzeoutreach.com' />

        {/* favicons */}
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />

        {/* keywords */}
        <meta name='keywords' content='zenfuze, outreach, business' />
      </Head>
      <AppHeader />
      <Home />
      <AppFooter />
    </>
  )
}

export default HomePage

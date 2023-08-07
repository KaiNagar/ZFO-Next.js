import Head from "next/head";
import './assets/styles/style.scss'

export const metadata = {
  title: 'ZenFuze Outreach',
  description: 'ZenFuze Outreach - We take care of your business',
  ogTitle: 'ZenFuze Outreach - Your Business Partner',
  ogDescription: 'ZenFuze Outreach is here to help your business grow and thrive.',
  ogImage: 'https://res.cloudinary.com/db9bey3ot/image/upload/v1691151934/ZenFuze_Outreach_Logo_250x250_likjkq.png',
  ogUrl: 'https://zenfuzeoutreach.com/',
  canonical: 'https://zenfuzeoutreach.com/',
  keywords: 'business, outreach, services, growth, marketing, solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  )
}

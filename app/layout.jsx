import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Header'


const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Tutorial',
  description: 'Web app tutorial nextjs13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}

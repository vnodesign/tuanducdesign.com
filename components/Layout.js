import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/Header'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Layout({ children }) {
  return (
    <div className="vno-flex vno-flex-col">
      <Header />
      <main className="vno-min-h-screen vno-flex-1">{children}</main>
      <Footer />
    </div>
  )
}

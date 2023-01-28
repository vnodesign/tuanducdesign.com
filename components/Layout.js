import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/Header'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Layout({ children }) {
  const router = useRouter()
  const showBg = router.pathname !== '/' && router.pathname !== '/service'
  return (
    <div className="vno-flex vno-flex-col">
      {showBg && (
        <div className="vno-absolute vno-inset-x-0 vno-top-0 vno-z-20 vno-flex vno-justify-center vno-overflow-hidden vno-pointer-events-none">
          <div className="vno-w-[108rem] vno-flex-none vno-flex vno-justify-end">
            <picture>
              <img
                src={require('@/img/beams/docs@tinypng.png').default.src}
                alt="Background Light"
                className="vno-w-[71.75rem] vno-flex-none vno-max-w-none dark:vno-hidden"
                decoding="async"
              />
            </picture>
            <picture>
              <img
                src={require('@/img/beams/docs-dark@tinypng.png').default.src}
                alt="Background Dark"
                className="vno-w-[90rem] vno-flex-none vno-max-w-none vno-hidden dark:vno-block"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      )}
      <Header />
      <main className="vno-min-h-screen vno-flex-1">{children}</main>
      <Footer />
    </div>
  )
}

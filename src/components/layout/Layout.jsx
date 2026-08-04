import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import EnrollBanner from '@/components/home/EnrollBanner'
import { pageTransition } from '@/lib/motion'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} {...pageTransition}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <EnrollBanner />
      <Footer />
    </div>
  )
}

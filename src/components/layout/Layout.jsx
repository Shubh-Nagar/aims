import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import EnrollBanner from '@/components/home/EnrollBanner'
import { EASE, pageTransition } from '@/lib/motion'
import MagneticCards from '@/components/ui/MagneticCards'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <MagneticCards />

      {/* Route sweep. A navigation is the one moment the site can announce
          itself, and an 8px content fade was doing that silently. Keyed on
          the path so each navigation re-runs it; it lives outside the content
          AnimatePresence so a slow lazy chunk cannot hold it up. */}
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] w-full origin-left bg-gold-sweep"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, transition: { duration: 0.55, ease: EASE } }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
        />
      </AnimatePresence>

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

import { lazy } from 'react'

const RELOAD_FLAG = 'aims:chunk-reloaded'

/**
 * `lazy()` that survives a stale chunk.
 *
 * Routes are code-split, so the browser fetches a hashed chunk on demand.
 * After a redeploy (or after Vite re-optimizes dependencies in dev) the
 * filename an open tab remembers no longer exists — the dynamic import
 * rejects, Suspense never resolves, and the page goes blank with no message.
 *
 * On the first such failure we reload once to pick up the new asset manifest.
 * The sessionStorage flag makes sure a genuinely broken chunk falls through to
 * the error boundary instead of reloading forever.
 */
export default function lazyWithRetry(factory) {
  return lazy(async () => {
    try {
      const module = await factory()
      window.sessionStorage?.removeItem(RELOAD_FLAG)
      return module
    } catch (error) {
      let alreadyReloaded = false
      try {
        alreadyReloaded = window.sessionStorage?.getItem(RELOAD_FLAG) === '1'
        if (!alreadyReloaded) window.sessionStorage?.setItem(RELOAD_FLAG, '1')
      } catch {
        // Private mode / storage disabled — fall through to the boundary.
      }

      if (!alreadyReloaded) {
        window.location.reload()
        // Never resolves; the reload takes over.
        return new Promise(() => {})
      }
      throw error
    }
  })
}

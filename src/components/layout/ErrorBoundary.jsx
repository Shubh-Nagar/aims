import { Component } from 'react'
import { AlertTriangle, RotateCw } from 'lucide-react'

/**
 * Without a boundary, any uncaught render or effect error unmounts the whole
 * React tree and the reader is left staring at a white page with nothing to
 * act on. This turns that into a branded, recoverable message.
 *
 * `resetKey` (the pathname) clears the error on navigation, so one broken
 * route never strands the reader on every subsequent page.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidUpdate(prevProps) {
    if (this.state.error && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ error: null })
    }
  }

  componentDidCatch(error, info) {
    // Keep the detail in the console for whoever is debugging the page.
    console.error('Unhandled error rendering this page:', error, info?.componentStack)
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-xl rounded-2xl bg-surface p-8 text-center shadow-card ring-1 ring-line md:p-12">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold-100 text-gold-700">
              <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            </span>
            <h1 className="mt-6 text-2xl">This page didn&rsquo;t load</h1>
            <p className="prose-aims mt-3">
              Something went wrong while displaying this page. Reloading usually fixes it.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn btn-primary mt-7"
            >
              <RotateCw className="h-4 w-4" aria-hidden="true" />
              <span>Reload the page</span>
            </button>
            {import.meta.env.DEV && (
              <pre className="mt-6 overflow-x-auto rounded-xl bg-paper p-4 text-left text-xs text-muted">
                {this.state.error?.stack ?? String(this.state.error)}
              </pre>
            )}
          </div>
        </div>
      </section>
    )
  }
}

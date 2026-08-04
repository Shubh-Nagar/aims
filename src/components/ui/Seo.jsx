import { Helmet } from 'react-helmet-async'

/** Per-route title, description and canonical. */
export default function Seo({ title, description, path }) {
  const url = path ? `https://amaltasmedicalcollege.in${path}` : undefined
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  )
}

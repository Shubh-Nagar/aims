import Reveal from '@/components/ui/Reveal'
import DataTable from '@/components/ui/DataTable'

/** Wraps the shared DataTable so tables enter with the same motion as prose. */
export default function TableBlock({ caption, head, rows, total, note }) {
  return (
    <Reveal className="mt-6">
      <DataTable caption={caption} head={head} rows={rows} total={total} />
      {note && <p className="mt-3 text-xs text-muted">{note}</p>}
    </Reveal>
  )
}

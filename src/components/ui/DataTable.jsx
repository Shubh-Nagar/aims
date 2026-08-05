/** Accessible, horizontally scrollable table for intake and services data. */
export default function DataTable({ caption, head, rows, total }) {
  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-line">
      <div className="overflow-x-auto scrollbar-none">
        <table className="w-full min-w-[420px] border-collapse text-left text-sm">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr className="bg-brand-700 text-white">
              {head.map((cell) => (
                <th key={cell} scope="col" className="px-5 py-3.5 text-2xs font-semibold uppercase tracking-eyebrow">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-surface">
            {rows.map((row, i) => (
              <tr
                key={row.join('|')}
                className={`transition-colors duration-200 hover:bg-gold-100/60 ${
                  i % 2 ? 'bg-paper/60' : ''
                }`}
              >
                {row.map((cell, j) => (
                  <td
                    key={`${cell}-${j}`}
                    className={`border-t border-line px-5 py-3 ${
                      j === 0 ? 'font-medium text-brand-900' : 'text-muted'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
            {total && (
              <tr className="bg-brand-50 font-semibold text-brand-900">
                {total.map((cell, j) => (
                  <td key={`total-${j}`} className="border-t border-line px-5 py-3.5">
                    {cell}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

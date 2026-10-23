import { CheckCheck, FileText } from 'lucide-react'
import { cx } from '../ui'

type Msg =
  | { from: 'guest' | 'hotel'; text: string; time: string }
  | { from: 'hotel'; file: string; time: string }

const THREAD: Msg[] = [
  { from: 'guest', text: 'Hi, a room for 2 from 24 to 26 Oct?', time: '10:02' },
  {
    from: 'hotel',
    text: 'Deluxe Sea View is available: ₹8,400 for 2 nights incl. taxes. Shall I hold it for you?',
    time: '10:02',
  },
  { from: 'guest', text: 'Yes please', time: '10:03' },
  { from: 'hotel', text: 'Held for 15 minutes. Pay securely here: rzp.io/l/••••', time: '10:03' },
  { from: 'hotel', text: 'Payment received. Your booking HB-2481 is confirmed ✅', time: '10:06' },
  { from: 'hotel', file: 'Invoice-HB-2481.pdf', time: '10:06' },
]

/** An illustrative WhatsApp booking conversation, in the app's own visual language. */
export function WhatsAppMock({ className }: { className?: string }) {
  return (
    <div
      className={cx(
        'mx-auto w-full max-w-[19rem] overflow-hidden rounded-[2rem] bg-ink-950 p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10',
        className,
      )}
      aria-hidden
    >
      <div className="overflow-hidden rounded-[1.6rem] bg-[#efe7dc]">
        <div className="flex items-center gap-2.5 bg-[#0f5c4f] px-4 py-3 text-white">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-gold-400 text-[11px] font-bold text-ink-900">
            SR
          </div>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold">Seabreeze Residency</p>
            <p className="text-[10px] text-white/70">Business account</p>
          </div>
        </div>

        <div className="space-y-1.5 px-3 py-3">
          {THREAD.map((m, i) => (
            <div key={i} className={cx('flex', m.from === 'guest' ? 'justify-end' : 'justify-start')}>
              <div
                className={cx(
                  'max-w-[82%] rounded-lg px-2.5 py-1.5 text-[11.5px] leading-snug text-ink-900 shadow-sm',
                  m.from === 'guest' ? 'rounded-tr-none bg-[#d8fdd2]' : 'rounded-tl-none bg-white',
                )}
              >
                {'file' in m ? (
                  <span className="flex items-center gap-2 rounded-md bg-sand px-2 py-1.5">
                    <FileText className="h-4 w-4 shrink-0 text-red-500" />
                    <span className="truncate font-medium">{m.file}</span>
                  </span>
                ) : (
                  m.text
                )}
                <span className="mt-0.5 flex items-center justify-end gap-0.5 text-[9px] text-ink-400">
                  {m.time}
                  {m.from === 'guest' ? <CheckCheck className="h-3 w-3 text-sky-500" /> : null}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

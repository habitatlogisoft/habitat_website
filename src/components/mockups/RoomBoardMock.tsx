import { BedDouble, CalendarCheck, LogIn, LogOut, Sparkles } from 'lucide-react'
import { cx } from '../ui'

type RoomState = 'occupied' | 'arriving' | 'vacant' | 'cleaning' | 'maintenance'

const STATE: Record<RoomState, { label: string; cls: string }> = {
  occupied: { label: 'Occupied', cls: 'bg-teal-600 text-white' },
  arriving: { label: 'Arriving', cls: 'bg-gold-400 text-ink-900' },
  vacant: { label: 'Vacant', cls: 'bg-white text-ink-600 ring-1 ring-line' },
  cleaning: { label: 'Cleaning', cls: 'bg-violet-100 text-violet-700' },
  maintenance: { label: 'Repair', cls: 'bg-amber-100 text-amber-800' },
}

const FLOORS: Array<{ floor: string; rooms: Array<[string, RoomState]> }> = [
  {
    floor: '2nd floor',
    rooms: [
      ['201', 'occupied'], ['202', 'occupied'], ['203', 'arriving'], ['204', 'vacant'],
      ['205', 'occupied'], ['206', 'cleaning'],
    ],
  },
  {
    floor: '1st floor',
    rooms: [
      ['101', 'occupied'], ['102', 'arriving'], ['103', 'occupied'], ['104', 'maintenance'],
      ['105', 'vacant'], ['106', 'occupied'],
    ],
  },
]

const STATS = [
  { icon: LogIn, label: 'Arrivals', value: '6' },
  { icon: LogOut, label: 'Departures', value: '4' },
  { icon: BedDouble, label: 'In house', value: '18' },
  { icon: Sparkles, label: 'To clean', value: '3' },
]

/** An illustrative front-desk room board — sample data, drawn in HTML so it stays crisp. */
export function RoomBoardMock({ className }: { className?: string }) {
  return (
    <div
      className={cx(
        'overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-30px_rgba(11,20,36,0.45)] ring-1 ring-ink-900/10',
        className,
      )}
      aria-hidden
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-sand/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-900/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-900/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-900/15" />
        <span className="ml-3 text-[11px] font-medium text-ink-400">Front desk · Room board</span>
      </div>

      <div className="grid grid-cols-[3.25rem_1fr] sm:grid-cols-[9rem_1fr]">
        <aside className="bg-ink-900 px-2 py-4 sm:px-3">
          {['Dashboard', 'Room board', 'Reservations', 'Rates', 'Housekeeping', 'Reports'].map(
            (item, i) => (
              <div
                key={item}
                className={cx(
                  'mb-1 flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium',
                  i === 1 ? 'bg-white/10 text-white' : 'text-ink-300',
                )}
              >
                <span className={cx('h-1.5 w-1.5 shrink-0 rounded-full', i === 1 ? 'bg-gold-400' : 'bg-ink-600')} />
                <span className="hidden truncate sm:inline">{item}</span>
              </div>
            ),
          )}
        </aside>

        <div className="min-w-0 p-3 sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold text-ink-900">Today, 23 Oct</p>
              <p className="text-[11px] text-ink-400">24 rooms · 75% occupied</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-teal-50 px-2 py-1 text-[10px] font-semibold text-teal-700">
              <CalendarCheck className="h-3 w-3" /> Live
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {STATS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-lg bg-ivory px-2.5 py-2 ring-1 ring-line">
                <div className="flex items-center gap-1 text-[10px] text-ink-400">
                  <Icon className="h-3 w-3" /> {label}
                </div>
                <p className="mt-0.5 text-base font-semibold text-ink-900">{value}</p>
              </div>
            ))}
          </div>

          {FLOORS.map(({ floor, rooms }) => (
            <div key={floor} className="mt-3">
              <p className="mb-1.5 text-[10px] font-semibold tracking-wider text-ink-400 uppercase">{floor}</p>
              <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-6">
                {rooms.map(([no, state]) => (
                  <div key={no} className={cx('rounded-md px-2 py-2', STATE[state].cls)}>
                    <p className="text-[12px] font-semibold">{no}</p>
                    <p className="truncate text-[9px] opacity-80">{STATE[state].label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { CalendarDays, MapPin, Star, Users } from 'lucide-react'
import { cx } from '../ui'

/** An illustrative guest booking website for a sample hotel. */
export function BookingSiteMock({ className }: { className?: string }) {
  return (
    <div
      className={cx(
        'overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-30px_rgba(11,20,36,0.45)] ring-1 ring-ink-900/10',
        className,
      )}
      aria-hidden
    >
      <div className="flex items-center gap-2 border-b border-line bg-sand/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-900/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-900/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-900/15" />
        <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-ink-400 ring-1 ring-line">
          yourhotel.com/<span className="text-ink-700">seabreeze-residency</span>
        </span>
      </div>

      {/* Cover — a drawn sunset coastline rather than a stock photo. */}
      <div className="relative h-36 overflow-hidden bg-gradient-to-b from-[#f4c98f] via-[#e9a46a] to-[#2f5d6b] sm:h-44">
        <div className="absolute top-6 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-[#fff1d6]/80 blur-[1px]" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-[#1f4653]" />
        <div className="absolute bottom-10 left-[8%] h-20 w-28 rounded-t-md bg-[#0f2a35]/90" />
        <div className="absolute bottom-10 left-[30%] h-28 w-20 rounded-t-md bg-[#0f2a35]/80" />
        <div className="absolute right-[12%] bottom-10 h-24 w-32 rounded-t-md bg-[#0f2a35]/90" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/70 to-transparent px-4 pt-10 pb-3">
          <p className="font-display text-lg font-medium text-white">Seabreeze Residency</p>
          <p className="flex items-center gap-1 text-[11px] text-white/80">
            <MapPin className="h-3 w-3" /> Beach Road · 4.6 <Star className="h-3 w-3 fill-current" />
          </p>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <div className="grid grid-cols-3 gap-1.5 rounded-xl bg-ivory p-1.5 ring-1 ring-line">
          {[
            { icon: CalendarDays, label: 'Check-in', value: '24 Oct' },
            { icon: CalendarDays, label: 'Check-out', value: '26 Oct' },
            { icon: Users, label: 'Guests', value: '2 adults' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-lg bg-white px-2 py-1.5">
              <p className="flex items-center gap-1 text-[9px] text-ink-400">
                <Icon className="h-2.5 w-2.5" /> {label}
              </p>
              <p className="truncate text-[11px] font-semibold text-ink-900">{value}</p>
            </div>
          ))}
        </div>

        {[
          { name: 'Deluxe Sea View', price: '₹4,200', tag: '2 left' },
          { name: 'Premium Suite', price: '₹6,800', tag: 'Breakfast' },
        ].map((room) => (
          <div key={room.name} className="mt-2 flex items-center gap-3 rounded-xl p-2 ring-1 ring-line">
            <div className="h-10 w-12 shrink-0 rounded-md bg-gradient-to-br from-gold-100 to-gold-300" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-semibold text-ink-900">{room.name}</p>
              <p className="text-[10px] text-ink-400">
                {room.price} / night · <span className="text-teal-700">{room.tag}</span>
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-ink-900 px-2.5 py-1 text-[10px] font-semibold text-white">
              Book
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

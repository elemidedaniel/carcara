import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const hours = [
  ['Tuesday – Thursday', '5:30 pm – 10:00 pm'],
  ['Friday – Saturday',  '5:00 pm – 11:00 pm'],
  ['Sunday',             '5:00 pm – 9:00 pm'],
  ['Monday',             'Closed'],
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  transition: { duration: 0.7, delay },
})

export default function Reservations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  const inputCls = "w-full bg-cream2 border border-cream3 px-4 py-3 text-sm text-brown font-sans font-light outline-none focus:border-brass transition-colors duration-300 appearance-none"

  return (
    <section id="reservations" className="bg-cream py-28 px-10 md:px-20">
      <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

        {/* Left: info */}
        <div>
          <motion.p
            {...fadeUp(0)} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 text-brass text-[0.6rem] tracking-[0.5em] uppercase font-sans mb-5"
          >
            <span className="w-7 h-px bg-brass" /> Reservations
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-serif text-brown leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Join Us for<br /><em className="italic text-brown3">an Evening</em>
          </motion.h2>
          <motion.div {...fadeUp(0.2)} animate={inView ? { opacity: 1, y: 0 } : {}} className="w-10 h-px bg-brass mb-7" />

          <motion.p {...fadeUp(0.25)} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-brown3 text-sm leading-loose mb-4">
            We recommend booking at least two weeks in advance. Walk-ins are welcome at the bar, subject to availability.
          </motion.p>
          <motion.p {...fadeUp(0.3)} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-brown3 text-sm leading-loose">
            For private dining, events, or groups of 8+, contact us at{' '}
            <a href="mailto:hello@maisonverite.com" className="text-brass hover:underline">hello@maisonverite.com</a>
          </motion.p>

          {/* Hours */}
          <motion.div {...fadeUp(0.38)} animate={inView ? { opacity: 1, y: 0 } : {}} className="mt-10">
            <p className="text-brass text-[0.58rem] tracking-[0.4em] uppercase font-sans mb-4">Hours of Service</p>
            {hours.map(([day, time]) => (
              <div key={day} className="flex justify-between py-3 border-b border-cream3 text-sm">
                <span className="text-brown3">{day}</span>
                <span className="text-muted">{time}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: form */}
        <motion.div {...fadeUp(0.2)} animate={inView ? { opacity: 1, y: 0 } : {}}>
          {!submitted ? (
            <form className="flex flex-col gap-5" onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-brass text-[0.58rem] tracking-[0.35em] uppercase font-sans">First Name</label>
                  <input className={inputCls} placeholder="Marie" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-brass text-[0.58rem] tracking-[0.35em] uppercase font-sans">Last Name</label>
                  <input className={inputCls} placeholder="Delacroix" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-brass text-[0.58rem] tracking-[0.35em] uppercase font-sans">Email</label>
                  <input type="email" className={inputCls} placeholder="marie@example.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-brass text-[0.58rem] tracking-[0.35em] uppercase font-sans">Phone</label>
                  <input type="tel" className={inputCls} placeholder="+1 604 000 0000" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-brass text-[0.58rem] tracking-[0.35em] uppercase font-sans">Date</label>
                  <input type="date" className={inputCls} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-brass text-[0.58rem] tracking-[0.35em] uppercase font-sans">Time</label>
                  <select className={inputCls}>
                    {['5:30 pm','6:00 pm','7:00 pm','7:30 pm','8:00 pm','8:30 pm'].map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-brass text-[0.58rem] tracking-[0.35em] uppercase font-sans">Guests</label>
                  <select className={inputCls}>
                    {['1 Guest','2 Guests','3 Guests','4 Guests','5 Guests','6 Guests','7+ Guests'].map(g => <option key={g}>{g}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-brass text-[0.58rem] tracking-[0.35em] uppercase font-sans">Occasion</label>
                  <select className={inputCls}>
                    {['—','Birthday','Anniversary','Business Dinner','Other'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-brass text-[0.58rem] tracking-[0.35em] uppercase font-sans">Special Requests</label>
                <textarea
                  className={`${inputCls} h-24 resize-none`}
                  placeholder="Dietary requirements, allergies, special occasions…"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-brown text-cream text-[0.62rem] tracking-[0.4em] uppercase font-sans hover:bg-brown2 transition-colors duration-300 mt-1"
              >
                Request Reservation
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-10 bg-cream2 border border-cream3 flex flex-col items-start gap-4"
            >
              <div className="w-8 h-px bg-brass" />
              <p className="font-serif italic text-brown2 text-xl leading-relaxed">
                Thank you. We'll confirm your reservation within 24 hours.
              </p>
              <p className="text-muted text-sm font-light">
                A confirmation will be sent to your email. We look forward to welcoming you.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import chefImg from '../assets/res1.jpg'
import res5 from '../assets/res5.jpeg'

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="bg-cream py-28 px-10 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Images */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[520px] md:h-[620px]"
        >
          {/* Main image */}
          <img
            src={res5}
            alt="Chef preparing a dish"
            className="absolute top-0 left-0 w-[72%] h-[85%] object-cover"
          />
          {/* Accent image */}
          <img
            src={chefImg}
            alt="A signature dish"
            className="absolute bottom-0 right-0 w-[52%] h-[52%] object-cover border-[6px] border-cream shadow-xl"
          />
          {/* Badge */}
          <div className="absolute top-[44%] left-[46%] -translate-x-1/2 -translate-y-1/2 w-[84px] h-[84px] rounded-full bg-orange-400 border-[4px] border-cream flex flex-col items-center justify-center z-10 shadow-lg">
            <span className="font-serif text-cream text-2xl leading-none">6</span>
            <span className="text-cream/80 text-[0.5rem] tracking-[0.2em] uppercase mt-0.5">Years</span>
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <motion.p
            variants={fadeUp} initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 text-brass text-[0.6rem] tracking-[0.5em] uppercase font-sans mb-5"
          >
            <span className="w-7 h-px bg-brass" /> Our Story
          </motion.p>

          <motion.h2
            variants={fadeUp} initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-brown leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Honest food,<br /><em className="italic text-brown3">honest craft.</em>
          </motion.h2>

          <motion.div
            variants={fadeUp} initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-10 h-px bg-brass mb-7"
          />

          <motion.p
            variants={fadeUp} initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-serif italic text-brown2 text-lg leading-relaxed mb-5"
          >
            "We began with a single question — what does this land actually taste like? Every plate since has been our answer."
          </motion.p>

          <motion.p
            variants={fadeUp} initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-brown3 text-sm leading-loose mb-4"
          >
            Chef Marie Delacroix brings together a decade of European training and a deep reverence for BC's coastlines, forests, and farms. Our menu changes with the seasons — not as a trend, but as a conviction.
          </motion.p>

          <motion.p
            variants={fadeUp} initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-brown3 text-sm leading-loose"
          >
            The dining room seats 42. Every reservation is an occasion we take seriously.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp} initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex gap-10 mt-10 pt-8 border-t border-cream3"
          >
            {[['42', 'Seats'], ['12', 'Courses'], ['100%', 'Local']].map(([num, label]) => (
              <div key={label}>
                <div className="font-serif text-brown text-3xl">{num}</div>
                <div className="text-muted text-[0.58rem] tracking-[0.3em] uppercase mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

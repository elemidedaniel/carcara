import { motion } from 'framer-motion'
import reshero from '../assets/reshero.jpg'

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex items-end">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${reshero})` }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/35 to-brown/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-brown/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-10 md:px-20 pb-16 md:pb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-orange-400" />
            <span className="text-orange-400 text-[0.6rem] tracking-[0.5em] uppercase font-sans font-light">
              Vancouver · Est. 2018
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-cream font-normal leading-[1.0]" style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)' }}>
            Where the land<br />
            <em className="text-orange-400 italic">speaks</em> for itself.
          </h1>

          {/* Sub */}
   <p className="text-cream/50 text-sm font-sans font-light mt-5 max-w-xs leading-loose tracking-wide">
  Contemporary American cuisine inspired by seasonal ingredients and regional flavors.
</p>

          {/* CTAs */}
          <div className="flex gap-4 mt-8">
            <a href="#reservations" className="px-7 py-3.5 bg-orange-400 text-cream text-[0.6rem] tracking-[0.35em] uppercase font-sans font-normal hover:bg-brass2 transition-colors duration-300">
              Reserve a Table
            </a>
            <a href="#menu" className="px-7 py-3.5 border border-cream/25 text-cream/60 text-[0.6rem] tracking-[0.35em] uppercase font-sans font-normal hover:border-brass2 hover:text-brass2 transition-all duration-300">
              View Menu
            </a>
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-right hidden md:block"
        >
          <div className="text-cream text-[0.58rem] tracking-[0.28em] uppercase font-sans leading-loose">
            <p className="text-cream font-light">Arizona's 100 Best</p>
            <p>Restaurants 2024</p>
          </div>
          <div className="mt-3 text-cream text-[0.58rem] tracking-[0.28em] uppercase font-sans leading-loose">
            <p className="text-cream font-light">Michelin Guide</p>
            <p>Recommended</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ scaleY: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-cream/40 to-transparent"
        />
        <span className="text-cream/30 text-[0.5rem] tracking-[0.45em] uppercase font-sans">Scroll</span>
      </motion.div>
    </section>
  )
}

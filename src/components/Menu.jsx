import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import res1 from '../assets/res1.jpg'
import res2 from '../assets/res2.jpg'
import res3 from '../assets/res3.jpg'

const categories = {
  Begin: [
    { name: 'Aebleskiver',        price: '14', desc: 'stewed herbs, kaluga caviar',  img: null },
    { name: 'Dungeness Crab',     price: '36', desc: 'almond, kohlrabi',             img: res1 },
    { name: 'Roasted Scallop',    price: '36', desc: 'rutabaga, brown butter',        img: null },
    { name: 'Wagyu Beef Tartare', price: '36', desc: 'allium, malted barley',         img: res2 },
  ],
  Continue: [
    { name: 'Fraser Valley Duck',       price: '69', desc: 'a colour study of red',     img: res3 },
    { name: 'Golden Eagle Sablefish',   price: '59', desc: 'aromatic broth',            img: null },
    { name: 'Squab & Pine',             price: '72', desc: 'cedar oil, black garlic',   img: null },
    { name: 'Aged Ribeye',              price: '89', desc: 'bone marrow, sorrel',       img: null },
  ],
  Finish: [
    { name: 'Honey & Birch',           price: '18', desc: 'frozen yoghurt, bee pollen', img: null },
    { name: 'Dark Chocolate Marquise', price: '18', desc: 'salted caramel, hazelnut',  img: null },
    { name: 'Seasonal Tart',           price: '16', desc: 'crème fraîche, market fruit',img: null },
    { name: 'Mignardises',             price: '12', desc: "chef's selection",           img: null },
  ],
}

function MenuItem({ item, index }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-between py-5 border-b border-white/8 group cursor-default transition-all duration-300 hover:pl-2"
      style={{ borderBottomColor: 'rgba(255,255,255,0.07)' }}
    >
      {/* Index */}
      <span className="text-cream/15 text-xs tabular-nums w-7 shrink-0 font-sans">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Name + desc */}
      <div className="flex-1 ml-4">
        <p className="font-serif text-cream text-[1.15rem] group-hover:text-orange-400 transition-colors duration-300">
          {item.name}
        </p>
        <p className="text-cream/30 text-[0.68rem] tracking-[0.18em] mt-0.5 font-sans font-light">
          {item.desc}
        </p>
      </div>

      {/* Dashed rule */}
      <div className="hidden md:block flex-1 mx-6 h-px" style={{
        background: 'repeating-linear-gradient(to right, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 4px, transparent 4px, transparent 10px)'
      }} />

      {/* Price */}
      <span className="font-serif text-orange-400 text-lg shrink-0">${item.price}</span>

      {/* Hover image */}
      <AnimatePresence>
        {hovered && item.img && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute right-20 top-1/2 -translate-y-1/2 z-30 pointer-events-none w-40 h-40 shadow-2xl"
          >
            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Menu() {
  const [active, setActive] = useState('Begin')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="menu" className="bg-brown py-28 px-10 md:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 text-orange-400 text-[0.6rem] tracking-[0.5em] uppercase font-sans mb-5"
            >
              <span className="w-7 h-px bg-orange-400" /> Seasonal Menu
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-cream leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Tonight's <em className="italic text-orange-400">Selection</em>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-10 h-px bg-orange-400 mt-5 origin-left"
            />
          </div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex gap-1.5"
          >
            {Object.keys(categories).map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-[0.6rem] tracking-[0.3em] uppercase font-sans transition-all duration-300 border ${
                  active === cat
                    ? 'bg-orange-400 border-orange-400 text-cream'
                    : 'border-white/10 text-cream/35 hover:border-white/25 hover:text-cream/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {categories[active].map((item, i) => (
              <MenuItem key={item.name} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex items-start gap-6 p-5 border border-orange-400/20"
        >
          <div className="w-8 h-px bg-orange-400 shrink-0 mt-2" />
          <p className="text-cream/35 text-[0.75rem] leading-loose font-sans font-light">
            A tasting menu of 7 or 12 courses is available nightly. Please inform us of dietary requirements when booking.{' '}
            <a href="#reservations" className="text-orange-400 hover:underline transition-all">Reserve your table →</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

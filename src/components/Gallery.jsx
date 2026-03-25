import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import res2 from '../assets/res2.jpg'
import res3 from '../assets/res3.jpg'

const photos = [
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=85&auto=format&fit=crop', label: 'The Dining Room', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=700&q=85&auto=format&fit=crop', label: 'Seasonal Plates', span: '' },
  { src: res2,                                                                                              label: 'Garden Harvest',  span: '' },
  { src: res3,                                                                                              label: 'Fraser Valley Duck', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=700&q=85&auto=format&fit=crop', label: 'Wine Programme', span: '' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gallery" className="bg-cream2 py-28 px-10 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 text-brass text-[0.6rem] tracking-[0.5em] uppercase font-sans mb-5"
            >
              <span className="w-7 h-px bg-brass" /> The Experience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-brown leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              A Feast for<br /><em className="italic text-brown3">Every Sense</em>
            </motion.h2>
          </div>
          <motion.a
            href="#reservations"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="self-end px-7 py-3.5 bg-brown text-cream text-[0.6rem] tracking-[0.35em] uppercase font-sans hover:bg-brown2 transition-colors duration-300 mt-6 md:mt-0"
          >
            Book Your Evening
          </motion.a>
        </div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-3 auto-rows-[240px] gap-2 md:gap-3"
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer
                ${photo.span === 'tall' ? 'row-span-2' : ''}
                ${photo.span === 'wide' ? 'col-span-2' : ''}
              `}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/35 transition-all duration-400" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-serif italic text-cream text-base tracking-wide">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

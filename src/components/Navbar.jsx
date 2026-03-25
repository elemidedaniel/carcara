import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import reslogo from '../assets/reslogo.png'

const links = ['Our Story', 'Menu', 'Gallery', 'Reservations', 'Contact']
const hrefs = ['#about', '#menu', '#gallery', '#reservations', '#contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 transition-all duration-500 ${
          scrolled ? 'bg-cream/95 backdrop-blur-md border-b border-brass/20 shadow-sm' : ''
        }`}
      >
        {/* Logo */}
        <a href="#" className="group">
          <img
            src={reslogo}
            alt="Restaurant Logo"
            className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map((link, i) => (
            <li key={link}>
              <a
                href={hrefs[i]}
                className="relative text-[0.62rem] tracking-[0.32em] uppercase text-brown3 font-sans font-normal hover:text-brown transition-colors duration-300 group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#reservations"
              className="ml-2 px-5 py-2.5 border border-orange-400 text-orange-400 text-[0.6rem] tracking-[0.32em] uppercase font-sans font-normal hover:bg-orange-400 hover:text-cream transition-all duration-300"
            >
              Reserve
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-brown origin-center" />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-px bg-brown" />
          <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-brown origin-center" />
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-9"
          >
            {/* Logo in mobile menu */}
            <img src={reslogo} alt="Restaurant Logo" className="h-12 w-auto object-contain mb-4 opacity-60" />

            {[...links, 'Reserve a Table'].map((link, i) => (
              <motion.a
                key={link}
                href={hrefs[i] ?? '#reservations'}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl italic text-brown hover:text-brass transition-colors duration-300"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
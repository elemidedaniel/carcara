import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const blocks = [
  {
    label: 'Find Us',
    lines: [
      '1285 West Georgia Street',
      'Vancouver, BC V6E 4R3',
      '',
      { text: 'View on Google Maps →', href: 'https://maps.google.com', external: true },
    ],
  },
  {
    label: 'Get in Touch',
    lines: [
      { text: '+1 604 000 1234', href: 'tel:+16040001234' },
      { text: 'hello@maisonverite.com', href: 'mailto:hello@maisonverite.com' },
      '',
      'For press & events:',
      { text: 'press@maisonverite.com', href: 'mailto:press@maisonverite.com' },
    ],
  },
  {
    label: 'Follow Along',
    lines: [
      { text: 'Instagram', href: '#' },
      { text: 'Facebook', href: '#' },
      { text: 'OpenTable', href: '#' },
      { text: 'Resy', href: '#' },
    ],
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <footer id="contact" className="bg-brown2 px-10 md:px-20 pt-20 pb-10">
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Contact blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {blocks.map((block, bi) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: bi * 0.12 }}
            >
              <p className="text-brass2 text-[0.58rem] tracking-[0.42em] uppercase font-sans mb-5">
                {block.label}
              </p>
              <div className="text-cream/45 text-sm font-sans font-light leading-loose">
                {block.lines.map((line, li) =>
                  line === '' ? <br key={li} /> :
                  typeof line === 'string' ? <p key={li}>{line}</p> :
                  <a key={li} href={line.href} target={line.external ? '_blank' : undefined}
                    rel={line.external ? 'noreferrer' : undefined}
                    className="block hover:text-brass2 transition-colors duration-300"
                  >
                    {line.text}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/6 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-cream/30 text-base tracking-wide">Maison Vérité</span>
          <span className="text-cream/15 text-[0.6rem] tracking-[0.2em] font-sans">
            © 2025 Maison Vérité. All rights reserved.
          </span>
          <div className="flex gap-6">
            {['Instagram', 'OpenTable', 'Privacy'].map(link => (
              <a key={link} href="#" className="text-cream/25 text-[0.58rem] tracking-[0.3em] uppercase font-sans hover:text-brass2 transition-colors duration-300">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

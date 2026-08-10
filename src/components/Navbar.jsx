import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaCalendarCheck } from 'react-icons/fa';
import { MagneticButton } from './MagneticButton';
import { getLenis } from '@/hooks/useLenis';
import { quickLinks } from '@/data/siteData';

const navLinks = quickLinks.filter((l) => l.label !== 'Book Appointment');

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleSectionObserver = () => {
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleSectionObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleSectionObserver);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    const lenis = getLenis();
    const navEl = document.querySelector('nav');
    const navOffset = navEl ? navEl.getBoundingClientRect().height : 0;
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -navOffset });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? 'h-11 sm:h-14 bg-navy/95 shadow-[0_2px_10px_rgba(100,100,100,0.15)]'
            : 'h-12 sm:h-16 bg-navy/80'
        }`}
        style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="container-max h-full mx-auto px-4 sm:px-5 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/images/logo.png"
              alt="Gomathi Dental Clinic"
              className="h-7 sm:h-10 md:h-12 w-auto"
            />
            <div className="text-left hidden sm:block">
              <div className="text-white font-semibold text-sm leading-tight">
                Gomathi Dental
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-pink'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <MagneticButton
              href="https://www.clinicia.com/calendar/book?u=63852"
              className="bg-pink text-white px-7 py-3 rounded-full text-sm font-semibold shadow-glow-pink hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              <FaCalendarCheck className="text-xs" />
              Book Appointment
            </MagneticButton>
          </div>

          {/* Phone (tablet) */}
          <a
            href="tel:9043816020"
            className="hidden md:flex lg:hidden items-center gap-2 text-blue-light text-sm font-medium"
          >
            <FaPhone className="text-xs" />
            90438 16020
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen((open) => !open)}
            className="lg:hidden text-white p-1.5 sm:p-2"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? (
              <FaTimes className="text-base sm:text-xl" />
            ) : (
              <FaBars className="text-base sm:text-xl" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu — sits directly below the fixed header, header stays
          visible throughout so its logo/hamburger(→close) never duplicate */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`fixed left-0 right-0 bg-navy z-[999] p-6 flex flex-col gap-1 max-h-[calc(100dvh-3rem)] overflow-y-auto shadow-[0_12px_24px_rgba(0,0,0,0.35)] lg:hidden ${
                isScrolled ? 'top-11' : 'top-12'
              }`}
            >
              {/* Links */}
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left text-base font-medium py-3 border-b border-white/5 transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-pink'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* CTA */}
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => scrollTo('#appointment')}
                className="bg-pink text-white px-6 py-3.5 rounded-full text-sm font-semibold shadow-glow-pink mt-3"
              >
                Book Appointment
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

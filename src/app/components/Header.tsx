import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src={new URL('../../images/logo.png', import.meta.url).href}
              alt="AccessPro"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <a href="#case-study" className="text-white/80 hover:text-white transition-colors">
              사례
            </a>
            <a href="#expertise" className="text-white/80 hover:text-white transition-colors">
              전문성
            </a>
            <a href="#solutions" className="text-white/80 hover:text-white transition-colors">
              솔루션
            </a>
            <a href="#contact" className="px-6 py-2 bg-[#E30613] text-white rounded hover:bg-[#E30613]/90 transition-colors">
              진단 신청
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-white"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 py-4"
          >
            <div className="flex flex-col gap-4">

              <a href="#case-study" className="text-white/80 hover:text-white transition-colors">
                사례
              </a>
              <a href="#expertise" className="text-white/80 hover:text-white transition-colors">
                전문성
              </a>
              <a href="#solutions" className="text-white/80 hover:text-white transition-colors">
                솔루션
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                문의
              </a>
              <button className="px-6 py-2 bg-[#E30613] text-white rounded hover:bg-[#E30613]/90 transition-colors">
                진단 신청
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

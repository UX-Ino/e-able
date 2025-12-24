import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale opacity-60"
        >
          <source src={new URL('../../images/main_video.mp4', import.meta.url).href} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="pt-16 text-5xl md:text-7xl text-white max-w-5xl mx-auto leading-tight">
            완벽한 <span className="text-[#E30613]">장차법 준수</span>로<br />
            비즈니스 리스크를 해소하십시오
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            단순 검수를 넘어 법적 컴플라이언스와 ESG 경영 가치를 실현합니다. <br />
            웹 접근성, 이제 <strong className="text-white">지능형 자동화와 전문가 전수 검수</strong>로 완벽히 대응하십시오.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="group px-8 py-4 bg-[#E30613] text-white rounded-lg hover:bg-[#E30613]/90 transition-all flex items-center gap-2">
              진단 신청하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

          {/* Scroll Indicator Moved Inside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-2 text-white/60 pt-16"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-12 bg-gradient-to-b from-white/0 via-white/60 to-white/0"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

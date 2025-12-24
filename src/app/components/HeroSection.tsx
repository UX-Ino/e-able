import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--brand-black)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDF8fHx8MTc2NjUzOTUzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="전문가의 작업 공간"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
            style={{
              color: "var(--brand-white)",
              fontWeight: 700,
              lineHeight: 1.1
            }}
          >
            법적 리스크를
            <br />
            <span style={{ color: "var(--brand-red)" }}>완벽하게 해소</span>
            합니다
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto opacity-90"
            style={{ color: "var(--brand-white)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            전문가가 직접 검수하는 웹 접근성 솔루션.
            <br />
            KWCAG 2.2 인증마크 획득을 보장합니다.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              className="group px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2 hover:gap-4 shadow-lg hover:shadow-2xl"
              style={{
                backgroundColor: "var(--brand-red)",
                color: "var(--brand-white)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-red-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-red)";
              }}
              aria-label="간이 진단 신청하기"
            >
              간이 진단 신청
              <ArrowRight className="transition-all" size={20} />
            </button>

            <button
              className="px-8 py-4 rounded-lg transition-all duration-300 border-2"
              style={{
                borderColor: "var(--brand-white)",
                color: "var(--brand-white)",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              aria-label="자세히 알아보기"
            >
              자세히 알아보기
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm" style={{ color: "var(--brand-white)", opacity: 0.7 }}>
              관람 시작
            </span>
            <div className="w-6 h-10 rounded-full border-2 flex justify-center p-1" style={{ borderColor: "var(--brand-white)", opacity: 0.7 }}>
              <motion.div
                className="w-1 h-2 rounded-full"
                style={{ backgroundColor: "var(--brand-red)" }}
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

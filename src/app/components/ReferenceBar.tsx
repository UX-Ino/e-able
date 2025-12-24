import { motion } from "motion/react";

interface ReferenceBarProps {
  logos?: { name: string; grayscale: boolean }[];
}

export function ReferenceBar({ logos }: ReferenceBarProps) {
  // Mock company logos as text for demonstration
  const defaultLogos = [
    { name: "롯데호텔", grayscale: true },
    { name: "롯데이츠", grayscale: true },
    { name: "L기업", grayscale: true },
    { name: "대기업A", grayscale: true },
    { name: "대기업B", grayscale: true },
  ];

  const displayLogos = logos || defaultLogos;

  return (
    <section className="py-16 border-b" style={{ backgroundColor: "var(--brand-white)", borderColor: "rgba(0, 0, 0, 0.1)" }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-widest uppercase opacity-60" style={{ color: "var(--brand-black)" }}>
            신뢰받는 파트너
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {displayLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div
                className="px-6 py-4 rounded-lg transition-all duration-300"
                style={{
                  border: "2px solid rgba(0, 0, 0, 0.1)",
                  backgroundColor: "transparent"
                }}
              >
                <div
                  className="transition-all duration-300 group-hover:grayscale-0"
                  style={{
                    filter: logo.grayscale ? "grayscale(100%)" : "none",
                    color: "var(--brand-black)",
                    opacity: 0.6
                  }}
                >
                  <span className="group-hover:opacity-100 transition-opacity duration-300">
                    {logo.name}
                  </span>
                </div>
              </div>

              {/* Hover effect - red underline */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "var(--brand-red)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="space-y-2">
            <div className="text-5xl" style={{ color: "var(--brand-red)", fontWeight: 700 }}>
              100+
            </div>
            <p className="opacity-60" style={{ color: "var(--brand-black)" }}>
              프로젝트 완료
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-5xl" style={{ color: "var(--brand-red)", fontWeight: 700 }}>
              98%
            </div>
            <p className="opacity-60" style={{ color: "var(--brand-black)" }}>
              인증 성공률
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-5xl" style={{ color: "var(--brand-red)", fontWeight: 700 }}>
              24H
            </div>
            <p className="opacity-60" style={{ color: "var(--brand-black)" }}>
              평균 대응 시간
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

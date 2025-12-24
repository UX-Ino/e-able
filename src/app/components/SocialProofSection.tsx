import { motion } from 'motion/react';
import { useState } from 'react';

const clients = [
  { name: '롯데호텔', logo: 'LOTTE HOTEL' },
  { name: '롯데이츠', logo: 'LOTTE.eats' },
  { name: '삼성전자', logo: 'SAMSUNG' },
  { name: '현대자동차', logo: 'HYUNDAI' },
  { name: 'SK텔레콤', logo: 'SK telecom' },
  { name: 'CJ제일제당', logo: 'CJ' },
  { name: '네이버', logo: 'NAVER' },
  { name: '카카오', logo: 'kakao' },
];

// 상단과 하단에 각각 표시할 브랜드 분리
const topRowClients = clients.slice(0, 4);
const bottomRowClients = clients.slice(4, 8);

const stats = [
  { value: '150+', label: '인증마크 획득 지원' },
  { value: '99%', label: '심사 통과율' },
  { value: '200+', label: '프로젝트 완료' },
  { value: '10년+', label: '전문 경력' },
];

export function SocialProofSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl text-[#E30613] mb-2">
                {stat.value}
              </div>
              <div className="text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            국내 유수 대기업 및 공공기관이 선택한 파트너
          </h2>
          <p className="text-xl text-white/60">
            누적 500+ 프로젝트 수행, 장차법 컴플라이언스 100% 달성 레퍼런스
          </p>
        </motion.div>
      </div>

      {/* Logo Wall - Full Width - 상하 무한 스크롤 */}
      <div className="overflow-hidden space-y-8 py-4">
        {/* 상단 로우 - 우에서 좌로 */}
        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -100 * topRowClients.length],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {/* 첫 번째 세트 */}
            {topRowClients.map((client, index) => (
              <div
                key={`top-1-${index}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex-shrink-0 w-64 flex items-center justify-center p-8 bg-white/5 rounded-lg border border-white/10 hover:border-[#E30613] transition-all duration-300"
              >
                <span
                  className={`text-2xl transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-white/40'
                    }`}
                >
                  {client.logo}
                </span>
              </div>
            ))}
            {/* 두 번째 세트 (무한 스크롤용) */}
            {topRowClients.map((client, index) => (
              <div
                key={`top-2-${index}`}
                className="flex-shrink-0 w-64 flex items-center justify-center p-8 bg-white/5 rounded-lg border border-white/10 hover:border-[#E30613] transition-all duration-300"
              >
                <span className="text-2xl text-white/40">
                  {client.logo}
                </span>
              </div>
            ))}
            {/* 세 번째 세트 (추가 버퍼) */}
            {topRowClients.map((client, index) => (
              <div
                key={`top-3-${index}`}
                className="flex-shrink-0 w-64 flex items-center justify-center p-8 bg-white/5 rounded-lg border border-white/10 hover:border-[#E30613] transition-all duration-300"
              >
                <span className="text-2xl text-white/40">
                  {client.logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 하단 로우 - 좌에서 우로 */}
        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [-100 * bottomRowClients.length, 0],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {/* 첫 번째 세트 */}
            {bottomRowClients.map((client, index) => (
              <div
                key={`bottom-1-${index}`}
                onMouseEnter={() => setHoveredIndex(index + 4)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex-shrink-0 w-64 flex items-center justify-center p-8 bg-white/5 rounded-lg border border-white/10 hover:border-[#E30613] transition-all duration-300"
              >
                <span
                  className={`text-2xl transition-colors duration-300 ${hoveredIndex === index + 4 ? 'text-white' : 'text-white/40'
                    }`}
                >
                  {client.logo}
                </span>
              </div>
            ))}
            {/* 두 번째 세트 (무한 스크롤용) */}
            {bottomRowClients.map((client, index) => (
              <div
                key={`bottom-2-${index}`}
                className="flex-shrink-0 w-64 flex items-center justify-center p-8 bg-white/5 rounded-lg border border-white/10 hover:border-[#E30613] transition-all duration-300"
              >
                <span className="text-2xl text-white/40">
                  {client.logo}
                </span>
              </div>
            ))}
            {/* 세 번째 세트 (추가 버퍼) */}
            {bottomRowClients.map((client, index) => (
              <div
                key={`bottom-3-${index}`}
                className="flex-shrink-0 w-64 flex items-center justify-center p-8 bg-white/5 rounded-lg border border-white/10 hover:border-[#E30613] transition-all duration-300"
              >
                <span className="text-2xl text-white/40">
                  {client.logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
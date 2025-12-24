import { motion } from 'motion/react';
import { ShieldCheck, Zap, Target, TrendingUp, ArrowRight } from 'lucide-react';

const solutions = [
  {
    name: 'Total Care',
    subtitle: '마크 획득',
    description: '완벽한 인증 마크 획득 보장',
    icon: ShieldCheck,
    features: [
      '전문가 1:1 검수',
      '코드 개선 가이드 제공',
      '심사 대응 및 통과 보장',
      '인증마크 획득 지원',
    ],
    highlight: true,
  },
  {
    name: 'Subscription',
    subtitle: '정기 구독',
    description: '인증 유지 및 분기별 건전성 리포트',
    icon: TrendingUp,
    features: [
      '월 1회 자동 검수',
      '분기별 상세 리포트',
      '우선 기술 지원',
      '법규 업데이트 알림',
    ],
    highlight: false,
  },
  {
    name: 'Mini Version',
    subtitle: 'ESG 특화',
    description: '핵심 기능 위주의 효율적 접근성 적용',
    icon: Target,
    features: [
      '핵심 페이지 검수',
      'ESG 리포트 작성',
      '개선 우선순위 제공',
      '비용 효율적 솔루션',
    ],
    highlight: false,
  },
  {
    name: 'Consulting',
    subtitle: '전략 가이드',
    description: '전문가 진단 리포트 및 내부 인력 교육',
    icon: Zap,
    features: [
      '현황 진단 리포트',
      '개선 로드맵 제공',
      '내부 교육 프로그램',
      '가이드라인 작성',
    ],
    highlight: false,
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            기업 맞춤형 <span className="text-[#E30613]">컴플라이언스 솔루션</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            법적 리스크 방어부터 ESG 경영 가치 제고를 위한 최적의 패키지
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 rounded-xl border transition-all duration-300 hover:-translate-y-2 ${solution.highlight
                  ? 'bg-[#E30613]/10 border-[#E30613] shadow-lg shadow-[#E30613]/20'
                  : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}
              >
                {solution.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-[#E30613] text-white text-sm rounded-full">
                      추천
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div
                    className={`inline-flex p-3 rounded-lg mb-4 ${solution.highlight ? 'bg-[#E30613]' : 'bg-white/10'
                      }`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl text-white mb-1">{solution.name}</h3>
                  <p className="text-sm text-[#E30613]">{solution.subtitle}</p>
                  <p className="text-white/60 mt-2">{solution.description}</p>
                </div>

                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <div className="w-1.5 h-1.5 bg-[#E30613] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

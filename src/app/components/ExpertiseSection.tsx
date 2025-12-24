import { motion } from 'motion/react';
import { Code, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const kwcagComparison = [
  {
    version: 'KWCAG 2.1',
    items: [
      { code: '1.1.1', name: '적절한 대체 텍스트 제공', level: 'A', new: false },
      { code: '1.4.3', name: '텍스트 콘텐츠의 명도 대비', level: 'AA', new: false },
      { code: '2.1.1', name: '키보드 사용 보장', level: 'A', new: false },
      { code: '2.4.2', name: '제목 제공', level: 'A', new: false },
    ],
  },
  {
    version: 'KWCAG 2.2',
    items: [
      { code: '2.1.4', name: '문자 단축키', level: 'A', new: true },
      { code: '2.5.1', name: '단일 포인터 입력 지원', level: 'A', new: true },
      { code: '3.2.4', name: '레이블과 네임', level: 'A', new: true },
      { code: '3.2.6', name: '포인터 입력 취소', level: 'A', new: true },
    ],
  },
];

const experts = [
  {
    name: '장재연 프로',
    role: '접근성 검수 전문가',
    credentials: '정보화진흥원 지킴이 10년+ / KWCAG 2.2 인증',
    image: new URL('../../images/sub_img_01.png', import.meta.url).href,
  },
  {
    name: 'UX 그룹',
    role: '접근성 마크업 전문가',
    credentials: '경력 5~10년+ / 30명 보유',
    image: new URL('../../images/sub_img_02.jpg', import.meta.url).href,
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-gradient-to-b from-zinc-950 to-black">
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
            국가 표준 <span className="text-[#E30613]">KWCAG 2.2</span>를 완벽히 준수합니다
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            최신 지능형 자동화 도구와 접근성 품질인증 전문가의 전수 검수 시스템
          </p>
        </motion.div>

        {/* WCAG Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {kwcagComparison.map((kwcag, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border ${kwcag.version === 'KWCAG 2.2'
                ? 'bg-[#E30613]/10 border-[#E30613]'
                : 'bg-white/5 border-white/10'
                }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-[#E30613]" />
                <h3 className="text-2xl text-white">{kwcag.version}</h3>
                {kwcag.version === 'KWCAG 2.2' && (
                  <span className="px-3 py-1 bg-[#E30613] text-white text-xs rounded-full">
                    최신
                  </span>
                )}
              </div>

              <div className="space-y-4">
                {kwcag.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between p-4 bg-black/30 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#E30613] font-mono">{item.code}</span>
                        {item.new && (
                          <span className="px-2 py-0.5 bg-[#E30613] text-white text-xs rounded">
                            NEW
                          </span>
                        )}
                      </div>
                      <div className="text-white/80">{item.name}</div>
                    </div>
                    <div className="ml-4">
                      <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded">
                        {item.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-zinc-900 rounded-xl p-8 border border-white/10 mb-20"
        >
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-[#E30613]" />
            <h3 className="text-xl text-white">KWCAG 2.2 신규 지침 예시</h3>
          </div>

          <div className="bg-black rounded-lg p-6 font-mono text-sm">
            <div className="text-green-500 mb-4">{'// 2.1.4 문자 단축키 - 오동작 방지'}</div>
            <div className="text-white/40">{'// 단축키 비활성화 또는 수정 기능 제공'}</div>
            <div className="text-white/40">{'const disableShortcuts = () => { ... }'}</div>

            <div className="text-green-500 mt-6 mb-4">{'// 2.5.1 단일 포인터 입력 지원'}</div>
            <div className="text-white/40">{'// 다중 터치 대신 단순 클릭/터치 지원'}</div>
            <div className="text-white/40">{'<button onClick={handleActivation}>조작</button>'}</div>
          </div>
        </motion.div>

        {/* Expert Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl text-white text-center mb-12">
            실제 검수를 담당하는 <span className="text-[#E30613]">전문가 팀</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8  mx-auto">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-[#E30613] transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl text-white mb-1">{expert.name}</h4>
                  <p className="text-[#E30613] mb-2">{expert.role}</p>
                  <p className="text-sm text-white/60">{expert.credentials}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certification Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 rounded-full border border-white/10">
            <div className="w-3 h-3 bg-[#E30613] rounded-full animate-pulse" />
            <span className="text-white">
              한국정보화진흥원 웹접근성 품질인증 전문 기관
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

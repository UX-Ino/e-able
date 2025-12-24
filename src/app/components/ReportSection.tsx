import { motion } from 'motion/react';
import { Download, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const reportFeatures = [
  {
    title: '심각도별 오류 분류',
    description: '치명적 / 심각 / 보통 / 경미로 4단계 분류',
    color: '#E30613',
  },
  {
    title: '경영진 보고용 요약',
    description: '한 장으로 보는 전체 현황 대시보드',
    color: '#FFFFFF',
  },
  {
    title: '개선 우선순위 제시',
    description: '투입 공수 대비 효과 분석',
    color: '#E30613',
  },
  {
    title: '법적 컴플라이언스 진단',
    description: '장애인차별금지법 및 관련 법규 준수 여부 정밀 평가',
    color: '#FFFFFF',
  },
];

const sampleMetrics = [
  { label: '전체 검사 항목', value: '127', unit: '개' },
  { label: '위반 항목', value: '42', unit: '개', highlight: true },
  { label: '준수율', value: '67', unit: '%' },
  { label: '예상 소요 기간', value: '4', unit: '주' },
];

export function ReportSection() {
  return (
    <section className="py-24 bg-black">
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
            경영진의 <span className="text-[#E30613]">의사결정을 돕는</span> 인사이트 리포트
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            단순 기술 결함 보고를 넘어, 비즈니스 리스크와 해결 우선순위를 제시합니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Report Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-xl p-8 shadow-2xl">
              {/* Report Header */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl text-black mb-1">웹 접근성 진단 리포트</h3>
                    <p className="text-gray-500">L사 온라인몰 주문 시스템</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">발행일</div>
                    <div className="text-black">2024.12.23</div>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {sampleMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${metric.highlight
                      ? 'bg-red-50 border-2 border-[#E30613]'
                      : 'bg-gray-50'
                      }`}
                  >
                    <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-3xl ${metric.highlight ? 'text-[#E30613]' : 'text-black'
                          }`}
                      >
                        {metric.value}
                      </span>
                      <span className="text-gray-500">{metric.unit}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sample Chart */}
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-3">심각도별 분포</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-16 text-gray-600">치명적</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-[#E30613] h-full" style={{ width: '35%' }} />
                    </div>
                    <span className="text-sm text-black">15</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-16 text-gray-600">심각</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-orange-500 h-full" style={{ width: '28%' }} />
                    </div>
                    <span className="text-sm text-black">12</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-16 text-gray-600">보통</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-yellow-500 h-full" style={{ width: '21%' }} />
                    </div>
                    <span className="text-sm text-black">9</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-16 text-gray-600">경미</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: '14%' }} />
                    </div>
                    <span className="text-sm text-black">6</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-500">
                  본 리포트는 KWCAG 2.2 기준으로 작성되었습니다
                </p>
              </div>
            </div>

            {/* Decorative Badge */}
            <div className="absolute -right-4 -top-4 bg-[#E30613] text-white px-6 py-3 rounded-lg shadow-lg rotate-3">
              <div className="text-sm">경영진 보고용</div>
              <div className="text-xs opacity-80">Executive Summary</div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl text-white mb-6">
                의사결정자가 원하는 형태로 제공합니다
              </h3>

              <div className="space-y-6">
                {reportFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#E30613] transition-colors"
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: feature.color }}
                    />
                    <div>
                      <h4 className="text-xl text-white mb-2">{feature.title}</h4>
                      <p className="text-white/60">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 px-6 py-4 bg-[#E30613] text-white rounded-lg hover:bg-[#E30613]/90 transition-colors">
                <Download className="w-5 h-5" />
                샘플 리포트 다운로드
              </button>
              <a href="#contact" className="flex items-center justify-center gap-2 px-6 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 border border-white/20 transition-colors">
                우리 사이트 진단 신청
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-white/5 rounded-xl border border-white/10">
            <p className="text-white/80 max-w-2xl">
              "개발자가 아닌 경영진도 이해할 수 있는 리포트를 원했습니다.
              AccessPro의 리포트는 임원 보고에 그대로 사용할 수 있을 정도로 완성도가 높습니다."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-px h-4 bg-white/20" />
              <span className="text-white/60">L사 디지털 전략팀 팀장</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

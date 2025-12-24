import { motion } from 'motion/react';

export function BeforeAfterSection() {

  return (
    <section id="case-study" className="py-24 bg-black border-t">
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
            실전 <span className="text-[#E30613]">리스크 분석 및 개선</span> 리포트
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            KWCAG 2.2 표준 가이드라인에 따른 정밀 검수 결과 비교
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <div className="relative">
              <div className="absolute -top-4 left-4 z-10">
                <span className="px-4 py-2 bg-[#E30613] text-white rounded-lg">
                  개선 전
                </span>
              </div>
              <div className="bg-zinc-900 rounded-xl p-8 border border-white/10">
                <div className="space-y-4">
                  <div className="bg-zinc-800 p-4 rounded border-2 border-[#E30613]">
                    <div className="text-white/40 text-sm mb-2">{'<div class="button">'}</div>
                    <div className="text-white/60 ml-4">주문하기</div>
                    <div className="text-white/40 text-sm">{'</div>'}</div>
                  </div>

                  <div className="flex items-start gap-2 text-[#E30613] text-sm">
                    <span className="text-xl">⚠</span>
                    <div>
                      <p className="mb-1">시맨틱 태그 미사용</p>
                      <p className="text-white/40">스크린리더 인식 불가</p>
                    </div>
                  </div>

                  <div className="bg-zinc-800 p-4 rounded border-2 border-[#E30613]">
                    <div className="text-white/40 text-sm">{'<img src="product.jpg">'}</div>
                  </div>

                  <div className="flex items-start gap-2 text-[#E30613] text-sm">
                    <span className="text-xl">⚠</span>
                    <div>
                      <p className="mb-1">대체 텍스트 누락</p>
                      <p className="text-white/40">KWCAG 1.1.1 위반</p>
                    </div>
                  </div>

                  <div className="bg-zinc-800 p-4 rounded border-2 border-[#E30613]">
                    <div className="text-white/40 text-sm">{'<div class="price" style="color:#999">'}</div>
                    <div className="text-white/60 ml-4">₩12,000</div>
                    <div className="text-white/40 text-sm">{'</div>'}</div>
                  </div>

                  <div className="flex items-start gap-2 text-[#E30613] text-sm">
                    <span className="text-xl">⚠</span>
                    <div>
                      <p className="mb-1">명도대비 4.5:1 미달</p>
                      <p className="text-white/40">KWCAG 1.4.3 위반</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="relative">
              <div className="absolute -top-4 left-4 z-10">
                <span className="px-4 py-2 bg-white text-black rounded-lg">
                  개선 후
                </span>
              </div>
              <div className="bg-zinc-900 rounded-xl p-8 border border-white/30">
                <div className="space-y-4">
                  <div className="bg-zinc-800 p-4 rounded border-2 border-green-500">
                    <div className="text-white/40 text-sm mb-2">{'<button type="button" aria-label="장바구니에 추가">'}</div>
                    <div className="text-white/60 ml-4">주문하기</div>
                    <div className="text-white/40 text-sm">{'</button>'}</div>
                  </div>

                  <div className="flex items-start gap-2 text-green-500 text-sm">
                    <span className="text-xl">✓</span>
                    <div>
                      <p className="mb-1">시맨틱 button 태그 사용</p>
                      <p className="text-white/40">aria-label로 명확한 설명</p>
                    </div>
                  </div>

                  <div className="bg-zinc-800 p-4 rounded border-2 border-green-500">
                    <div className="text-white/40 text-sm">{'<img src="product.jpg" alt="프리미엄 원두커피 500g">'}</div>
                  </div>

                  <div className="flex items-start gap-2 text-green-500 text-sm">
                    <span className="text-xl">✓</span>
                    <div>
                      <p className="mb-1">대체 텍스트 추가</p>
                      <p className="text-white/40">KWCAG 1.1.1 준수</p>
                    </div>
                  </div>

                  <div className="bg-zinc-800 p-4 rounded border-2 border-green-500">
                    <div className="text-white/40 text-sm">{'<div class="price" style="color:#fff">'}</div>
                    <div className="text-white ml-4">₩12,000</div>
                    <div className="text-white/40 text-sm">{'</div>'}</div>
                  </div>

                  <div className="flex items-start gap-2 text-green-500 text-sm">
                    <span className="text-xl">✓</span>
                    <div>
                      <p className="mb-1">명도대비 21:1 달성</p>
                      <p className="text-white/40">KWCAG 1.4.3 준수</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 rounded-full border border-white/10">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-white">
              <strong className="text-white">98점</strong> 달성 · 한국정보화진흥원 품질인증마크 획득
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

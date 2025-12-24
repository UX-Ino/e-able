import { motion } from "motion/react";
import { TriangleAlert, TrendingUp, Shield, Award, Users, Zap } from "lucide-react";

export function RiskValueSection() {
  const risks = [
    {
      icon: TriangleAlert,
      title: "법적 책임",
      description: "장애인차별금지법 위반 시 최대 3천만원 과태료"
    },
    {
      icon: TriangleAlert,
      title: "브랜드 손실",
      description: "접근성 미준수로 인한 부정적 여론 형성"
    },
    {
      icon: TriangleAlert,
      title: "시장 제외",
      description: "공공기관 입찰 및 제안 시 자격 미달"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "법적 리스크 제로",
      description: "KWCAG 2.2 완벽 준수로 법적 분쟁 사전 차단"
    },
    {
      icon: Award,
      title: "공신력 확보",
      description: "한국웹접근성인증평가원 인증마크 획득"
    },
    {
      icon: Users,
      title: "고객층 확대",
      description: "장애인, 고령자 등 추가 250만명 잠재 고객"
    },
    {
      icon: TrendingUp,
      title: "SEO 개선",
      description: "검색엔진 최적화로 자연 유입 트래픽 증가"
    },
    {
      icon: Zap,
      title: "UX 향상",
      description: "모든 사용자에게 더 나은 사용 경험 제공"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6" style={{ color: "var(--brand-black)", fontWeight: 700 }}>
            선택의 기로
          </h2>
          <p className="text-lg md:text-xl opacity-70 max-w-3xl mx-auto" style={{ color: "var(--brand-black)" }}>
            웹 접근성 미준수는 단순한 기술적 문제가 아닙니다.
            <br />
            비즈니스의 지속가능성과 직결된 경영 이슈입니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Risk Side - Red */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl opacity-10" style={{ backgroundColor: "var(--brand-red)" }} />
            <div className="relative p-8 md:p-12 rounded-2xl border-2" style={{ borderColor: "var(--brand-red)" }}>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "var(--brand-red)", color: "var(--brand-white)" }}>
                  <TriangleAlert size={20} />
                  <span>미준수 시 리스크</span>
                </div>
                <h3 className="text-3xl mb-4" style={{ color: "var(--brand-black)", fontWeight: 700 }}>
                  피할 수 없는 위협
                </h3>
              </div>

              <div className="space-y-6">
                {risks.map((risk, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-lg"
                    style={{ backgroundColor: "rgba(227, 6, 19, 0.05)" }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--brand-red)" }}>
                        <risk.icon size={24} style={{ color: "var(--brand-white)" }} />
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2" style={{ color: "var(--brand-black)", fontWeight: 600 }}>
                        {risk.title}
                      </h4>
                      <p className="text-sm opacity-70" style={{ color: "var(--brand-black)" }}>
                        {risk.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Value Side - White/Black */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl" style={{ backgroundColor: "var(--brand-black)", opacity: 0.03 }} />
            <div className="relative p-8 md:p-12 rounded-2xl border-2" style={{ borderColor: "var(--brand-black)" }}>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "var(--brand-black)", color: "var(--brand-white)" }}>
                  <Award size={20} />
                  <span>준수 시 가치</span>
                </div>
                <h3 className="text-3xl mb-4" style={{ color: "var(--brand-black)", fontWeight: 700 }}>
                  비즈니스 기회 창출
                </h3>
              </div>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-lg"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--brand-black)" }}>
                        <value.icon size={24} style={{ color: "var(--brand-white)" }} />
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2" style={{ color: "var(--brand-black)", fontWeight: 600 }}>
                        {value.title}
                      </h4>
                      <p className="text-sm opacity-70" style={{ color: "var(--brand-black)" }}>
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl mb-6" style={{ color: "var(--brand-black)", opacity: 0.8 }}>
            지금 바로 리스크를 가치로 전환하세요
          </p>
          <button
            className="px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
            style={{
              backgroundColor: "var(--brand-red)",
              color: "var(--brand-white)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--brand-red-hover)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--brand-red)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            aria-label="진단 받기"
          >
            진단 받기
          </button>
        </motion.div>
      </div>
    </section>
  );
}
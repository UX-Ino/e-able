import { motion } from "motion/react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { CircleCheck, CircleX } from "lucide-react";

export function InteractiveComparison() {
  // Mock data for issues
  const beforeIssues = [
    "대체 텍스트 누락",
    "색상 대비 부족 (3.2:1)",
    "키보드 접근 불가능",
    "스크린리더 미지원"
  ];

  const afterImprovements = [
    "모든 이미지에 대체 텍스트 추가",
    "고대비 적용 (7.2:1)",
    "완전한 키보드 네비게이션",
    "ARIA 레이블 완벽 구현"
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "var(--brand-black)" }}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6" style={{ color: "var(--brand-white)", fontWeight: 700 }}>
            실제 개선 사례
          </h2>
          <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto" style={{ color: "var(--brand-white)" }}>
            슬라이더를 좌우로 움직여 개선 전후를 직접 비교해보세요.
            <br />
            L사 홈페이지의 극적인 변화를 확인하실 수 있습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcmV2aWV3JTIwc2NyZWVufGVufDF8fHx8MTc2NjUzOTUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            afterImage="https://images.unsplash.com/photo-1762329381993-c6834c7ff010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhY2Nlc3NpYmlsaXR5JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NjUzOTUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            beforeLabel="개선 전"
            afterLabel="개선 후"
          />
        </motion.div>

        {/* Issue comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto"
        >
          {/* Before Issues */}
          <div className="p-8 rounded-lg border-2" style={{ borderColor: "var(--brand-red)", backgroundColor: "rgba(227, 6, 19, 0.05)" }}>
            <div className="flex items-center gap-3 mb-6">
              <CircleX size={32} style={{ color: "var(--brand-red)" }} />
              <h3 className="text-2xl" style={{ color: "var(--brand-white)", fontWeight: 600 }}>
                개선 전 문제점
              </h3>
            </div>
            <ul className="space-y-4">
              {beforeIssues.map((issue, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span style={{ color: "var(--brand-red)", marginTop: "4px" }}>✕</span>
                  <span style={{ color: "var(--brand-white)", opacity: 0.9 }}>{issue}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* After Improvements */}
          <div className="p-8 rounded-lg border-2" style={{ borderColor: "var(--brand-white)", backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
            <div className="flex items-center gap-3 mb-6">
              <CircleCheck size={32} style={{ color: "var(--brand-white)" }} />
              <h3 className="text-2xl" style={{ color: "var(--brand-white)", fontWeight: 600 }}>
                개선 후 변화
              </h3>
            </div>
            <ul className="space-y-4">
              {afterImprovements.map((improvement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span style={{ color: "var(--brand-white)", marginTop: "4px" }}>✓</span>
                  <span style={{ color: "var(--brand-white)", opacity: 0.9 }}>{improvement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
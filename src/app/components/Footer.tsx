import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight, Award } from 'lucide-react';

export function Footer() {
  const [formData, setFormData] = useState({
    company: '',
    url: '',
    name: '',
    email: '',
    phone: '',
    service: 'total-care',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('진단 신청이 접수되었습니다. 영업일 기준 1일 내에 연락드리겠습니다.');
  };

  return (
    <footer id="contact" className="bg-black border-t border-white/10">
      {/* Contact Form Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl text-white mb-4">
                <span className="text-[#E30613]">간단 진단</span> 신청
              </h2>
              <p className="text-xl text-white/60 mb-8">
                귀사의 웹사이트 접근성 현황을 진단해드립니다
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="company" className="block text-white mb-2">
                    회사명 <span className="text-[#E30613]">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#E30613] focus:outline-none transition-colors"
                    placeholder="귀사의 회사명을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="url" className="block text-white mb-2">
                    회사 URL <span className="text-[#E30613]">*</span>
                  </label>
                  <input
                    type="url"
                    id="url"
                    required
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#E30613] focus:outline-none transition-colors"
                    placeholder="https://www.example.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      담당자명 <span className="text-[#E30613]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#E30613] focus:outline-none transition-colors"
                      placeholder="이름"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">
                      연락처 <span className="text-[#E30613]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#E30613] focus:outline-none transition-colors"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    이메일 <span className="text-[#E30613]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#E30613] focus:outline-none transition-colors"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-white mb-2">
                    관심 솔루션
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#E30613] focus:outline-none transition-colors"
                  >
                    <option value="total-care">Total Care - 마크 획득</option>
                    <option value="subscription">Subscription - 정기 구독</option>
                    <option value="mini-version">Mini Version - ESG 특화</option>
                    <option value="consulting">Consulting - 전략 가이드</option>
                    <option value="undecided">아직 결정하지 못했어요</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#E30613] text-white rounded-lg hover:bg-[#E30613]/90 transition-colors flex items-center justify-center gap-2 group"
                >
                  진단 신청하기
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-sm text-white/40 text-center">
                  영업일 기준 5일 내 연락드립니다
                </p>
              </form>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl text-white mb-6">연락처</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <Phone className="w-5 h-5 text-[#E30613]" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm mb-1">전화</div>
                      <div className="text-white text-lg">02-1234-5678</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <Mail className="w-5 h-5 text-[#E30613]" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm mb-1">이메일</div>
                      <div className="text-white text-lg">contact@accesspro.kr</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <MapPin className="w-5 h-5 text-[#E30613]" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm mb-1">주소</div>
                      <div className="text-white text-lg">
                        서울특별시 강남구 테헤란로 123<br />
                        AccessPro 빌딩 5층
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-xl text-white mb-4">운영 시간</h4>
                <div className="space-y-2 text-white/60">
                  <div className="flex justify-between">
                    <span>평일</span>
                    <span className="text-white">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>점심시간</span>
                    <span className="text-white">12:30 - 13:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>주말 및 공휴일</span>
                    <span className="text-white/40">휴무</span>
                  </div>
                </div>
              </div>

              {/* Download CTA */}
              <div className="p-6 bg-gradient-to-br from-[#E30613]/20 to-[#E30613]/5 rounded-xl border border-[#E30613]/30">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#E30613] rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-white mb-2">서비스 안내서</h4>
                    <p className="text-white/60 mb-4">
                      상세한 솔루션 소개 및 가격 정책을 확인하세요
                    </p>
                    <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors">
                      PDF 다운로드
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <img
                src={new URL('../../images/logo.png', import.meta.url).href}
                alt="AccessPro"
                className="h-10 w-auto mb-4"
              />
              <p className="text-white/60 text-sm">
                대한민국 대표 웹 접근성 전문 솔루션
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h5 className="text-white mb-4">솔루션</h5>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">Total Care</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Subscription</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Mini Version</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-white mb-4">회사</h5>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">회사 소개</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">사례 연구</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">블로그</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">채용</a></li>
                </ul>
              </div>
            </div>

            {/* Accessibility Statement */}
            <div>
              <h5 className="text-white mb-4">접근성 선언문</h5>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                <Award className="w-8 h-8 text-[#E30613]" />
                <div>
                  <div className="text-white text-sm mb-1">KWCAG 2.2 인증 전문</div>
                  <div className="text-white/60 text-xs">장차법 컴플라이언스 파트너</div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            <p>© 2024 AccessPro. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

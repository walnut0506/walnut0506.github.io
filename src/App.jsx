import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Shield, Lightbulb, Scale, User, MapPin, Phone, Mail, MessageCircle, CheckCircle2 } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 감지 핸들러
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: '홈', href: '#home' },
    { name: '대표 변리사', href: '#representative' },
    { name: '전문분야', href: '#expertise' },
    { name: '오시는 길 & 문의', href: '#contact' },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* Navigation */}
      {/* 수정: 스크롤 전에는 완전 투명(bg-transparent), 스크롤 후에는 흰색(bg-white) */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              {/* 로고 이미지 (public 폴더에 logo.png가 있어야 함) */}
              <img 
                src="/logo.png" 
                alt="이형빈특허법률사무소 로고" 
                className="h-12 w-auto mr-3 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none'; // 이미지가 없으면 숨김 (텍스트만 표시)
                }}
              />
              
              <div className="flex flex-col justify-center">
                {/* 수정: 스크롤 여부에 따라 텍스트 색상 변경 (흰색 <-> 검정) */}
                <span className={`font-bold text-2xl leading-none transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                  이형빈<span className={`${isScrolled ? 'text-blue-700' : 'text-blue-400'}`}>특허법률사무소</span>
                </span>
                <span className={`text-[0.65rem] font-bold tracking-widest uppercase mt-1 transition-colors duration-300 ${isScrolled ? 'text-slate-500' : 'text-blue-200'}`}>
                  LHB IP Law Firm
                </span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-colors py-2 border-b-2 border-transparent ${
                    isScrolled 
                      ? 'text-slate-600 hover:text-blue-700 hover:border-blue-700' 
                      : 'text-white/90 hover:text-white hover:border-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu} 
                className={`p-2 transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-700' : 'text-white hover:text-blue-200'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 rounded-lg text-base font-bold text-slate-600 hover:text-blue-700 hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section (Landing) */}
      <section id="home" className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            Reliable IP Partner
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            당신의 아이디어,<br />
            <span className="text-blue-500">법적 권리</span>로 완성합니다.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            복잡한 지식재산권 문제, 이형빈 특허법률사무소가<br className="hidden md:block" />
            가장 확실하고 명쾌한 해답을 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="#representative" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-900/20">
               대표변리사 소개
             </a>
             <a href="#contact" className="px-8 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
               상담 문의
             </a>
          </div>
        </div>
      </section>

      {/* 1. Representative Section (대표 약력) */}
      <section id="representative" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 상단: 사진 및 인사말 */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center mb-16">
            
            {/* Profile Image Area */}
            <div className="w-full md:w-5/12 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-gray-50 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
              <div className="relative h-[600px] bg-slate-100 rounded-xl overflow-hidden shadow-2xl flex items-end justify-center">
                {/* 실제 사진이 없을 경우를 대비한 아이콘 플레이스홀더 */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                  <User size={150} strokeWidth={1} />
                </div>
                {/* 사진 파일이 준비되면 아래 img 태그의 주석을 해제하고 src를 변경하세요 */}
                {/* <img src="/profile.jpg" alt="이형빈 대표변리사" className="w-full h-full object-cover" /> */}
                
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-8 pt-20">
                  <p className="text-white font-bold text-2xl">이형빈</p>
                  <p className="text-blue-300 font-medium">대표 변리사</p>
                </div>
              </div>
            </div>

            {/* Intro Text Area */}
            <div className="w-full md:w-7/12">
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-1 w-10 bg-blue-600"></div>
                <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Representative Attorney</span>
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-snug">
                "기술의 가치를 정확히 꿰뚫어보는<br />
                <span className="text-blue-700">전문가의 시선</span>으로 함께합니다."
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-8 border-l-4 border-gray-200 pl-6">
                안녕하세요. 이형빈 변리사입니다.<br /><br />
                특허는 단순한 서류 작업이 아닙니다. 고객님의 기술이 시장에서 독점적 지위를 확보할 수 있도록 돕는 가장 강력한 비즈니스 무기입니다.<br /><br />
                대기업 및 중소기업의 다양한 기술 보호 업무를 수행해 온 경험을 바탕으로, 고객님의 소중한 아이디어를 확실한 권리로 만들어 드리겠습니다.
              </p>
              
              <div className="mt-8">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_sample.svg" alt="서명" className="h-12 opacity-40" />
              </div>
            </div>
          </div>

          {/* 하단: 주요 약력 및 주요수행업무 (사진 아래 열로 이동됨) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center pb-2 border-b border-gray-200">
                <CheckCircle2 size={24} className="text-blue-600 mr-2" />
                주요 약력
              </h3>
              <ul className="space-y-4 text-slate-700 text-base md:text-lg">
                <li className="flex items-start"><span className="mr-2 text-blue-400">•</span>연세대학교 공과대학 졸업</li>
                <li className="flex items-start"><span className="mr-2 text-blue-400">•</span>제XX회 변리사 시험 합격</li>
                <li className="flex items-start"><span className="mr-2 text-blue-400">•</span>(전) XX 특허법인 파트너 변리사</li>
                <li className="flex items-start"><span className="mr-2 text-blue-400">•</span>(전) 특허청 심사 자문위원</li>
                <li className="flex items-start"><span className="mr-2 text-blue-400">•</span>(현) 대한변리사회(KPAA) 정회원</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center pb-2 border-b border-gray-200">
                <CheckCircle2 size={24} className="text-blue-600 mr-2" />
                주요수행업무
              </h3>
              <ul className="space-y-4 text-slate-700 text-base md:text-lg">
                <li className="flex items-start"><span className="mr-2 text-blue-400">•</span>중소기업 기술보호 자문위원</li>
                <li className="flex items-start"><span className="mr-2 text-blue-400">•</span>스타트업 IP 전략 멘토링</li>
                <li className="flex items-start"><span className="mr-2 text-blue-400">•</span>해외 특허 분쟁 대응 자문</li>
                <li className="flex items-start"><span className="mr-2 text-blue-400">•</span>IP 가치평가 및 기술이전 컨설팅</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Expertise Section (전문 분야) */}
      <section id="expertise" className="py-24 bg-slate-900 text-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-bold uppercase tracking-wider text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">전문 분야</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              출원부터 심판, 소송까지 각 분야의 전문성을 바탕으로<br />
              고객 맞춤형 법률 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Lightbulb size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4">특허 / 실용신안</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                전기전자, 기계, IT, 바이오 등 기술 분야별 전문 지식을 바탕으로 강한 특허 포트폴리오를 구축해 드립니다.
              </p>
              <ul className="space-y-2">
                {['국내외 출원 및 등록', '선행기술조사', '거절이유 대응'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-slate-300">
                    <ChevronRight size={14} className="text-blue-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Shield size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4">상표 / 디자인</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                기업의 브랜드 가치와 디자인 독창성을 보호하기 위한 전략적 출원 및 관리를 수행합니다.
              </p>
              <ul className="space-y-2">
                {['브랜드 네이밍 자문', '디자인권 확보', '상표권 분쟁 대응'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-slate-300">
                    <ChevronRight size={14} className="text-blue-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Scale size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4">심판 / 소송</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                특허심판원 및 특허법원 출신 전문가들과 협업하여 침해 소송 및 무효 심판에서 최상의 결과를 도출합니다.
              </p>
              <ul className="space-y-2">
                {['경고장 발송 및 대응', '권리범위확인심판', '침해금지 가처분'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-slate-300">
                    <ChevronRight size={14} className="text-blue-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Section (문의) */}
      <section id="contact" className="py-24 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Contact Us</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">오시는 길 & 문의</h2>
              <p className="text-slate-600 mb-8">
                방문 상담을 원하시면 미리 예약해 주세요.<br />
                언제나 친절하게 안내해 드리겠습니다.
              </p>

              <div className="space-y-6">
                {/* KakaoTalk Button (Highlighted) */}
                <a 
                   href="https://open.kakao.com/o/sYourLink" 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center p-5 bg-[#FAE100] rounded-xl text-slate-900 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer border border-yellow-400/50"
                >
                  <div className="bg-slate-900/10 p-2 rounded-full mr-4">
                    <MessageCircle size={28} className="text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">카카오톡 상담하기</h3>
                    <p className="text-xs font-semibold opacity-70">실시간 채팅 상담 연결</p>
                  </div>
                </a>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
                   <Phone className="text-blue-600 mt-1 mr-4" size={20} />
                   <div>
                     <h4 className="font-bold text-slate-900">전화</h4>
                     <p className="text-slate-600 mt-1">02-1234-5678</p>
                   </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
                   <Mail className="text-blue-600 mt-1 mr-4" size={20} />
                   <div>
                     <h4 className="font-bold text-slate-900">이메일</h4>
                     <p className="text-slate-600 mt-1">office@leepatent.com</p>
                   </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
                   <MapPin className="text-blue-600 mt-1 mr-4" size={20} />
                   <div>
                     <h4 className="font-bold text-slate-900">주소</h4>
                     <p className="text-slate-600 mt-1">
                       서울시 강남구 테헤란로 123<br />
                       XX빌딩 10층 (역삼역 1번 출구)
                     </p>
                   </div>
                </div>
              </div>
            </div>

            {/* Map Area */}
            <div className="w-full lg:w-2/3">
              <div className="h-full min-h-[500px] bg-slate-200 rounded-2xl overflow-hidden shadow-lg relative group">
                {/* 지도 플레이스홀더 */}
                <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400 bg-slate-100">
                  <MapPin size={64} className="mb-4 text-slate-300" />
                  <p className="font-medium text-lg text-slate-500">네이버/카카오 지도 연동 영역</p>
                  <p className="text-sm mt-2">('오시는 길' 스크립트가 들어갈 자리입니다)</p>
                </div>
                
                {/* 실제 지도 사용 시 여기에 iframe 등을 넣으세요 */}
                <iframe 
                  title="map"
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  // src="https://www.google.com/maps/embed?..." 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <span className="font-bold text-xl text-white block mb-4">
                  이형빈<span className="text-blue-600">특허법률사무소</span>
              </span>
              <p className="text-sm text-slate-500 leading-relaxed">
                고객의 아이디어가 세상의 빛을 볼 수 있도록<br />
                든든한 법률 파트너가 되어드리겠습니다.
              </p>
            </div>
            <div className="flex flex-col md:items-end justify-center space-y-2">
              <a href="#" className="text-sm hover:text-white transition-colors">이용약관</a>
              <a href="#" className="text-sm hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="text-sm hover:text-white transition-colors">이메일무단수집거부</a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-xs text-slate-500 text-center md:text-left">
            <p className="mb-1">대표변리사: 이형빈 | 사업자등록번호: 000-00-00000</p>
            <p className="mb-1">주소: 서울시 강남구 테헤란로 123, XX빌딩 10층 | TEL: 02-1234-5678 | FAX: 02-1234-5679</p>
            <p className="mt-4">© 2026 Lee Hyung-bin Patent & Law Firm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
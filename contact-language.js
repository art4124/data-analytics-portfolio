(function(){
const maps={
es:{nav:"Contacto",kicker:"CONTACTO",title:"Conectemos.",intro:"Si quieres hablar sobre una oportunidad de análisis de datos, un proyecto o una posible colaboración, estaré encantada de saber de ti.",emailLabel:"Correo electrónico",emailNote:"La mejor opción para consultas profesionales y sobre el portafolio.",gmailLabel:"Gmail",gmailNote:"Una dirección alternativa para comunicarte conmigo.",linkedinLabel:"LinkedIn",linkedinNote:"Conéctate conmigo profesionalmente y consulta mi experiencia.",phoneLabel:"Teléfono",phoneNote:"Disponible para contacto profesional directo.",back:"← Volver al inicio",projects:"Ver proyectos"},
ko:{nav:"연락처",kicker:"연락처",title:"연락해 주세요.",intro:"데이터 분석 기회, 프로젝트 또는 협업 가능성에 대해 이야기하고 싶으시다면 언제든지 연락해 주세요.",emailLabel:"이메일",emailNote:"전문적인 문의와 포트폴리오 관련 연락에 가장 적합합니다.",gmailLabel:"Gmail",gmailNote:"연락할 수 있는 대체 이메일 주소입니다.",linkedinLabel:"LinkedIn",linkedinNote:"전문적으로 연결하고 제 경력을 확인하실 수 있습니다.",phoneLabel:"전화",phoneNote:"업무 관련 직접 연락이 가능합니다.",back:"← 홈으로",projects:"프로젝트 보기"}
};
const english={nav:"Contact",kicker:"CONTACT",title:"Let's connect.",intro:"Whether you'd like to talk about a data opportunity, a project, or a potential collaboration, I'd be happy to hear from you.",emailLabel:"Email",emailNote:"Best for professional and portfolio inquiries.",gmailLabel:"Gmail",gmailNote:"An alternative email address for reaching me.",linkedinLabel:"LinkedIn",linkedinNote:"Connect with me professionally and view my experience.",phoneLabel:"Phone",phoneNote:"Available for direct professional contact.",back:"← Back to Home",projects:"View Projects"};

/* Supplemental translations for text added after the original site-wide language map.
   This intentionally targets only English text that remains after language.js runs. */
const globalMaps={
es:{
"Certificates":"Certificados",
"Contact":"Contacto",
"PEOPLE":"PERSONAS",
"DATA":"DATOS",
"BETTER OUTCOMES":"MEJORES RESULTADOS",
"Alanna Thornton | Data for People":"Alanna Thornton | Datos para las personas",
"Designed By":"Diseñado por",
"AI / Gen AI":"IA / IA generativa",
"Leadership":"Liderazgo",
"Program Support":"Apoyo a programas",
"Administrative Support":"Apoyo administrativo",
"Database Management":"Gestión de bases de datos",
"Survey Administration":"Administración de encuestas",
"I'm Alanna Thornton, a psychology student building toward a career in data analysis, with particular interests in healthcare, workforce, and behavioral analytics.":"Soy Alanna Thornton, estudiante de psicología que se prepara para una carrera en análisis de datos, con especial interés en analítica de salud, fuerza laboral y comportamiento.",
"My experience across behavioral health, financial services, student programming, and data-supported operations has shown me how people interact with systems. I'm building the technical skills to turn those patterns into clear, evidence-based insights that support better decisions.":"Mi experiencia en salud conductual, servicios financieros, programas estudiantiles y operaciones apoyadas por datos me ha mostrado cómo las personas interactúan con los sistemas. Estoy desarrollando las habilidades técnicas para convertir esos patrones en hallazgos claros y basados en evidencia que apoyen mejores decisiones.",
"Human behavior, research, and how people interact with systems.":"Comportamiento humano, investigación y cómo las personas interactúan con los sistemas.",
"Patterns in access, well-being, retention, and decision-making.":"Patrones de acceso, bienestar, retención y toma de decisiones.",
"Organizing, analyzing, and communicating data to support decisions.":"Organizar, analizar y comunicar datos para apoyar decisiones.",
"People, systems, and data in practice.":"Personas, sistemas y datos en la práctica.",
"My experience spans behavioral health, financial services, program support, customer service, and operations—roles that strengthened my understanding of people, processes, and data.":"Mi experiencia abarca salud conductual, servicios financieros, apoyo a programas, servicio al cliente y operaciones; puestos que fortalecieron mi comprensión de las personas, los procesos y los datos.",
"PROFESSIONAL CERTIFICATES":"CERTIFICADOS PROFESIONALES",
"Applied data analytics training.":"Formación aplicada en análisis de datos.",
"Google Career Certificates highlighting practical tools, technical methods, and applied analytics work most relevant to employers.":"Certificados profesionales de Google que destacan herramientas prácticas, métodos técnicos y trabajo aplicado de análisis relevantes para empleadores.",
"Google Data Analytics Professional Certificate":"Certificado profesional de Google en análisis de datos",
"9-course series · 180+ hours · Applied case study":"Serie de 9 cursos · Más de 180 horas · Estudio de caso aplicado",
"Spreadsheets":"Hojas de cálculo",
"Google Advanced Data Analytics Professional Certificate":"Certificado profesional de Google en análisis avanzado de datos",
"7-course series · 200+ hours · Capstone project":"Serie de 7 cursos · Más de 200 horas · Proyecto final",
"Job-ready training in data cleaning, analysis, visualization, data storytelling, and communicating findings to stakeholders.":"Formación práctica en limpieza, análisis y visualización de datos, narrativa con datos y comunicación de hallazgos a partes interesadas.",
"Advanced training in statistical analysis, regression, machine learning, predictive modeling, and experimental design.":"Formación avanzada en análisis estadístico, regresión, aprendizaje automático, modelado predictivo y diseño experimental.",
"Program details →":"Detalles del programa →",
"Psychology gives me a foundation in human behavior and research; I pair it with practical analytics skills to examine healthcare, workforce, and behavioral questions.":"La psicología me da una base en comportamiento humano e investigación; la combino con habilidades prácticas de análisis para examinar preguntas de salud, fuerza laboral y comportamiento."
},
ko:{
"Certificates":"자격증",
"Contact":"연락처",
"PEOPLE":"사람",
"DATA":"데이터",
"BETTER OUTCOMES":"더 나은 결과",
"Alanna Thornton | Data for People":"Alanna Thornton | 사람을 위한 데이터",
"Designed By":"디자인 참여",
"AI / Gen AI":"AI / 생성형 AI",
"Leadership":"리더십",
"Program Support":"프로그램 지원",
"Administrative Support":"행정 지원",
"Database Management":"데이터베이스 관리",
"Survey Administration":"설문 운영",
"I'm Alanna Thornton, a psychology student building toward a career in data analysis, with particular interests in healthcare, workforce, and behavioral analytics.":"저는 데이터 분석 분야의 커리어를 준비하고 있는 심리학 전공 학생 Alanna Thornton입니다. 특히 헬스케어, 인력, 행동 분석에 관심이 있습니다.",
"My experience across behavioral health, financial services, student programming, and data-supported operations has shown me how people interact with systems. I'm building the technical skills to turn those patterns into clear, evidence-based insights that support better decisions.":"행동 건강, 금융 서비스, 학생 프로그램, 데이터 기반 운영 경험을 통해 사람들이 시스템과 어떻게 상호작용하는지 배웠습니다. 이러한 패턴을 명확하고 근거 기반의 인사이트로 전환해 더 나은 의사결정을 지원할 수 있도록 기술 역량을 쌓고 있습니다.",
"Human behavior, research, and how people interact with systems.":"인간 행동, 연구, 그리고 사람들이 시스템과 상호작용하는 방식.",
"Patterns in access, well-being, retention, and decision-making.":"접근성, 웰빙, 유지, 의사결정의 패턴.",
"Organizing, analyzing, and communicating data to support decisions.":"의사결정을 지원하기 위한 데이터 정리, 분석, 커뮤니케이션.",
"People, systems, and data in practice.":"실무 속 사람, 시스템, 데이터.",
"My experience spans behavioral health, financial services, program support, customer service, and operations—roles that strengthened my understanding of people, processes, and data.":"저의 경험은 행동 건강, 금융 서비스, 프로그램 지원, 고객 서비스, 운영을 아우르며 사람, 프로세스, 데이터에 대한 이해를 강화했습니다.",
"PROFESSIONAL CERTIFICATES":"전문 자격증",
"Applied data analytics training.":"응용 데이터 분석 교육.",
"Google Career Certificates highlighting practical tools, technical methods, and applied analytics work most relevant to employers.":"고용주에게 중요한 실무 도구, 기술적 방법, 응용 분석 업무를 중심으로 한 Google Career Certificates입니다.",
"Google Data Analytics Professional Certificate":"Google 데이터 분석 전문 자격증",
"9-course series · 180+ hours · Applied case study":"9개 과정 · 180시간 이상 · 응용 사례 연구",
"Spreadsheets":"스프레드시트",
"Google Advanced Data Analytics Professional Certificate":"Google 고급 데이터 분석 전문 자격증",
"7-course series · 200+ hours · Capstone project":"7개 과정 · 200시간 이상 · 캡스톤 프로젝트",
"Job-ready training in data cleaning, analysis, visualization, data storytelling, and communicating findings to stakeholders.":"데이터 정제, 분석, 시각화, 데이터 스토리텔링, 이해관계자와의 결과 커뮤니케이션을 포함한 실무 중심 교육입니다.",
"Advanced training in statistical analysis, regression, machine learning, predictive modeling, and experimental design.":"통계 분석, 회귀, 머신러닝, 예측 모델링, 실험 설계에 대한 고급 교육입니다.",
"Program details →":"프로그램 정보 →",
"Psychology gives me a foundation in human behavior and research; I pair it with practical analytics skills to examine healthcare, workforce, and behavioral questions.":"심리학을 통해 인간 행동과 연구의 기반을 쌓고, 이를 실무 분석 역량과 결합해 헬스케어, 인력, 행동 관련 질문을 살펴봅니다."
}
};

function translateRemainingText(lang){
  const dict=globalMaps[lang]||{};
  if(!Object.keys(dict).length)return;
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){
    const p=node.parentElement;
    if(!p||['SCRIPT','STYLE'].includes(p.tagName)||p.closest('.language-switcher'))return NodeFilter.FILTER_REJECT;
    return node.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
  }});
  let node;
  while((node=walker.nextNode())){
    const raw=node.nodeValue;
    const trimmed=raw.trim();
    const key=trimmed.replace(/\s+/g,' ');
    const translated=dict[key];
    if(translated!==undefined){
      const leading=raw.match(/^\s*/)[0];
      const trailing=raw.match(/\s*$/)[0];
      node.nodeValue=leading+translated+trailing;
    }
  }
}

function apply(){
  const lang=document.documentElement.lang;
  const dict=maps[lang]||english;
  document.querySelectorAll('[data-contact-nav]').forEach(el=>el.textContent=dict.nav);
  document.querySelectorAll('[data-contact-key]').forEach(el=>{
    const key=el.getAttribute('data-contact-key');
    if(Object.prototype.hasOwnProperty.call(dict,key))el.textContent=dict[key];
  });
  translateRemainingText(lang);
  if(document.title==='Contact | Alanna Thornton'){
    if(lang==='es')document.title='Contacto | Alanna Thornton';
    else if(lang==='ko')document.title='연락처 | Alanna Thornton';
  }
}
function init(){apply();new MutationObserver(apply).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
(function(){
const titles={
en:{work:'Experience across psychology, behavior, data, operations, and event coordination.',cert:'Google training in applied data analytics.'},
es:{work:'Experiencia en psicología, comportamiento, datos, operaciones y coordinación de eventos.',cert:'Formación de Google en análisis de datos aplicado.'},
ko:{work:'심리학, 행동, 데이터, 운영 및 이벤트 조정 전반의 경험.',cert:'Google의 응용 데이터 분석 교육.'}
};
function apply(){
const lang=document.documentElement.lang==='es'?'es':document.documentElement.lang==='ko'?'ko':'en';
const d=titles[lang];
const work=document.querySelector('#experience-heading');
const cert=document.querySelector('#certificates-heading');
if(work)work.textContent=d.work;
if(cert)cert.textContent=d.cert;
}
function init(){apply();new MutationObserver(apply).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
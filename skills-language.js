(function(){
const labels={
leadership:{en:'Leadership',es:'Liderazgo',ko:'리더십'},
program:{en:'Program Support',es:'Apoyo a programas',ko:'프로그램 지원'},
admin:{en:'Administrative Support',es:'Apoyo administrativo',ko:'행정 지원'},
database:{en:'Database Management',es:'Gestión de bases de datos',ko:'데이터베이스 관리'},
surveys:{en:'Survey Administration',es:'Administración de encuestas',ko:'설문 운영'}
};
function apply(){
const lang=(document.documentElement.lang||'en').split('-')[0];
document.querySelectorAll('[data-skill-key]').forEach(el=>{
const item=labels[el.dataset.skillKey];
if(!item)return;
const text=el.childNodes.length?Array.from(el.childNodes).find(n=>n.nodeType===Node.TEXT_NODE):null;
if(text)text.nodeValue=' '+(item[lang]||item.en);
});
}
function init(){apply();new MutationObserver(apply).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
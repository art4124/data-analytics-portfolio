(function(){
const shell=document.querySelector('.experience-carousel-shell');
if(!shell)return;
const list=shell.querySelector('.experience-list');
const cards=Array.from(list.querySelectorAll('.experience-card'));
const prev=shell.querySelector('.experience-carousel-btn.prev');
const next=shell.querySelector('.experience-carousel-btn.next');
const dotsWrap=shell.querySelector('.experience-carousel-dots');
if(!cards.length||!prev||!next||!dotsWrap)return;

let index=0;
let touchStartY=null;
const dots=cards.map((card,i)=>{
  const dot=document.createElement('button');
  dot.type='button';
  dot.className='experience-carousel-dot';
  dot.setAttribute('aria-label','Show work experience '+(i+1));
  dot.addEventListener('click',()=>goTo(i));
  dotsWrap.appendChild(dot);
  return dot;
});

function render(){
  cards.forEach((card,i)=>{
    card.classList.remove('is-active','is-above','is-below');
    card.setAttribute('aria-hidden',i===index?'false':'true');
    if(i===index){
      card.classList.add('is-active');
    }else{
      const forward=(i-index+cards.length)%cards.length;
      const backward=(index-i+cards.length)%cards.length;
      card.classList.add(forward<=backward?'is-below':'is-above');
    }
  });
  dots.forEach((dot,i)=>{
    const active=i===index;
    dot.classList.toggle('active',active);
    if(active)dot.setAttribute('aria-current','true');
    else dot.removeAttribute('aria-current');
  });
  requestAnimationFrame(()=>{
    const active=cards[index];
    list.style.height=active.offsetHeight+'px';
  });
}

function goTo(i){
  index=(i+cards.length)%cards.length;
  render();
}

prev.addEventListener('click',()=>goTo(index-1));
next.addEventListener('click',()=>goTo(index+1));
shell.addEventListener('keydown',e=>{
  if(e.key==='ArrowUp'){e.preventDefault();goTo(index-1)}
  if(e.key==='ArrowDown'){e.preventDefault();goTo(index+1)}
});
list.addEventListener('touchstart',e=>{touchStartY=e.changedTouches[0].clientY},{passive:true});
list.addEventListener('touchend',e=>{
  if(touchStartY===null)return;
  const dy=e.changedTouches[0].clientY-touchStartY;
  if(Math.abs(dy)>50)goTo(index+(dy<0?1:-1));
  touchStartY=null;
},{passive:true});
window.addEventListener('resize',()=>requestAnimationFrame(()=>{list.style.height=cards[index].offsetHeight+'px'}));
render();
})();

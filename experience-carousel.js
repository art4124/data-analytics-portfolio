(function(){
function initExperienceCarousel(){
  const list=document.querySelector('#work-experience .experience-list');
  if(!list||list.dataset.carouselReady==='true')return;
  const cards=Array.from(list.querySelectorAll('.experience-card'));
  if(cards.length<=3)return;
  list.dataset.carouselReady='true';

  const shell=document.createElement('div');
  shell.className='experience-carousel-shell';
  list.parentNode.insertBefore(shell,list);
  shell.appendChild(list);

  const nav=document.createElement('div');
  nav.className='experience-carousel-nav';
  nav.setAttribute('aria-label','Work experience carousel controls');

  const prev=document.createElement('button');
  prev.type='button';
  prev.className='experience-carousel-btn prev';
  prev.setAttribute('aria-label','Previous work experience');
  prev.textContent='↑';

  const dotsWrap=document.createElement('div');
  dotsWrap.className='experience-carousel-dots';

  const next=document.createElement('button');
  next.type='button';
  next.className='experience-carousel-btn next';
  next.setAttribute('aria-label','Next work experience');
  next.textContent='↓';

  nav.append(prev,dotsWrap,next);
  shell.appendChild(nav);

  let start=0;
  const dots=cards.map((card,i)=>{
    const dot=document.createElement('button');
    dot.type='button';
    dot.className='experience-carousel-dot';
    dot.setAttribute('aria-label','Start with work experience '+(i+1));
    dot.addEventListener('click',()=>{start=i;render(i>=start?'down':'up')});
    dotsWrap.appendChild(dot);
    return dot;
  });

  function render(direction){
    const ordered=[];
    for(let offset=0;offset<cards.length;offset++)ordered.push(cards[(start+offset)%cards.length]);
    ordered.forEach(card=>list.appendChild(card));
    cards.forEach(card=>{
      card.hidden=true;
      card.classList.remove('is-visible');
      card.setAttribute('aria-hidden','true');
    });
    ordered.slice(0,3).forEach(card=>{
      card.hidden=false;
      card.classList.add('is-visible');
      card.setAttribute('aria-hidden','false');
      if(card.animate){
        card.animate(
          [{opacity:.35,transform:direction==='up'?'translateY(-12px)':'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],
          {duration:260,easing:'ease-out'}
        );
      }
    });
    dots.forEach((dot,i)=>{
      const active=i===start;
      dot.classList.toggle('active',active);
      if(active)dot.setAttribute('aria-current','true');
      else dot.removeAttribute('aria-current');
    });
  }

  prev.addEventListener('click',()=>{start=(start-1+cards.length)%cards.length;render('up')});
  next.addEventListener('click',()=>{start=(start+1)%cards.length;render('down')});
  shell.addEventListener('keydown',e=>{
    if(e.key==='ArrowUp'){e.preventDefault();prev.click()}
    if(e.key==='ArrowDown'){e.preventDefault();next.click()}
  });

  render('down');
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initExperienceCarousel);
else initExperienceCarousel();
})();

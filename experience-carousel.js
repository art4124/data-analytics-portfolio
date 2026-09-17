(function(){
function initExperienceCarousel(){
  const list=document.querySelector('#work-experience .experience-list');
  if(!list||list.dataset.carouselReady==='true')return;
  const cards=Array.from(list.querySelectorAll('.experience-card'));
  if(cards.length<=2)return;
  list.dataset.carouselReady='true';

  const shell=document.createElement('div');
  shell.className='experience-carousel-shell';
  list.parentNode.insertBefore(shell,list);

  const viewport=document.createElement('div');
  viewport.className='experience-carousel-viewport';
  shell.appendChild(viewport);
  viewport.appendChild(list);

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

  const GAP=14;
  const DURATION=480;
  const EASING='cubic-bezier(.22,.61,.36,1)';
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let start=0;
  let animating=false;
  let queued=0;
  let touchStartY=null;

  const dots=cards.map((card,i)=>{
    const dot=document.createElement('button');
    dot.type='button';
    dot.className='experience-carousel-dot';
    dot.setAttribute('aria-label','Start with work experience '+(i+1));
    dot.addEventListener('click',()=>{
      if(animating)return;
      start=i;
      renderStatic();
    });
    dotsWrap.appendChild(dot);
    return dot;
  });

  function normalize(i){
    return (i+cards.length)%cards.length;
  }

  function orderedFrom(index,count){
    const ordered=[];
    for(let offset=0;offset<count;offset++)ordered.push(cards[normalize(index+offset)]);
    return ordered;
  }

  function setVisibility(visibleCards){
    cards.forEach(card=>{
      const visible=visibleCards.includes(card);
      card.hidden=!visible;
      card.setAttribute('aria-hidden',visible?'false':'true');
    });
  }

  function groupHeight(group){
    return group.reduce((total,card)=>total+card.offsetHeight,0)+GAP*(group.length-1);
  }

  function updateDots(){
    dots.forEach((dot,i)=>{
      const active=i===start;
      dot.classList.toggle('active',active);
      if(active)dot.setAttribute('aria-current','true');
      else dot.removeAttribute('aria-current');
    });
  }

  function renderStatic(){
    const ordered=orderedFrom(start,cards.length);
    ordered.forEach(card=>list.appendChild(card));
    const visible=ordered.slice(0,2);
    setVisibility(visible);
    list.style.transition='none';
    list.style.transform='translateY(0)';
    viewport.style.transition='none';
    requestAnimationFrame(()=>{
      viewport.style.height=groupHeight(visible)+'px';
      updateDots();
    });
  }

  function finishSlide(newStart){
    start=normalize(newStart);
    animating=false;
    renderStatic();
    if(queued!==0){
      const direction=queued>0?1:-1;
      queued-=direction;
      requestAnimationFrame(()=>slide(direction));
    }
  }

  function slide(direction){
    if(animating){
      queued+=direction;
      return;
    }
    if(reduceMotion.matches){
      start=normalize(start+direction);
      renderStatic();
      return;
    }

    animating=true;
    const newStart=normalize(start+direction);
    let ordered;
    let oldGroup;
    let newGroup;
    let distance;

    if(direction>0){
      ordered=orderedFrom(start,3);
      ordered.forEach(card=>list.appendChild(card));
      setVisibility(ordered);
      oldGroup=ordered.slice(0,2);
      newGroup=ordered.slice(1,3);
      distance=ordered[0].offsetHeight+GAP;
      list.style.transition='none';
      list.style.transform='translateY(0)';
      viewport.style.transition='none';
      viewport.style.height=groupHeight(oldGroup)+'px';
      void list.offsetHeight;
      list.style.transition='transform '+DURATION+'ms '+EASING;
      viewport.style.transition='height '+DURATION+'ms '+EASING;
      requestAnimationFrame(()=>{
        list.style.transform='translateY(-'+distance+'px)';
        viewport.style.height=groupHeight(newGroup)+'px';
      });
    }else{
      ordered=orderedFrom(newStart,3);
      ordered.forEach(card=>list.appendChild(card));
      setVisibility(ordered);
      oldGroup=ordered.slice(1,3);
      newGroup=ordered.slice(0,2);
      distance=ordered[0].offsetHeight+GAP;
      list.style.transition='none';
      list.style.transform='translateY(-'+distance+'px)';
      viewport.style.transition='none';
      viewport.style.height=groupHeight(oldGroup)+'px';
      void list.offsetHeight;
      list.style.transition='transform '+DURATION+'ms '+EASING;
      viewport.style.transition='height '+DURATION+'ms '+EASING;
      requestAnimationFrame(()=>{
        list.style.transform='translateY(0)';
        viewport.style.height=groupHeight(newGroup)+'px';
      });
    }

    let finished=false;
    function complete(){
      if(finished)return;
      finished=true;
      list.removeEventListener('transitionend',onEnd);
      finishSlide(newStart);
    }
    function onEnd(e){
      if(e.target===list&&e.propertyName==='transform')complete();
    }
    list.addEventListener('transitionend',onEnd);
    window.setTimeout(complete,DURATION+120);
  }

  prev.addEventListener('click',()=>slide(-1));
  next.addEventListener('click',()=>slide(1));
  shell.addEventListener('keydown',e=>{
    if(e.key==='ArrowUp'){e.preventDefault();slide(-1)}
    if(e.key==='ArrowDown'){e.preventDefault();slide(1)}
  });

  viewport.addEventListener('touchstart',e=>{
    touchStartY=e.changedTouches[0].clientY;
  },{passive:true});
  viewport.addEventListener('touchend',e=>{
    if(touchStartY===null)return;
    const dy=e.changedTouches[0].clientY-touchStartY;
    if(Math.abs(dy)>50)slide(dy<0?1:-1);
    touchStartY=null;
  },{passive:true});

  let resizeTimer;
  window.addEventListener('resize',()=>{
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(()=>{
      if(!animating)renderStatic();
    },120);
  });

  renderStatic();
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initExperienceCarousel);
else initExperienceCarousel();
})();

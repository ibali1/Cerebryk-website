const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx=0,my=0,rx=0,ry=0;
    if(window.innerWidth>768){
      document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
      function animateRing(){rx+=(mx-rx)*0.1;ry+=(my-ry)*0.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animateRing);}
      animateRing();
      document.querySelectorAll('a,button,.service-card,input,textarea,select').forEach(el=>{
        el.addEventListener('mouseenter',()=>{cursor.classList.add('hovered');ring.classList.add('hovered');});
        el.addEventListener('mouseleave',()=>{cursor.classList.remove('hovered');ring.classList.remove('hovered');});
      });
    }
    const nav=document.getElementById('nav');
    window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>50));
    document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('mobileMenu').classList.add('open'));
    document.getElementById('menuClose').addEventListener('click',()=>document.getElementById('mobileMenu').classList.remove('open'));
    function closeMobile(){document.getElementById('mobileMenu').classList.remove('open');}
    const observer=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*100);observer.unobserve(e.target);}});},{threshold:0.08});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    function handleSubmit(e){e.preventDefault();const b=e.target.querySelector('.form-submit');b.textContent='Message Sent \u2713';b.style.opacity='0.7';b.disabled=true;}

 const body = document.body;
    const btnHamb = document.querySelector('.hamburger');
    const menu = document.getElementById('mobile-menu');
    const btnClose = document.querySelector('.side-menu .close');
    const backdrop = document.querySelector('.backdrop');

    function openMenu(){
      body.classList.add('menu-open');
      menu.setAttribute('aria-hidden','false');
      btnHamb.setAttribute('aria-expanded','true');
      backdrop.style.display = 'block';
      backdrop.hidden = false;
    }
    function closeMenu(){
      body.classList.remove('menu-open');
      menu.setAttribute('aria-hidden','true');
      btnHamb.setAttribute('aria-expanded','false');
      backdrop.style.display = 'none';
      backdrop.hidden = true;
    }

    btnHamb.addEventListener('click', ()=>{
      const expanded = btnHamb.getAttribute('aria-expanded') === 'true';
      expanded ? closeMenu() : openMenu();
    });
    btnClose.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeMenu(); });
   //----------------------------------- HEADER ---------------------------------------//




   
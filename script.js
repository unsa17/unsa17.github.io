
    document.getElementById('contactBtn').addEventListener('click', ()=>{
      const t = document.getElementById('toast');
      t.textContent = 'Not Here';
      t.style.display = 'block';
      setTimeout(()=> t.style.display='none',2600);
    });

    document.getElementById('cvBtn').addEventListener('click', ()=>{
  
      const a = document.createElement('a');
      a.href = 'data:text/plain;base64,' + btoa('UNSA_L4crum By Subject 17');
      a.download = 'L4crum.txt';
      a.click();
    });


    (function typeHeadline(){
      const el = document.querySelector('.title');
      const full = el.textContent.trim();
      el.textContent = '';
      let i=0;
      const iv = setInterval(()=>{
        el.textContent += full[i++]||'';
        if(i>full.length) clearInterval(iv);
      },50);
    })();
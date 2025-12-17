document.addEventListener('DOMContentLoaded',function(){
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if(navToggle){
    navToggle.addEventListener('click',()=>{
      if(nav.style.display === 'block') nav.style.display = '';
      else nav.style.display = 'block';
    });
  }

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name||!email||!message){
        alert('Por favor, preencha todos os campos.');
        return;
      }
      alert('Mensagem enviada (exemplo). Obrigado, '+name+'!');
      form.reset();
    });
  }
});

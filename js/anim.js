

const titre = document.querySelector('.apropos');
const detail = document.querySelector('.Description');
const projet = document.querySelector('.projet-header');
const contactx = document.querySelector('.contact');

titre.classList.remove('apropos');
detail.classList.remove('Description');
projet.classList.remove('projet-header');
contactx.classList.remove('contact-items');

// INTERCEPTE A PROPOS
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
     // console.log("viewport capté");
      titre.classList.add('apropos');
      detail.classList.add('Description');
 
      return;
    
    }

    titre.classList.remove('apropos');
    detail.classList.remove('Description');

   // console.log("viewport quitté");
  });
});
observer.observe(document.querySelector('.apropos-wrapper'));

// INTERCEPTE PROJET
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
     // console.log("viewport capté");
      projet.classList.add('projet-header');
      return;
    
    }
    projet.classList.remove('projet-header');
   // console.log("viewport quitté");
  });
});
observer2.observe(document.querySelector('.projet-wrapper'));

// INTERCEPTE CONTACT
const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`%c      ￣￣￣￣￣￣￣￣￣￣￣
      |＿_BAS DE PAGE＿＿|       
               (\__/) ||       
              (•ㅅ•) ||       
              / 　 づ `, "font-family:monospace");
     contactx.classList.add('contact');
      return;
    
    }
    contactx.classList.remove('contact');
   // console.log("viewport quitté");
  });
});
observer4.observe(document.querySelector('.contact'));





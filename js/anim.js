

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




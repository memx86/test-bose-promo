(() => {
  const refs = {
    faq1: document.querySelector('[data-faq1]'),
    faq2: document.querySelector('[data-faq2]'),
    faq3: document.querySelector('[data-faq3]'),
    faq4: document.querySelector('[data-faq4]'),
  };

  refs.faq1.addEventListener('click', toggleFaq1);
  refs.faq2.addEventListener('click', toggleFaq2);
  refs.faq3.addEventListener('click', toggleFaq3);
  refs.faq4.addEventListener('click', toggleFaq4);

  function toggleFaq1() {
    refs.faq1.classList.toggle('active');
  }
  function toggleFaq2() {
    refs.faq2.classList.toggle('active');
  }
  function toggleFaq3() {
    refs.faq3.classList.toggle('active');
  }
  function toggleFaq4() {
    refs.faq4.classList.toggle('active');
  }
})();

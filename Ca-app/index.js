const scrollFunction = () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    // header.classList.remove('initial-header');
    header.classList.add('fixed-header');
  } else {
    header.classList.remove('fixed-header');
    // header.classList.add('initial-header');
  }
};

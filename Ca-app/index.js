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

const toggleNav = () => {
  const nav = document.querySelector('nav');
  console.log(nav.classList.value);
  if (nav.classList.value === '') {
    nav.classList.add('responsive');
  } else {
    nav.classList.remove('responsive');
  }
};
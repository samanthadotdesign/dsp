const headerTag = document.querySelector('header');

// When we scroll the page, at a certain point (80px)
// Toggle a class to the header
document.addEventListener('scroll', () => {
  const pixels = window.pageYOffset;

  if (pixels > 80) {
    headerTag.classList.add('scrolled');
  } else {
    headerTag.classList.remove('scrolled');
  }
});

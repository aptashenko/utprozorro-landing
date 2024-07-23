export const scrollTo = (id, minus) => {
  const element = document.getElementById(id)
  const y = minus ? element.getBoundingClientRect().top + window.pageYOffset - minus : element.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
};

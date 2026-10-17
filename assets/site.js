const menu = document.querySelector('.menu');
const links = document.querySelector('.navlinks');
if (menu && links) {
  menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
}
const challenge = document.querySelector('select[name="challenge"]');
if (challenge) {
  const selected = new URLSearchParams(window.location.search).get('challenge');
  if (selected && Array.from(challenge.options).some((option) => option.value === selected)) challenge.value = selected;
}

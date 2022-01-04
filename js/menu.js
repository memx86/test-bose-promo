(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  const onMobileMenuClick = () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  };

  const onMobileMenuLinkClick = event => {
    if (!event.target.classList.contains('mobile-menu__link')) {
      return;
    }
    onMobileMenuClick();
  };

  menuBtnRef.addEventListener('click', onMobileMenuClick);
  mobileMenuRef.addEventListener('click', onMobileMenuLinkClick);
})();

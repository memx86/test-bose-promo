window.addEventListener('load', function () {
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    draggable: false,
    dots: '.dots',
  });
});

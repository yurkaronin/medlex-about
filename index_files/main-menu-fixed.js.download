const headerMain = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st == 0){
    headerMain.classList.remove('header_fixed');
  }else{
  if (st > lastScrollTop) {
    headerMain.classList.remove('header_fixed');
    headerMain.classList.add('header_hide');
  } else {
    headerMain.classList.remove('header_hide');
    headerMain.classList.add('header_fixed');
  }
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false);
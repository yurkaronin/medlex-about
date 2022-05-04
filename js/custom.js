/* const headerMain = document.querySelector('.custom-home-page');

if (headerMain !== true) {

  let body = document.querySelector("body");

  let bHeight = body.getBoundingClientRect().height;
  let screenY = window.innerHeight / 0.5;
  let btn = document.querySelector(".move-up");
  btn.classList.add("hidden");
  window.onscroll = function () {
    if (pageYOffset > screenY) {
      btn.classList.remove("hidden");

    } else {
      btn.classList.add("hidden");
    }
  }

  btn.onclick = function () {
    body.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

} */

// //плавная прокрутка до блока js
const anchors = document.querySelectorAll('a[data-target^="anchor"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); //отмена стандартного поведения элемента
    const sectionTarget = anchor.getAttribute("href");
    let targetOffset = document.querySelector("" + sectionTarget).offsetTop - 0;
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth"
    });
  });
}

// Кнопка наверх 
var goTopBtn = document.querySelector(".move-up");



if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
document.body.classList.add('custom-safari');
};

// document.querySelector('.krdMapBut').addEventListener("click", function (e) {
//   document.querySelector('.lg-video').style.paddingBottom = "200vh";
//   document.querySelector('.lg-video').style.marginTop = "-100vh";
// });
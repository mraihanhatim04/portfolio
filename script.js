window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "rgb(25, 25, 25)"; /* Warna baru ketika di-scroll */
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgb(25, 25, 25)"; /* Warna default ketika tidak di-scroll */
  }
}

new TypeIt(".ntmy", {
  speed: 100,
  waitUntilVisible: true,
}).go();

AOS.init();

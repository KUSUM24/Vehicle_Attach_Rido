// const header = document.getElementsByClassName("second-header-main");
// const sticky = header.offsetTop;
// const dor = document.getElementsByClassName("counts");
// console.log(header);
// const kscrollDown = () => {
//   if (window.pageYOffset > sticky) {
//     header[0].classList.add("sticky");
//   } else {
//     header[0].classList.remove("sticky");
//   }
// };
var header = document.getElementById("fixedHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

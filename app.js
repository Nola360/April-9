const button = document.querySelector('.modal_btn');
const modal = document.querySelector('.modal_bg')

button.addEventListener('click', () => {
  modal.classList.add('active');
  console.log('test');

})

// if (window.scrollHeight === 200) {
//   modal.classList.add('active');
// }
// // window.addEventListener('scroll', function () {

// // })
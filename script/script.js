const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click' , ()=>{
    navbarLinks.classList.toggle('active')
})

var modalButton = document.querySelector('.open');
var modalBG = document.querySelector('.posting-bg');
var modalClose = document.querySelector('.close')

modalButton.addEventListener('click' , function(){
    modalBG.classList.add('active-bg');
});

modalClose.addEventListener('click', function (){
    modalBG.classList.remove('active-bg');
})
window.onclick = function(event) {
  if (event.target == modalBG) {
    modalBG.classList.remove('active-bg');
  }
}

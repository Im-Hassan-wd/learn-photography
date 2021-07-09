//  NAvigetion bar
const burger = document.querySelector('.burger'),
list = document.querySelector('.title-content ul');

burger.addEventListener('click', () => {
    list.classList.toggle('active');
});


const carouselSlide = document.querySelector('.carousel_slide');
const carouselImages = document.querySelectorAll('.carousel_slide img');


let counter = 0;
//button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Adding functionality to the buttons
nextBtn.addEventListener('click', () => {
  counter-= 640
  carouselSlide.style.transform = `translateX(${counter}px)`
  carouselSlide.style.transition = "transform 0.9s ease-in-out";
  // console.log(counter)
  if(counter === -5120){
    counter = 0;
    carouselSlide.style.transition = "none";
  }
});
prevBtn.addEventListener('click', () => {
  counter+= 640
  carouselSlide.style.transform = `translateX(${counter}px)`
  carouselSlide.style.transition = "transform 0.9s ease-in-out";
  // console.log(counter)
  if(counter === 640){
    counter = -5120;
    carouselSlide.style.transition = "none";
  }
});


//carousel image slider
// const carouselSlide = document.querySelector('.carousel_slide');
// const carouselImages = document.querySelectorAll('.carousel_slide img');
//
// //button
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');
//
// //counter
// let counter = 0;
// const size = carouselImages[0].clientWidth;
//
// carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
//
// //button listener
// nextBtn.addEventListener('click', ()=>{
//
//     if(counter >= carouselImages.length -1) return;
//     carouselSlide.style.transition = "transform 0.9s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
// });
// prevBtn.addEventListener('click', ()=>{
//
//     if(counter <= 0) return;
//     carouselSlide.style.transition = 'transform 0.4s ease-in-out';
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
// });
//
//
// carouselSlide.addEventListener('transitionend', ()=>{
//     if(carouselImages[counter].id === 'lastClone'){
//             carouselSlide.style.transition = 'none';
//             counter = carouselImages.length -2 ;
//             carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
//     }
//     if(carouselImages[counter].id === 'firstClone'){
//             carouselSlide.style.transition = 'none';
//             counter = carouselImages.length -counter;
//             carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
//     }
// });

//camera scroll appear
// function cameraAppear() {
//     var camera = document.querySelector('.camera');
//     var cameraPosition = camera.getBoundingClientRect().top;
//     var screenPosition = window.innerHeight / 1.5;
//
//
//     if(cameraPosition < screenPosition){
//         camera.classList.add('appear');
//     }
// }
// window.addEventListener('scroll', cameraAppear);


//  become a member scroll appear

//  Header scroll change
// function changeHeader(){
//     const header = document.querySelector('.title-content');
//     const headerPosition = header.getBoundingClientRect().top / 40;
//     const screenPosition = window.innerHeight;
//     // console.log(screenPosition);
//     // console.log(headerPosition)
//
//     if(screenPosition === 667 ){
//       console.log('less then screenPosition')
//         header.style.background = '#00539cff';
//         // header.style.position = 'sticky'
//     }
//     if (headerPosition === 0){
//         header.style.background = '';
//     }
// }
// changeHeader()
// window.addEventListener('scroll', changeHeader);

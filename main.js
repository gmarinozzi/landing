// // Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

// let lastKnownScrollPosition = 0;
// let ticking = false;
let slide = 1;
const sections = [
  'brand',
  'servicios',
  'metodo',
  'principios',
  'action',
];

function doSomething() {
  // Do something with the scroll position
  // console.log(scrollPos)
  console.log('doSomething')
  
  // document.getElementById(`${sections[slide - 1]}`).classList.add("remove");
  // document.querySelector(`#${sections[slide - 1]} + span`).classList.add("remove")
  // document.getElementById(`${sections[slide]}`).classList.remove("remove");
  // document.querySelector(`#${sections[slide - 1]} + span`).classList.remove("remove")

  // slide += 1

  
  switch (slide) {
    case 1:
      document.getElementById('brand').classList.add("remove");
      document.querySelector("#brand + span").classList.add("remove")
      document.getElementById('servicios').classList.remove("remove");
      document.querySelector("#servicios + span").classList.remove("remove")
      // document.getElementById('servicios').classList.remove("hide");
      slide += 1    
      break;
    case 2:
      document.getElementById('servicios').classList.add("remove");
      document.querySelector("#servicios + span").classList.add("remove")
      document.getElementById('metodo').classList.remove("remove");
      document.querySelector("#metodo + span").classList.remove("remove")
      // document.getElementById('metodo').classList.remove("hide");
      slide += 1    
      break;
    case 3:
      document.getElementById('metodo').classList.add("remove");
      document.querySelector("#metodo + span").classList.add("remove")
      document.getElementById('principios').classList.remove("remove");
      document.querySelector("#principios + span").classList.remove("remove")
      // document.getElementById('principios').classList.remove("hide");
      slide += 1    
      break;
    case 4:
      document.getElementById('principios').classList.add("remove");
      document.querySelector("#principios + span").classList.add("remove")
      document.getElementById('action').classList.remove("remove");
      document.querySelector("#action + span").classList.remove("remove")
      // document.getElementById('action').classList.remove("hide");
      break;
    case 5:
      break;
  }

  window.scrollTo(0,0); 



  console.log(slide)
}


// function debounce_leading(func, timeout = 300){
//   let timer;
//   return (...args) => {
//     if (!timer) {
//       console.log('debounce_leading')

//       func.apply(this, args);
//     }
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       timer = undefined;
//     }, timeout);
//   };
// }

// document.addEventListener('scroll', function(e) {
//   debounce_leading(() => saveInput())
// });


// // document.addEventListener('scroll', function(e) {
// //   lastKnownScrollPosition = window.scrollY;

// //   if (!ticking && lastKnownScrollPosition == window.scrollY) {
// //     window.requestAnimationFrame(function() {
// //       doSomething(lastKnownScrollPosition);
// //       ticking = false;
// //     });

// //     ticking = true;
// //   }
// // });


// function saveInput(){
//   console.log('Saving data');
// }

// // const processChanges = debounce_leading(() => saveInput());


  
function debounce_leading(func, timeout = 300){
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}
  
function saveInput(){
  console.log('Saving data');
}

const processChanges = debounce_leading(() => doSomething());

// document.addEventListener('scroll', function(e) {
//   lastKnownScrollPosition = window.scrollY;

//   window.requestAnimationFrame(function() {
//     console.log(lastKnownScrollPosition)
//     // processChanges(lastKnownScrollPosition);
//     processChanges();
//   });
// });


window.addEventListener("scroll", processChanges);
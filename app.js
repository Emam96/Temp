// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     const square = entry.target.querySelector(".L1");

//     if (entry.isIntersecting) {
//       square.classList.add("L1-anime");
//       observer2.unobserve(document.querySelector(".L1wrap"));  // this part
//       return;
//     }

//     square.classList.remove("L1-anime");
//   });
// });

// observer.observe(document.querySelector(".L1wrap"));









const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('L1-anime');
      }
    });
  });
  
  observer.observe(document.querySelector('.L1wrap'));

 //////////////////////////////////////////////////////////////////





// const observer2 = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     const square = entry.target.querySelector(".L2");

//     if (entry.isIntersecting) {
//       square.classList.add("L2-anime");
//       return;
//     }

//     square.classList.remove("L2-anime");
//   });
// });

// observer2.observe(document.querySelector(".L2wrap"));





const observer2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('L2-anime');
      }
    });
  });
  
  observer2.observe(document.querySelector('.L2wrap'));





////////////////////////////////////////////////////////////////




const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".L3");

    if (entry.isIntersecting) {
      square.classList.add("L3-anime");
      return;
    }

    square.classList.remove("L3-anime");
  });
});

observer3.observe(document.querySelector(".L3wrap"));







//////////////////////////////////////////////////////////////////////////

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".L4");

    if (entry.isIntersecting) {
      square.classList.add("L4-anime");
      return;
    }

    square.classList.remove("L4-anime");
  });
});

observer4.observe(document.querySelector(".L4wrap"));






/////////////////////////////////////////////////////////////////////



const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".L5");

    if (entry.isIntersecting) {
      square.classList.add("L5-anime");
      return;
    }

    square.classList.remove("L5-anime");
  });
});

observer5.observe(document.querySelector(".L5wrap"));

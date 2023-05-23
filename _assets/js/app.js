// Add your custom javascript here
console.log("Hi from Federalist");

// GSA back-to-top button
let gsabtt = document.getElementById("gsabtt");

// Target element button with an id of 
window.onscroll = function() {scrollFunction()};

// When the user scrolls down 600px, show the button for going back-to-top of the document
function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    gsabtt.style.display = "block";
  } else {
    gsabtt.style.display = "none";
  }
}
// User is taken back-to-top of document after clicking the button in the lower right corner of the site.
function gsaTop() {
  document.body.scrollTop = 0; // safari
  document.documentElement.scrollTop = 0; // the rest 
}


// Toggle accordions open or closed. 
// Open
// function expandToggle(){
//     // variable for accordion headers and body
//     var closedaccordionheader = document.getElementsByClassName('usa-accordion__button gsa-normal-text');
//     var closedaccordionbody = document.getElementsByClassName('usa-accordion__content usa-prose');

//     // Loop through elements on the page with the CSS usa-accordion class
//     for(var i = 0;i < document.  ;i++){
      
//     }

// }
// // Closed
// function collapseToggle(){
//   // variable for accordion headers and body
//   var openaccordionheaders = document.getElementsByClassName('usa-accordion__button gsa-normal-text');
//   var openaccordionbody = document.getElementsByClassName('usa-accordion__content usa-prose');

//   // Loop through elements on the page with the CSS usa-accordion class
//   for(var i = 0;openaccordions.length;i++){

//   }

// }

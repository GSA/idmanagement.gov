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
//
// Target all accordion button headers and content areas
// Only affects elements with the classes gsa-target-accordion-header and gsa-target-accordion-content-area
// Add these classes to accordion header and content areas elements respectivly to target those elements in with the JS below. 
//
var accordionbutton = document.getElementsByClassName('gsa-target-accordion-header');
var accordioncontent = document.getElementsByClassName('gsa-target-accordion-content-area');
// 
// Open Accordion
function expandToggle(){
    // Loop through accordion button, setting the aria-expanded attribute to false(changes the icon to -)
    for(var i = 0;i < accordionbutton.length;i++){
       accordionbutton[i].setAttribute('aria-expanded','true');
    }
    // Loop through accordion content area, removing the hidden attribute to display the accordion body)
    for(var i = 0;i < accordioncontent.length;i++){
      accordioncontent[i].removeAttribute('hidden');
    }
}
// Closed Accordion
function collapseToggle(){
    // Loop through accordion button, setting the aria-expanded attribute to false(changes the icon to -)
    for(var i = 0;i < accordionbutton.length;i++){
      accordionbutton[i].setAttribute('aria-expanded','false');
   }
   // Loop through accordion content area, removing the hidden attribute to display the accordion body)
   for(var i = 0;i < accordioncontent.length;i++){
     accordioncontent[i].setAttribute('hidden','');
   }
}

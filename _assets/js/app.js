// Add your custom javascript here
console.log("Hi from Federalist");


// Navigate function for Accessibility Navigation:  
// Used to provide an anchorless link to content for Cards, use in an onclick= event 
// inside the top-level-element that gains focus when navigating with a keyboard only.
// Also apply the CSS class 'gsa-card' to that element so the cursor displays as a pointer.
// 
// Mainly for Cards but may be used with other elements that require keyboard navigation
// to remain clean with visible navigation not disappearing from the screen when using the keyboard
// only to navigate.
//
// These two function allow you to target a new tab or the same window
// navigate opens in the same window(_self)
function navigate(destination) {
  var type = window.event.type;
    // check for click or keydown (enter and spacebar) events
    if (type === 'click' || (type === 'keydown' && event.keyCode === 13 || event.keyCode === 32)) {
      window.open(destination,"_self");
      event.preventDefault();
      event.stopPropagation();
    }
}
// navigateTo open in a new tab or window
function navigateTo(destination) {
  var type = window.event.type;
    // check for click or keydown (enter and spacebar) events
    if (type === 'click' || (type === 'keydown' && event.keyCode === 13 || event.keyCode === 32) ) {
      window.open(destination);
      event.preventDefault();
      event.stopPropagation();
    }
}




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
  var type = window.event.type;
  if (type === 'click' || (type === 'keydown' && event.keyCode === 13)) {
    // Loop through accordion button, setting the aria-expanded attribute to false(changes the icon to -)
    for(var i = 0;i < accordionbutton.length;i++){
      accordionbutton[i].setAttribute('aria-expanded','true');
    // }
    // // Loop through accordion content area, removing the hidden attribute to display the accordion body)
    // for(var i = 0;i < accordioncontent.length;i++){
      accordioncontent[i].setAttribute('tabindex','0');
      accordioncontent[i].removeAttribute('hidden');
    }

    event.preventDefault();
    event.stopPropagation();
  }

}
// Closed Accordion
function collapseToggle(){
  var type = window.event.type;
  if (type === 'click' || (type === 'keydown' && event.keyCode === 13)) {
    // Loop through accordion button, setting the aria-expanded attribute to false(changes the icon to -)
    for(var i = 0;i < accordionbutton.length;i++){
      accordionbutton[i].setAttribute('aria-expanded','false');
  //   }
  //  // Loop through accordion content area, removing the hidden attribute to display the accordion body)
  //   for(var i = 0;i < accordioncontent.length;i++){
      // accordioncontent[i].setAttribute('tabindex','-1');
      accordioncontent[i].setAttribute('hidden','');
    }

    event.preventDefault();
    event.stopPropagation();
  }
}

// Toggle Accordion Focus (content area)
// function toggleFocus(){
//   if (type === 'click' || (type === 'keydown' && event.keyCode === 13 || event.keyCode === 32) ) {
//     // Loop through accordion button, setting the aria-expanded attribute to false(changes the icon to -)
//     for(var i = 0;i < accordionbutton.length;i++){
//       accordionbutton[i].setAttribute('aria-expanded','true');
//     // }
//     // // Loop through accordion content area, removing the hidden attribute to display the accordion body)
//     // for(var i = 0;i < accordioncontent.length;i++){
//       accordioncontent[i].setAttribute('tabindex','0');
//       accordioncontent[i].removeAttribute('hidden');
//     }

//     event.preventDefault();
//     event.stopPropagation();
//   }
// }
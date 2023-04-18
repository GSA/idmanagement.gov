// Pause and Resume Controls for the GSA Carousel for Accessibility
// Use the gsaCarouselToggle() function to pause and resuem the Carousel
// Developer: Clayton J. Barnette <clayton.barnette@gsa.gov>

// Global variables 
var gsac = document.getElementById('gsaCarousel');
var gsacarousel = bootstrap.Carousel.getInstance(gsac);

// Status variable
var gsaPaused = false;

function pauseCarousel(){
    gsacarousel.pause();
    gsaPaused = true;
    console.log("GSA Carousel Paused...")
}
// Resume Function
function resumeCarousel(){
    gsacarousel.cycle();
    gsaPaused = false;
    console.log("GSA Carousel Active...")
}
// Toggle Function
function gsaCarouselToggle(){
    if(gsaPaused == true){
        resumeCarousel();
    }else if(this._gsaPaused == false){
        pauseCarousel();
    }
}


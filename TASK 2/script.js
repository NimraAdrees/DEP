let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Modal
const modal = document.getElementById('myModal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementsByClassName('close')[0];

openModalButton.onclick = function() {
    modal.style.display = 'flex';
}

closeModalButton.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isActive = content.style.display === 'block';

        // Close all other accordion items
        document.querySelectorAll('.accordion-content').forEach(accContent => {
            accContent.style.display = 'none';
        });

        // Toggle the clicked item
        content.style.display = isActive ? 'none' : 'block';
    });
});

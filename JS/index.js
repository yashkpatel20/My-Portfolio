const btn = document.getElementById("btn-header");
const image = document.getElementById("image-header");

btn.addEventListener("mouseover", function () {
  image.src = "./Images/download_2.png";
});

btn.addEventListener("mouseout", function () {
  image.src = "./Images/download.png";
});

function updateMeter1(value) {
  const meterFill = document.querySelector('.meter-fill1');
  meterFill.style.width = value + '%';
}
updateMeter1(75);

function updateMeter2(value) {
  const meterFill = document.querySelector('.meter-fill2');
  meterFill.style.width = value + '%';
}
updateMeter2(75);

function updateMeter3(value) {
  const meterFill = document.querySelector('.meter-fill3');
  meterFill.style.width = value + '%';
}
updateMeter3(65);

function updateMeter4(value) {
  const meterFill = document.querySelector('.meter-fill4');
  meterFill.style.width = value + '%';
}
updateMeter4(50);

// slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Project");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//scroll from header

document.querySelectorAll('nav ul li').forEach((item, index) => {
  item.addEventListener('click', () => {
    let sectionId = index === 0 ? 'home' : index === 1 ? 'about' : index === 2 ? 'projects' : index === 3 ? 'contect' : null;
    if (sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.getElementById('get-btn').addEventListener('click', () => {
  let sectionI = 'contect';
  document.getElementById(sectionI).scrollIntoView({ behavior: 'smooth' });
});

//resume download

function downloadResume() {
  const link = document.createElement('a');
  link.href = './Images/YASH_RESUME.pdf';
  link.download = 'Yash_Patel_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

//dark mode 

// Dark Mode Toggle
document.querySelector('.dark-btn').addEventListener('click', function () {
  // Toggle dark mode for the body
  document.body.classList.toggle('dark-mode');

  // Elements to change color
  const slides = ['.foot span', '.slide5 h1', '.slide3 h1', '#intro-text', '#intro-text span', '#intro-text label', '.Hero', '.Slide1', '.slide3', '.slide5'];
  const icons = ['.social'];
  slides.forEach(slideClass => {
    const slideElement = document.querySelector(slideClass);
    if (slideElement) {
      // Check if dark mode is enabled
      if (document.body.classList.contains('dark-mode')) {
        slideElement.style.backgroundColor = 'black';
        slideElement.style.color = '#e7e3e3';
      } else {
        // Revert to original colors
        slideElement.style.backgroundColor = ''; // Default or initial background color
        slideElement.style.color = ''; // Default or initial text color
      }
    }
  });
  icons.forEach(iconsclass => {
    const iconElemt = document.querySelector(iconsclass);
    if (iconElemt) {
      if (document.body.classList.contains('dark-mode')) {
        iconElemt.style.backgroundColor = "#e7e3e3";
      } else {
        iconElemt.style.backgroundColor = '';
      }
    }
  });

});

//email
function sendEmail() {
  const emailSpan = document.querySelector('.email span').textContent;
  window.location.href = `mailto:${emailSpan}`;
}
//phone
function callPhone() {
  const phoneSpan = document.querySelector('.phone span').textContent;
  window.location.href = `tel:${phoneSpan}`;
}
//map
function openMap() {
  const locationSpan = document.querySelector('.location span').textContent;
  const query = encodeURIComponent(locationSpan);
  window.open(`https://www.google.com/maps?q=${query}`, '_blank');
}
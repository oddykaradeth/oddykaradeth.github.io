// SCROLL BUTTON
const btn = document.getElementById('scrollBtn');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  if (scrollY >= maxScroll - 50) {
    btn.textContent = '↑';
  } else {
    btn.textContent = '↓';
  }
});

btn.addEventListener('click', () => {
  if (btn.textContent === '↓') {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});

const wireframes = document.querySelectorAll('.carousel-track img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.lightbox .close');

wireframes.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});

const carousel = document.querySelector('.carousel');

if (carousel) {
  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('img');
  const nextBtn = carousel.querySelector('.next');
  const prevBtn = carousel.querySelector('.prev');

  let index = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });
}

// LIGHTBOX
// const wireframe = document.getElementById('wireframeImg');
// const lightbox = document.getElementById('lightbox');
// const lightboxImg = document.getElementById('lightboxImg');
// const closeBtn = document.querySelector('.lightbox .close');

// wireframe.addEventListener('click', () => {
//   lightbox.style.display = 'flex';
//   lightboxImg.src = wireframe.src;
// });

// closeBtn.addEventListener('click', () => {
//   lightbox.style.display = 'none';
// });

// lightbox.addEventListener('click', (e) => {
//   if (e.target !== lightboxImg) {
//     lightbox.style.display = 'none';
//   }
// });


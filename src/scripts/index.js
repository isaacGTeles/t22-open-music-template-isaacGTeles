// script global

const slider = document.querySelector('.preco-slider');

slider.addEventListener('input', function () {
  const min = slider.min;
  const max = slider.max;
  const val = slider.value;
  
  const percentage = ((val - min) / (max - min)) * 100;

  slider.style.background = `linear-gradient(to right, var(--brand-1) 0%, var(--brand-1) ${percentage}%, var(--gray-5) ${percentage}%, var(--gray-5) 100%)`;
});

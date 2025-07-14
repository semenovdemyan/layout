window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 500);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const cube = document.querySelector('.hero__cube');
  const main = document.querySelector('.main');

  const initialOffsetVH = 10;
  const maxTranslateVH = 140;

  const vhToPx = (vh) => window.innerHeight * (vh / 100);

  const updateCubeTransform = () => {
    const scrollY = main.scrollTop;
    const maxTranslatePx = vhToPx(maxTranslateVH - initialOffsetVH);

    const translateY = Math.min(scrollY, maxTranslatePx);
    cube.style.transform = `translateY(${translateY}px)`;
  };

  main.addEventListener('scroll', updateCubeTransform);
  window.addEventListener('resize', updateCubeTransform);
  updateCubeTransform();
});
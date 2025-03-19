import Swiper1 from './swiper-bundle.min.js';

export default function decorate(block) {
//   console.log(block);
  block.classList.add('swiper');
  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');
  Array.from(block.children).forEach((row) => {
    row.classList.add('swiper-slide');
    swiperWrapper.append(row);
  });
  block.append(swiperWrapper);

  Swiper1(block);
}

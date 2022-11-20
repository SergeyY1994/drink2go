// mobile-navigation
const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-navigation__toggle');
const mainHeaderContainer = document.querySelector('.main-header__container');
const windowInnerWidth = window.innerWidth;

if (navMain && navToggle && mainHeaderContainer) {
  mainHeaderContainer.style.flexDirection = 'row';
  mainHeaderContainer.style.paddingRight = '60px'

  if (windowInnerWidth >= 768 && windowInnerWidth < 1440) {
    mainHeaderContainer.style.paddingRight = '20px';
  } else if (windowInnerWidth >= 1440) {
    mainHeaderContainer.style.paddingRight = '40px';;
  }

  navMain.classList.remove('main-navigation--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-navigation--closed')) {
      navMain.classList.remove('main-navigation--closed');
      navMain.classList.add('main-navigation--opened');
    } else {
      navMain.classList.add('main-navigation--closed');
      navMain.classList.remove('main-navigation--opened');
    }
});

}

// swiper
new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// leaflet
const map =L.map('map')
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 18);

const tiles = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: mainPinIcon,
  }
);

marker.addTo(map);

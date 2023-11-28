
const greetingElement = document.getElementById('greeting');
const contentElement = document.getElementById('content');
const infoElement = document.getElementById('additional-content');
const detailsElement = document.getElementById('more-content');
const headingElement = document.getElementById('main-word');


document.getElementById('lang-en').addEventListener('click', translateToEnglish);
document.getElementById('lang-ru').addEventListener('click', translateToRussian);
document.getElementById('lang-kk').addEventListener('click', translateToKazakh);
document.getElementById('lang-es').addEventListener('click', translateToSpanish);



function translateToEnglish() {
  greetingElement.textContent = 'Hello, World!';
  contentElement.textContent = 'This is the content of the webpage.';
  infoElement.textContent = 'This is some additional information.';
  detailsElement.textContent = 'These are some additional details.';
  headingElement.textContent = 'Welcome to Language Translation Demo';
}

function translateToRussian() {
  greetingElement.textContent = 'Привет, Мир!';
  contentElement.textContent = 'Это содержимое веб-страницы.';
  infoElement.textContent = 'Это дополнительная информация.';
  detailsElement.textContent = 'Это некоторые дополнительные детали.';
  headingElement.textContent = 'Добро пожаловать в демонстрацию перевода на языке';
}

function translateToKazakh() {
  greetingElement.textContent = 'Сәлем, Әлем!';
  contentElement.textContent = 'Бұл веб-беттің мазмұны.';
  infoElement.textContent = 'Бұл қосымша ақпарат.';
  detailsElement.textContent = 'Бұл көбірек деталдар.';
  headingElement.textContent = 'Тіл аударма демонстрациясына қош келдіңіз';
}

function translateToSpanish() {
  greetingElement.textContent = '¡Hola, Mundo!';
  contentElement.textContent = 'Este es el contenido de la página web.';
  infoElement.textContent = 'Esta es información adicional.';
  detailsElement.textContent = 'Estos son algunos detalles adicionales.';
  headingElement.textContent = 'Bienvenido a la demostración de traducción de idiomas';
}




const modal = document.getElementById('modal');
const modalClose = document.querySelector('.close');
const changeBgBtn = document.getElementById('change-bg');
const imageUrlInput = document.getElementById('image-url');


changeBgBtn.addEventListener('click', function () {
  modal.style.display = 'block';
});


modalClose.addEventListener('click', function () {
  modal.style.display = 'none';
});


document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const imageUrl = imageUrlInput.value;
  document.body.style.background = `url(${imageUrl}) no-repeat center / cover`;
  modal.style.display = 'none';
});


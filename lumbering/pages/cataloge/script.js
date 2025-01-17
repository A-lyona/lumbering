/*.........................................................бургер-меню.................................................*/

let burger = document.querySelector('.burger_wrapper');
let burgerBut = document.querySelector('.burger_button');

burgerBut.addEventListener('click', function () {
  if (burgerBut.classList.contains('change')) {
    burgerBut.classList.remove('change');
    burger.style.display = 'none';
  } else {
    burgerBut.classList.add('change');
    burger.style.display = 'flex';
  }
});

/*.........................................................Модальное окно.................................................*/

let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let modalWrapper = document.querySelector('.modal_wrapper');
let inputButton = document.querySelector('.input_but');

btn.onclick = function () {
  //открытие модального окна
  modal.style.display = 'flex';
  modalWrapper.style.display = 'flex';
};

window.onclick = function (event) {
  // закрыть по любому месту вне поля
  if (event.target == modal) {
    closePopap();
  }
};

inputButton.addEventListener('click', function () {
  closePopap();
});

function closePopap() {
  modal.style.display = 'none';
  modalWrapper.style.display = 'none';
}

/*.........................................................Каталог.................................................*/

let btnOne = document.getElementById('btnOne');
let btnTwo = document.getElementById('btnTwo');
let btnThree = document.getElementById('btnThree');
let btnFour = document.getElementById('btnFour');
let btnFive = document.getElementById('btnFive');
let btnSix = document.getElementById('btnSix');

btnOne.onclick = function () {
  //открытие модального окна
  modal.style.display = 'flex';
  modalWrapper.style.display = 'flex';
};

btnTwo.onclick = function () {
  //открытие модального окна
  modal.style.display = 'flex';
  modalWrapper.style.display = 'flex';
};

btnThree.onclick = function () {
  //открытие модального окна
  modal.style.display = 'flex';
  modalWrapper.style.display = 'flex';
};

btnFour.onclick = function () {
  //открытие модального окна
  modal.style.display = 'flex';
  modalWrapper.style.display = 'flex';
};

btnFive.onclick = function () {
  //открытие модального окна
  modal.style.display = 'flex';
  modalWrapper.style.display = 'flex';
};

btnSix.onclick = function () {
  //открытие модального окна
  modal.style.display = 'flex';
  modalWrapper.style.display = 'flex';
};

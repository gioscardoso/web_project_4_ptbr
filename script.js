// Vamos encontrar o formulário no DOM
const formElement = document.querySelector('.form');
const profileButton = document.querySelector('.profile__button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formClose = document.querySelector('.popup__button');
const submitForm = document.querySelector('.popup__save-button');
const inputNome = document.querySelector('.popup__heading');
const inputJob = document.querySelector('.popup__subheading');
const popUp = document.querySelector('.popup');
const backgroundForm = document.querySelector('.background-form');


inputNome.value = profileTitle.textContent;
inputJob.value = profileSubtitle.textContent;

profileButton.addEventListener('click', () => {
  formElement.style.display = 'block';
  formElement.style.overflow = 'hidden';
  inputNome.style.value = 'jack'
});
formElement.addEventListener('submit', (event) => {
    event.preventDefault()
  profileTitle.textContent = inputNome.value;
  profileSubtitle.textContent = inputJob.value;
});

// Aqui irei programar para ele fechar com click no X e no submit

formClose.addEventListener('click', () => {
  formElement.style.display = 'none'
})

submitForm.addEventListener('click', () => {
  formElement.style.display = 'none'
})

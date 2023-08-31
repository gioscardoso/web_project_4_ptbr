// Vamos encontrar o formulário no DOM
const formElement = document.querySelector('.form');
const profileButton = document.querySelector('.profile__button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const closeButton = document.querySelector('.popup__button');
const saveButton = document.querySelector('.popup__save-button');
const nameInput = document.querySelector('.popup__heading');
const jobInput = document.querySelector('.popup__subheading');
const popUp = document.querySelector('.popup');
const backgroundForm = document.querySelector('.background-form');

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

formElement.addEventListener('submit', (event) => {
  evt.preventDefault()
  nameInput.style.value = profileTitle.textContent;
  jobInput.style.value = profilesubtitle.textContent;
});


profileButton.addEventListener('click', () => {
  formElement.style.display = 'block';
  formElement.style.overflow = 'hidden';

});

closeButton.addEventListener('click', () => {
  formElement.style.display = 'none';
  backgroundForm.style.opacity = '1';

});

saveButton.addEventListener('click', () => {
  formElement.style.display = 'none';
  backgroundForm.style.opacity = '1';

});

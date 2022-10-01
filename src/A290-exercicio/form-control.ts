import { FORMERR } from 'dns';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  hideErrorMenssages(this);
});

function hideErrorMenssages(form: HTMLFormElement): void;
form
  .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
  .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));

function showError(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLSpanElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

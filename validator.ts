const submitBtn: HTMLInputElement = document.querySelector("#submit-btn") as HTMLInputElement;
const password: HTMLInputElement = document.querySelector("#password") as HTMLInputElement;
const confirmPassword: HTMLInputElement = document.querySelector("#confirm-password") as HTMLInputElement;
const errorText: HTMLSpanElement = document.querySelector("#error-text") as HTMLSpanElement;
let invalidState: boolean = false;

submitBtn.addEventListener('click', function(event) {
  if (password.value !== confirmPassword.value && !invalidState) {
    event.preventDefault();
    invalidState = true;
    errorText.textContent = "Passwords do not match";
      errorText.classList.add("error-text");
      password.classList.add("input-error");
      confirmPassword.classList.add("input-error");
    }
  });

var submitBtn = document.querySelector("#submit-btn");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");
var errorText = document.querySelector("#error-text");
var invalidState = false;
submitBtn.addEventListener('click', function (event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        invalidState = true;
        errorText.textContent = "Passwords do not match";
        errorText.classList.add("error-text");
        password.classList.add("input-error");
        confirmPassword.classList.add("input-error");
    }
    while (invalidState) {
        password.addEventListener('input', function (event) {
            if (password.value === confirmPassword.value) {
                invalidState = false;
                errorText.textContent = "";
                password.classList.remove("input-error");
                confirmPassword.classList.remove("input-error");
                errorText.classList.remove("error-text");
            }
        });
        confirmPassword.addEventListener('input', function (event) {
            if (password.value === confirmPassword.value) {
                invalidState = false;
                errorText.textContent = "";
                password.classList.remove("input-error");
                confirmPassword.classList.remove("input-error");
                errorText.classList.remove("error-text");
            }
        });
    }
});

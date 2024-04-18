(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    });
  });
})();

//custom validation

document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector(".submit-btn");
  submit.addEventListener("click", (event) => {
    const fName = document.querySelector(".name");
    const userName = document.querySelector(".username");
    const errMsg = document.querySelector(".errMsg");

    if (fName.value === userName.value && fName.value && userName.value !== "") {
      errMsg.style.display = "block";
      event.preventDefault();
    } else {
      errMsg.style.display = "none";
    }
  });
});

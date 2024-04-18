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
  function checkUsername() {
    const fName = document.querySelector(".name");
    const userName = document.querySelector(".username");
    const errMsg = document.querySelector(".errMsg");
    const submit = document.querySelector(".submit-btn");

    submit.addEventListener("click", () => {
      if (fName.value === userName.value && fName.value && userName.value !== "") {
        errMsg.style.display = "block";
      } else {
        errMsg.style.display = "none";
      }
    });
  }

  checkUsername(); 
});

const formRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector(".feedback-form input");
const messageRef = document.querySelector(".feedback-form textarea");

formRef.addEventListener("input", onFormInput);

function onFormInput() {

    const userData = {
        email: emailRef.value.trim(),
        message: messageRef.value.trim(),
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    if (emailRef.value.trim() === '' || messageRef.value.trim() === '') {
        alert('Please enter your email and message');
        return;
      }
    console.log("Data submit:", JSON.parse(localStorage.getItem("feedback-form-state")));
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}